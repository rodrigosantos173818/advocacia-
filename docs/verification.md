# Verificação da demonstração

Data: 10/11/2026. Ambiente local Windows, Node 24.19.0, npm 11.17.0, Chrome instalado. Projeto iniciado em diretório vazio, sem código ou falhas preexistentes e sem repositório Git.

## Resultado final

**APROVADO para entrega local e preparação para publicação.** Este relatório registra a validação da implementação, anterior ao versionamento autorizado posteriormente. Deploy não executado nesta validação. Aceitação em hospedagem pública: **não executada**; depende da publicação autorizada e do domínio final.

| Verificação | Resultado | Evidência |
| --- | --- | --- |
| `npm run build` | PASS | TypeScript e Vite concluíram; `dist/` gerado |
| `npm run typecheck` | PASS | `tsc --noEmit`, sem erros |
| `npm run lint` | PASS | ESLint, sem erros ou avisos |
| `npm test` em desenvolvimento | PASS | 10/10 antes da inclusão do teste do helper comercial |
| `$env:PLAYWRIGHT_PRODUCTION = '1'; npm test` | PASS | 12/12 na suíte final, 7,3 s, código de saída 0; servidor estático local em 4173 |
| Axe WCAG 2 A/AA e 2.1 AA | PASS | Zero violações automatizadas na home em desktop e mobile com movimento reduzido |
| `npm audit` | PASS | `found 0 vulnerabilities` |
| `node scripts/visual-qa.mjs` | PASS | Sete larguras sem overflow, nenhuma imagem quebrada e nenhum erro JavaScript |
| Inspeção visual | PASS | Capturas desktop/mobile, menu, política, áreas, sobre, processo, contato e rodapé |
| Revisão independente por reviewer | PASS | Três apontamentos de configuração corrigidos e relidos, sem regressão concreta identificada |
| Inspeção de segurança do código | PASS no escopo | Sem formulários, backend, iframes, credenciais, `dangerouslySetInnerHTML`, cookies ou armazenamento próprio; URLs comerciais HTTPS |

A execução inicial dos testes de produção concluiu os 12 casos, mas o encerramento automático do servidor de preview ficou pendente no ambiente Windows. A suíte foi repetida reutilizando o mesmo servidor; terminou com **12 passed (7.3s)** e saída **0**. Os processos de preview foram tratados separadamente no encerramento da tarefa.

## Jornadas e evidência TDD

As jornadas foram derivadas do briefing fornecido: navegar pelo modelo no celular; compreender a ficção sem confundi-la com atendimento jurídico; acessar a WR Tech; ler a privacidade; usar teclado e movimento reduzido.

| Comportamento | RED observado | GREEN final |
| --- | --- | --- |
| Menu móvel | Teste executado antes da implementação: timeout aguardando botão `Abrir menu` na página inicial vazia | Abre, fecha com Escape, restaura foco, fecha por clique fora e seleção; foco vai para `#areas` |
| Acessibilidade | Axe detectou contraste 4,26:1 no rótulo secundário de Sobre e estrutura inválida de `dl` | Cor escurecida e termos/definições agrupados corretamente; zero violações automatizadas |
| Nome acessível dos links móveis | Teste não encontrava nome exato porque a numeração fazia parte do nome do link | Numeração decorativa com `aria-hidden`; seleção acessível e testes aprovados |
| Mensagem comercial opcional | `npm test -- --project=desktop commercial.spec.ts`: mensagem esperada, mas `searchParams.get('text')` retornava `null` | Mensagem codificada para domínios WhatsApp suportados; URL do site preservada; protocolo inseguro rejeitado |

O teste de quantidade de CTAs foi corrigido para contar e validar todos os links do componente, incluindo o CTA de desktop oculto no celular, coerente com o requisito “no header quando houver espaço”. O teste de clique fora passou a clicar numa região efetivamente fora do menu, pois o H1 ficava atrás do painel aberto. Nenhuma garantia funcional foi removida. Nenhum teste fica desabilitado ou ignorado na suíte final.

Os testes são E2E no navegador e um caso de função pura executado pelo Playwright. **Não foi medida cobertura percentual de linhas/branches**; não há alegação de atingir 80%. Não foram adicionados testes que apenas reproduzem o JSX/CSS de apresentação. Não foram criados checkpoints Git porque não havia repositório e commits não foram autorizados.

## Responsividade

O script gera capturas completas e da primeira dobra em `.qa/`, além de menu e política. Foram inspecionadas visualmente as sete larguras. Em todas, `document.documentElement.scrollWidth === innerWidth`:

| Viewport | Largura do documento | Imagens com falha | Erros JavaScript |
| --- | --- | --- | --- |
| 320 px | 320 px | 0 | 0 |
| 375 px | 375 px | 0 | 0 |
| 390 px | 390 px | 0 | 0 |
| 768 px | 768 px | 0 | 0 |
| 1024 px | 1024 px | 0 | 0 |
| 1440 px | 1440 px | 0 | 0 |
| 1920 px | 1920 px | 0 | 0 |

