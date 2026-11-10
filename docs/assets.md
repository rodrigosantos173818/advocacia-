# Origem dos assets

Imagem gerada pela ferramenta integrada `image_gen` (modo nativo), em 10/11/2026, para este projeto. Não foi usado CLI/API externo ou chave de API. A imagem foi inspecionada antes de integração. Não há rostos, marcas, credenciais ou representação de escritório real.

## Arquivos no workspace

- `src/assets/images/office-original.png`: original persistido no projeto.
- `public/images/office-hero.webp`: variante 1000 × 1250.
- `public/images/office-mobile.webp`: variante 600 × 645.
- `public/images/office-detail.webp`: variante 800 × 960.
- `public/og-demo.png`: composição social 1200 × 630, identificada como fictícia.
- `public/images/office-fallback.svg`: fallback original em código.
- `public/favicon.svg`: monograma tipográfico original em código.

As variantes são produzidas por `scripts/prepare-assets.mjs` com Sharp. O original não foi sobrescrito. Cormorant Garamond e DM Sans são fornecidas pelos pacotes Fontsource, com licenças presentes em `node_modules/@fontsource-variable/*/LICENSE` e copiadas para `public/licenses/`, acompanhando a distribuição dos assets.

## Prompt final utilizado

```text
Use case: photorealistic-natural. Asset type: website editorial hero photograph for a fictional premium law firm demonstration. Generate a refined architectural interior photograph, portrait 4:5 composition: a quiet sophisticated empty private office, warm travertine walls, dark walnut built-in bookshelves on the right containing a few plain unbranded books and abstract ceramic objects, tall arched window on left washing beautiful soft afternoon natural light over a large dark walnut desk and one cognac leather chair. Small brass desk lamp. Elegant intimate human scale, restrained European contemporary architecture. Camera straight, natural perspective at eye level, editorial architectural photography, nuanced shadows, subtle film texture, photoreal materials, muted warm ivory taupe and deep brown, rich contrast. Beautiful balanced carefully styled spatial composition. No people, no courthouse, no legal emblems, no flags, no logos, no visible readable text, no watermark, no scales of justice. The image itself only, no website UI. This is a fictional illustrative environment, not an actual business location.
```
