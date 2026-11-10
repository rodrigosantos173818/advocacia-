# Monteiro & Associados — demonstração WR Tech

Site institucional fictício de advocacia, criado para o portfólio comercial da [WR Tech](https://www.wrtechbrasil.com.br/). Não representa escritório existente, não presta serviços jurídicos e não recebe dados de visitantes.

## Rodar localmente

Requer Node.js 22.12+ (validado com Node 24.19.0) e npm. O projeto começou em uma pasta vazia.

```sh
npm ci
npm run dev
```

Abra a URL exibida pelo Vite, normalmente `http://127.0.0.1:5173`. Para interromper, use Ctrl+C. Para conferir a versão de produção:

```sh
npm run build
npm run preview
```

O diretório de saída é `dist/`. Não há variáveis de ambiente, API, banco de dados ou credenciais.

## Stack e estrutura

React + TypeScript em modo estrito, Vite, Tailwind CSS v4 pelo plugin oficial, Motion for React e Lucide. Fontes variáveis Cormorant Garamond e DM Sans servidas localmente, com `font-display: swap` e apenas subconjunto latino. Não há dependência de Google Fonts em tempo de execução.

```text
src/
  assets/images/office-original.png  Original ilustrativo
  components/                       Seções, marca e componentes compartilhados
  config/site.ts                    Textos, marca, imagens, SEO e destinos comerciais
  config/commercial.ts              Destino HTTPS e mensagem opcional para WhatsApp
  data/practiceAreas.ts              Seis áreas tipadas
  pages/                            Home e privacidade
  styles/globals.css                Tokens, layout e breakpoints
  App.tsx                           Navegação por hash e foco acessível
public/
  images/                           WebP e fallback SVG locais
  favicon.svg                       Monograma original
  og-demo.png                       Imagem social identificada como demo
  robots.txt                        Bloqueio de rastreamento
tests/                              Playwright e Axe
scripts/                            Geração de variantes e capturas de QA
docs/                               Plano, evidências e origem dos assets
vercel.json                         Configuração estática e cabeçalhos
```

## Direção visual e referência

A [referência indicada](https://www.alexandrepuchettiadv.com.br/) foi inspecionada no Chrome DevTools, por DOM, CSS computado e capturas em 1920 e 390 px, incluindo menu móvel e comportamento do cabeçalho após rolagem. Observou-se uma linguagem escura, títulos Cormorant Garamond, interface Manrope, hero com texto à esquerda e retrato à direita, áreas numeradas e alternância de seções. O cabeçalho fixo se oculta ao descer a página. A ordem inclui hero, experiência, áreas, sobre, processo, dúvidas e contato.

Foram incorporados apenas princípios gerais: hierarquia editorial serifada, respiro, alinhamentos, linhas discretas, conteúdo organizado por áreas e processo em etapas. A criação aqui usa paleta azul profundo/marfim/dourado, DM Sans, fotografia arquitetônica original gerada por IA, monograma próprio, grid de seis áreas em seção clara e cabeçalho sticky sempre visível. Não reproduz o fundo quase preto, CTAs vinho, retratos, textos, marca, código, credenciais ou contatos da referência. A demo tem contato inativo e bloco comercial próprio da WR Tech. Não houve limitação de acesso à referência durante a inspeção.

Tokens de cor, fonte, espaçamento, raio, sombra e transições ficam em `src/styles/globals.css`. O conteúdo principal fica em `src/config/site.ts`; as áreas, em `src/data/practiceAreas.ts`. O container tem máximo de 1200 px, o hero é editorial em duas colunas no desktop, e os grids se adaptam a tablet e celular. Motion aplica apenas fades/reveals leves; o sistema respeita `prefers-reduced-motion`.

## Personalizar e trocar o CTA

Edite `src/config/site.ts` para alterar nome, título completo do hero, trecho em itálico, descrições, imagens, pilares, etapas, placeholders e SEO. O conteúdo não precisa ser modificado seção por seção. Cores possuem tokens correspondentes em CSS; ao mudar a paleta, atualize também favicon e imagem social.

Todos os botões **“Quero um site como este”** usam **`siteConfig.wrTech.ctaUrl`**, atualmente `https://www.wrtechbrasil.com.br/`. Links de crédito usam `wrTech.website`.

Se a WR Tech fornecer e validar seu WhatsApp comercial, substitua somente `ctaUrl` pela URL HTTPS oficial completa, incluindo o número fornecido. O helper reconhece `wa.me` e `api.whatsapp.com`, preserva o número/caminho configurado e acrescenta `wrTech.whatsappMessage` com codificação correta. Nenhum número foi criado ou incluído nesta demo. URLs que não usam HTTPS são rejeitadas.

`isDemo` permanece `true`. Os avisos são intencionais e não há botão de atendimento ativo. Para converter em site real, será necessário fornecer e validar identidade, OAB, dados profissionais, contatos, endereço, imagens/licenças, regras aplicáveis de publicidade profissional e política de privacidade. Só então revisar tipos, avisos e eventuais novos fluxos de atendimento.

## Imagens

O ambiente foi criado pela ferramenta integrada `image_gen`, sem referências fotográficas de terceiros, pessoas, marcas ou localização real. A legenda informa que é uma composição ilustrativa gerada por IA. O original está em `src/assets/images/office-original.png`; o prompt e a procedência estão em [docs/assets.md](docs/assets.md).

As variantes WebP locais já estão prontas. As licenças das fontes acompanham a publicação em `public/licenses/`. Para recriar as imagens e gerar novamente a imagem Open Graph:

```sh
node scripts/prepare-assets.mjs
```

O hero tem variante mobile, dimensões explícitas e prioridade alta. A imagem de sobre usa lazy loading. Há fallback SVG local no caso de falha de carregamento. O logotipo e o favicon são vetores originais feitos em código.

## Navegação, privacidade e SEO

O menu móvel fecha por seleção, Escape, clique fora e mudança para desktop. Escape devolve o foco ao botão; âncoras transferem o foco ao destino. Há link para pular o cabeçalho, foco visível, landmarks e uma única H1 por página.

A política em `#privacidade` é acessível pelo rodapé, sem React Router nem necessidade de regras de rewrite. Informa ausência de formulário, backend, cookies próprios, armazenamento local, analytics, pixels e mapas externos. A aplicação não coleta dados; a infraestrutura de hospedagem pode registrar requisições técnicas. Links comerciais têm as práticas do site de destino.

Metadados são gerados pelo plugin `demo-metadata` em `vite.config.ts`, a partir de `siteConfig.seo`, inclusive no HTML estático de produção. A demo mantém `noindex, nofollow`, `robots.txt` bloqueando rastreamento e `X-Robots-Tag` na Vercel. Não há sitemap nem schema `Attorney`/`LegalService`.

**Sem domínio definitivo:** não é emitido canonical. A imagem OG usa caminho local; algumas plataformas sociais exigem URL absoluta. Quando existir domínio definitivo validado, configure `seo.canonicalUrl` com a URL completa HTTPS. O build passará a emitir canonical e resolver a imagem social contra essa origem. Também é possível definir `seo.image` diretamente como URL absoluta do asset publicado. A prévia em redes sociais depende dessa configuração e não foi validada em domínio público.

Uma futura migração para cliente real exige revisar **os três controles** de indexação: `isDemo`/`seo.noIndex`, `public/robots.txt` e `vercel.json`. Alterar apenas o booleano não libera a indexação. Nenhuma dessas proteções foi removida.

## Verificações

```sh
npm run typecheck
npm run lint
npm run build
npm test
npm audit
```

Playwright usa o Chrome instalado (`channel: 'chrome'`) em desktop e viewport mobile. Se não houver Chrome, instale-o no ambiente ou ajuste o canal para um navegador Playwright disponível. `npm test` inicia o Vite automaticamente quando necessário. Os testes cobrem menu, foco, âncoras, CTAs, contato desabilitado, ausência de campos/canais falsos, privacidade, metadados, imagem, sete larguras e auditoria Axe WCAG A/AA. Há teste do helper comercial sem número telefônico.

Para executar a suíte sobre `dist/` no PowerShell, rode primeiro `npm run build`, depois `$env:PLAYWRIGHT_PRODUCTION = '1'; npm test`. Esse modo usa a porta 4173. Para voltar ao modo de desenvolvimento na mesma sessão, use `Remove-Item Env:PLAYWRIGHT_PRODUCTION`.

Para reproduzir as capturas, mantenha o Vite em execução na porta 5173 e rode:

```sh
node scripts/visual-qa.mjs
```

As capturas de 320, 375, 390, 768, 1024, 1440 e 1920 px e o relatório são salvos em `.qa/` (ignorado pelo Git). O script também registra menu, política, imagens carregadas e erros JavaScript. Veja [docs/verification.md](docs/verification.md) para evidências e limites da execução. Auditoria automatizada não substitui uma avaliação manual completa por tecnologias assistivas.

O override `minimatch: ^11.0.1` corrige o aviso transitivo GHSA-g3hv-75wg-m249 nas ferramentas ESLint/TypeScript ESLint. A compatibilidade é conferida com o lint; preservar o lockfile nas instalações.

## Publicar na Vercel

1. Envie o projeto a um repositório próprio, incluindo `package-lock.json`, fontes e assets locais. Não envie `node_modules/`, `.qa/`, `.npm-cache/` ou `dist/`.
2. Importe esse repositório na Vercel e selecione o preset **Vite**, raiz deste projeto e uma versão Node compatível (24.x validada).
3. Use instalação `npm ci`, build `npm run build` e diretório de saída `dist`. O `vercel.json` já declara build, saída e cabeçalhos.
4. Publique a demo mantendo avisos de ficção, contatos inativos e bloqueios de indexação. Não são necessárias variáveis de ambiente.
5. Verifique a URL publicada, assets, menu, política e cabeçalhos. Ao definir domínio final, configure a imagem social absoluta conforme explicado acima.

O projeto está preparado para publicação estática na Vercel. O envio do código ao GitHub não realiza deploy por esta aplicação; a hospedagem deve ser configurada e validada separadamente.