O relatório bruto fica em `.qa/report.json`; artefatos Playwright ficam em `playwright-report/` e `test-results/`. Todos são locais e ignorados pelo Git. As capturas usam movimento reduzido para registrar o conteúdo integral, sem seções ainda aguardando reveal. O carregamento lazy de Sobre foi aguardado por decodificação da imagem antes da captura.

## Conteúdo, privacidade e segurança

- Escritório fictício indicado no cabeçalho sticky, hero, imagens, contato e rodapé.
- Sem OAB, currículo, depoimentos, estatísticas, clientes ou resultados inventados. O retrato adicionado posteriormente ao Hero representa apenas uma profissional fictícia gerada por IA, explicitamente identificada como apresentação visual.
- Sem formulário ativo, telefone, e-mail, endereço ou WhatsApp jurídico fictício. O CTA de escritório é desabilitado e tem explicação por `aria-describedby`.
- Destino comercial real centralizado na configuração da WR Tech; nenhuma comunicação foi enviada.
- Fontes e imagens locais, sem mapa incorporado, analytics ou pixels.
- Metadados estáticos de demo gerados no build. Nenhum canonical é emitido sem configuração. `robots.txt` e Vercel mantêm não indexação. Sem sitemap e sem schema jurídico.
- O npm reportou inicialmente dez avisos moderados transitivos no conjunto ESLint, decorrentes de `minimatch`. O override para `^11.0.1` eliminou os avisos e o lint passou com a atualização. Sem `--force`, remoção de testes ou desativação de mecanismos de segurança.
- Licenças das duas fontes foram incluídas em `public/licenses/` para acompanhar os assets publicados.

## Limites e pendências de um cliente futuro

Não foram executados deploy, validação de cabeçalhos em hospedagem, testes de prévia social em domínio público, medição Lighthouse/Core Web Vitals, testes em dispositivos físicos, Firefox/Safari, leitor de tela ou auditoria manual exaustiva de acessibilidade. Mobile é emulação Chromium, sem afirmar equivalência a Safari real.

O domínio definitivo é necessário para canonical e imagem OG absoluta. Um cliente real exigirá dados profissionais, contatos, imagens e permissões confirmados, revisão de publicidade profissional vigente, privacidade ajustada e validação dos fluxos de coleta que eventualmente forem solicitados. Esses dados não foram inventados nem ativados nesta demo.

## Atualização do Hero — retrato fictício

O ambiente do Hero foi substituído por um retrato original de uma profissional fictícia gerada pela ferramenta integrada `image_gen`. Foram preservados título, descrição, botões, estrutura, marca e paleta. A legenda agora informa: “Profissional fictícia gerada por IA • Apenas para apresentação visual do projeto.” O texto alternativo e a política de privacidade também identificam a personagem fictícia, sem nome ou credenciais.

Arquivos afetados: `src/config/site.ts`, `src/components/Hero.tsx` (fallback), `src/styles/globals.css`, originais/variantes em `src/assets/images/` e `public/images/`, scripts de assets e QA, README e documentação. O original e o prompt completo estão documentados em `docs/assets.md`. Os dois WebP antigos do Hero foram removidos; os assets da seção Sobre e Open Graph permaneceram iguais.

Validação desta atualização:

- `npm run lint`, `npm run typecheck` e `npm run build`: aprovados; build final inclui novamente `tsc --noEmit`.
- `npm test`: **12 passed (7.7s)** na execução final, incluindo menu, foco, privacidade e auditoria Axe desktop/mobile, sem novos testes para apresentação estática reversível.
- `node scripts/visual-qa.mjs`: sete larguras sem overflow, imagens quebradas ou erros JavaScript. Capturas específicas do retrato/legenda em `.qa/*-hero-image.png`, além das capturas completas existentes. Rosto e cabelo conferidos visualmente em todas as sete larguras.
- Variantes locais WebP 1000 × 1250 e 600 × 645, com recorte no topo; CSS mantém o mesmo alinhamento. Ajustado o filete dourado móvel para terminar antes da legenda e evitar sobreposição.
- Fallback JPEG 400 × 500 do mesmo retrato, sem voltar à imagem de escritório. O script de QA bloqueia os dois WebP, aguarda o JPEG carregar e captura `.qa/hero-fallback.png`. A proteção impede reaplicar o fallback em ciclo se ele também falhar.
- Reviewer independente conferiu composição e referências; inconsistência documental sobre ausência de pessoas e fallback de escritório foram corrigidos.
- `git diff --check`: sem problemas de whitespace. Nenhuma dependência adicionada e nenhum contrato público alterado.

**Status: APROVADO localmente.** As evidências desta seção registram a validação anterior ao versionamento e à publicação autorizados posteriormente. A integração existente entre `main` e o projeto Vercel `adivocacia` publica em `https://adivocacia.vercel.app`; cada atualização deve ter seu status e conteúdo conferidos nesse domínio. Continuam sem execução os testes em dispositivos físicos e em Safari/Firefox.
