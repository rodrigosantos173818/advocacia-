# Origem dos assets

Imagens geradas pela ferramenta integrada `image_gen` (modo nativo), em 10/11/2026, para este projeto. Não foi usado CLI/API externo ou chave de API. As imagens foram inspecionadas antes da integração. O retrato do Hero representa uma profissional inteiramente fictícia, sem nome, credenciais ou identidade real; o ambiente da seção Sobre e da imagem social é ilustrativo, sem localização real.

## Arquivos no workspace

- `src/assets/images/office-original.png`: original persistido no projeto.
- `src/assets/images/professional-original.png`: retrato fictício original persistido no projeto.
- `public/images/professional-hero.webp`: retrato 1000 × 1250 para o Hero.
- `public/images/professional-mobile.webp`: retrato 600 × 645 com recorte no topo para preservar o rosto no celular.
- `public/images/professional-fallback.jpg`: versão JPEG 400 × 500 do mesmo retrato, para falha de carregamento dos WebP.
- `public/images/office-detail.webp`: variante 800 × 960.
- `public/og-demo.png`: composição social 1200 × 630, identificada como fictícia.
- `public/images/office-fallback.svg`: fallback original em código, usado somente pela seção Sobre.
- `public/favicon.svg`: monograma tipográfico original em código.

As variantes são produzidas por `scripts/prepare-assets.mjs` com Sharp. O original não foi sobrescrito. Cormorant Garamond e DM Sans são fornecidas pelos pacotes Fontsource, com licenças presentes em `node_modules/@fontsource-variable/*/LICENSE` e copiadas para `public/licenses/`, acompanhando a distribuição dos assets.

## Prompt do ambiente ilustrativo

```text
Use case: photorealistic-natural. Asset type: website editorial hero photograph for a fictional premium law firm demonstration. Generate a refined architectural interior photograph, portrait 4:5 composition: a quiet sophisticated empty private office, warm travertine walls, dark walnut built-in bookshelves on the right containing a few plain unbranded books and abstract ceramic objects, tall arched window on left washing beautiful soft afternoon natural light over a large dark walnut desk and one cognac leather chair. Small brass desk lamp. Elegant intimate human scale, restrained European contemporary architecture. Camera straight, natural perspective at eye level, editorial architectural photography, nuanced shadows, subtle film texture, photoreal materials, muted warm ivory taupe and deep brown, rich contrast. Beautiful balanced carefully styled spatial composition. No people, no courthouse, no legal emblems, no flags, no logos, no visible readable text, no watermark, no scales of justice. The image itself only, no website UI. This is a fictional illustrative environment, not an actual business location.
```

## Prompt do retrato fictício

```text
Use case: photorealistic-natural. Asset type: portrait photograph for the right-hand visual panel of a premium fictional law-firm demonstration website. Primary request: Create an entirely fictional adult female legal professional, approximately 40 years old, elegant, poised and warmly approachable. No reference to any real person. She has shoulder-length dark brown hair, a natural subtle welcoming smile and a direct calm gaze into the camera. Tailored deep navy blazer, refined ivory blouse with modest neckline, subtle small gold earrings. Scene: sophisticated softly blurred institutional office with restrained navy walls, a hint of warm walnut shelves, ivory architectural detail and a subtle warm brass accent. Authentic premium editorial portrait photography, natural realistic skin texture, beautiful soft daylight from upper left, restrained warmth, excellent tonal separation of subject from dark navy background. Composition: vertical 4:5 portrait, eye-level camera, framed from just below the waist to above the head, centered subject, entire head and hair visible with 12 percent breathing room above, face near upper third and fully inside the central 65 percent of image width; relaxed natural hands held together near waist, not prominent. Keep face and shoulders clearly visible in tighter central square or 4:4.3 mobile crops. Leave lower 20 percent visually quiet to accommodate a website brand plaque overlay. Mood: credible, human, elegant contemporary premium legal brand, understated not fashion-glamour. Palette navy #101C2B, ivory #F6F3ED, restrained gold #B69A70, natural skin tones. No text, no typography, no logos, no badges, no official emblems, no scales, no flags, no diploma, no credentials, no watermark, no UI. This person is a fictional AI-generated illustrative character, not an actual lawyer.
```

O retrato substitui somente o ambiente do Hero. Os antigos `office-hero.webp` e `office-mobile.webp` foram removidos; a seção Sobre e a composição Open Graph continuam usando o ambiente. O enquadramento usa âncora no topo nas variantes e em CSS, para manter rosto e cabelo visíveis. A legenda e o texto alternativo estão em `src/config/site.ts`.
