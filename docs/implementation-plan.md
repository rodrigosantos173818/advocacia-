# Plano de implementação

Ponto de partida: pasta vazia, sem package.json, componentes, histórico Git ou AGENTS.md local. Instruções WR Tech fornecidas na conversa aplicadas.

## Objetivo

Criar um site institucional original para o escritório fictício Monteiro & Associados, como portfólio comercial da WR Tech. Sem coleta, aconselhamento jurídico ou contatos falsos. Preparar publicação estática na Vercel, sem publicar ou criar commits nesta execução.

## Composição

React + TypeScript + Vite, Tailwind CSS v4, Motion e Lucide. Conteúdo e destinos em `src/config/site.ts`, áreas em dados tipados. Cormorant Garamond e DM Sans locais. Azul profundo, marfim, dourado decorativo e tons de leitura com contraste adequado. Fotografia arquitetônica original gerada por IA e identificada como ilustração.

Seções: cabeçalho persistente com aviso; hero editorial; atributos; seis áreas; sobre; diferenciais; processo em quatro etapas; CTA jurídico desabilitado; contato estático e mapa sem localização; bloco comercial WR Tech; rodapé e privacidade em rota por hash, sem React Router.

## Comportamentos e validação

1. Menu responsivo: abrir, fechar, Escape, clique fora, mudança de breakpoint e foco no destino.
2. Âncoras e link para pular conteúdo acessíveis por teclado.
3. Avisos de ficção e CTAs reais da WR Tech separados.
4. Política de privacidade honesta; sem formulário, backend, analytics ou cookies próprios.
5. Noindex/nofollow, robots e nenhum schema jurídico/canonical inventado.
6. Movimento reduzido; imagens locais, lazy loading abaixo da dobra e dimensões definidas.
7. Playwright com Chrome local: teste RED antes dos comportamentos e GREEN depois. Axe para acessibilidade. Sete larguras: 320, 375, 390, 768, 1024, 1440 e 1920 px. Inspeção visual desktop e mobile.
8. Build, TypeScript, lint, revisão por reviewer e documentação final.

## Riscos e limites

Não existem dados reais de escritório ou domínio final. A demo permanece identificada como fictícia, sem contato ativo. Nenhuma alteração estrutural de sistema existente. Dependências instaladas apenas no projeto. Atualizações de metadados devem ocorrer via configuração; cabeçalhos da Vercel e robots mantêm a proteção da demonstração.
