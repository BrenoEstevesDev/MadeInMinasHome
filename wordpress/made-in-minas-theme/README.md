# Made in Minas WordPress Theme

Tema WordPress da home `https://www.madeinmgfutons.com.br/`.

## Como instalar

1. Envie a pasta `made-in-minas-theme` para:

   ```text
   wp-content/themes/
   ```

2. No painel WordPress, vá em `Aparência > Temas`.
3. Ative o tema `Made in Minas`.
4. Se quiser usar uma página estática como home, vá em `Configurações > Leitura` e selecione a página inicial.

## Páginas do site

O tema já inclui os três modelos:

- Home: `https://www.madeinmgfutons.com.br/`
- Landing futon: `https://www.madeinmgfutons.com.br/lpfuton01`
- Landing futon externo: `https://www.madeinmgfutons.com.br/lpfuntonexterno`

No painel do WordPress, crie duas páginas vazias com os slugs abaixo:

- `lpfuton01`
- `lpfuntonexterno`

O WordPress vai aplicar automaticamente os arquivos `page-lpfuton01.php` e `page-lpfuntonexterno.php` por causa desses slugs.

Os estilos e scripts da home são carregados pelo `functions.php`, mantendo a mesma ordem do projeto HTML original. As duas landings React usam os bundles gerados dentro de `landings/`.
