<?php

function made_in_minas_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'made_in_minas_setup');

function made_in_minas_asset($path) {
    return get_template_directory_uri() . '/' . ltrim($path, '/');
}

function made_in_minas_landing_slug_from_request() {
    $path = isset($_SERVER['REQUEST_URI']) ? wp_parse_url(wp_unslash($_SERVER['REQUEST_URI']), PHP_URL_PATH) : '';
    $slug = trim((string) $path, '/');

    if (in_array($slug, ['lpfuton01', 'lpfuntonexterno'], true)) {
        return $slug;
    }

    return '';
}

function made_in_minas_is_react_landing() {
    return is_page(['lpfuton01', 'lpfuntonexterno']) || made_in_minas_landing_slug_from_request() !== '';
}

function made_in_minas_landing_document_title($title) {
    if (made_in_minas_is_react_landing()) {
        return 'Made in Minas';
    }

    return $title;
}
add_filter('pre_get_document_title', 'made_in_minas_landing_document_title');

function made_in_minas_landing_title_parts($title) {
    if (made_in_minas_is_react_landing()) {
        $title['title'] = 'Made in Minas';
        unset($title['tagline']);
    }

    return $title;
}
add_filter('document_title_parts', 'made_in_minas_landing_title_parts');

function made_in_minas_render_landing_route() {
    $slug = made_in_minas_landing_slug_from_request();

    if ($slug === '') {
        return;
    }

    global $wp_query;

    if ($wp_query) {
        $wp_query->is_404 = false;
    }

    status_header(200);
    nocache_headers();
    include get_template_directory() . '/page-' . $slug . '.php';
    exit;
}
add_action('template_redirect', 'made_in_minas_render_landing_route', 0);

function made_in_minas_enqueue_assets() {
    if (made_in_minas_is_react_landing()) {
        return;
    }

    $theme_uri = get_template_directory_uri();
    $version = wp_get_theme()->get('Version');

    $styles = [
        'reset',
        'variables',
        'global',
        'header',
        'hero',
        'benefits',
        'about',
        'products',
        'process',
        'history',
        'fabrics',
        'footer',
    ];

    foreach ($styles as $style) {
        wp_enqueue_style(
            'made-in-minas-' . $style,
            $theme_uri . '/assets/css/' . $style . '.css',
            [],
            $version
        );
    }

    wp_enqueue_script(
        'made-in-minas-script',
        $theme_uri . '/assets/js/script.js',
        [],
        $version,
        true
    );
}
add_action('wp_enqueue_scripts', 'made_in_minas_enqueue_assets');

function made_in_minas_favicon() {
    if (made_in_minas_is_react_landing()) {
        return;
    }

    printf(
        '<link rel="icon" href="%s">' . "\n",
        esc_url(made_in_minas_asset('assets/img/logo/MadeInBrasilFutons.ico'))
    );
}
add_action('wp_head', 'made_in_minas_favicon');
