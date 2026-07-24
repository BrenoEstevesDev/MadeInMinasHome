"use strict";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const header = document.querySelector("[data-header]");
const hero = document.querySelector(".hero");
let parallaxQueued = false;

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

function updateHeroParallax() {
  if (!hero || prefersReducedMotion) {
    return;
  }

  const shift = Math.min(window.scrollY * 0.08, 42);
  hero.style.setProperty("--hero-y", `${shift}px`);
}

updateHeroParallax();

function queueHeroParallax() {
  if (parallaxQueued) {
    return;
  }

  parallaxQueued = true;
  window.requestAnimationFrame(() => {
    updateHeroParallax();
    parallaxQueued = false;
  });
}

window.addEventListener("scroll", queueHeroParallax, { passive: true });

const revealGroups = [
  ".hero .eyebrow",
  ".hero h1",
  ".hero-copy",
  ".hero-actions",
  ".benefits article",
  ".section-grid > *",
  ".products-showcase > *",
  ".product-card",
  ".process-intro",
  ".steps article",
  ".history-photo",
  ".history-copy",
  ".fabric-list article",
  ".faq-grid > *",
  ".quote-intro",
  ".quote-form label",
  ".form-actions"
];

const revealItems = [...document.querySelectorAll(revealGroups.join(","))];

if (revealItems.length) {
  document.body.classList.add("animations-ready");

  revealItems.forEach((item, index) => {
    item.classList.add("reveal");

    if (item.matches(".product-photo, .history-photo")) {
      item.classList.add("reveal-scale");
    }

    if (item.matches(".quote-form label, .benefits article, .fabric-list article")) {
      item.classList.add("reveal-soft");
    }

    item.style.setProperty("--reveal-delay", `${Math.min((index % 4) * 90, 270)}ms`);
  });

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12
    });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}

const quoteForm = document.querySelector("[data-quote-form]");

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(quoteForm);
  const message = [
    "Olá! Gostaria de pedir um orçamento para um projeto sob medida.",
    `Nome: ${formData.get("nome") || "-"}`,
    `Produto: ${formData.get("produto") || "-"}`,
    `Medidas aproximadas: ${formData.get("medidas") || "-"}`,
    `Ambiente: ${formData.get("ambiente") || "-"}`,
    `CEP: ${formData.get("cep") || "-"}`,
    `Detalhes: ${formData.get("detalhes") || "-"}`
  ].join("\n");

  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
