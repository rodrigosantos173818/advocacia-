import { practiceAreas, type PracticeArea } from '../data/practiceAreas.ts'

interface SectionCopy { eyebrow: string; title: string; description: string }
interface SiteConfig {
  isDemo: true
  brand: { name: string; subtitle: string; logo: string; colors: { navy: string; slate: string; gold: string; ivory: string; white: string; muted: string } }
  demo: { notice: string; footer: string }
  navigation: { href: string; label: string }[]
  hero: SectionCopy & { titleEmphasis: string; image: string; imageSmall: string; imageCaption: string; imageAlt: string; signature: string }
  credibility: { title: string; detail: string }[]
  areas: SectionCopy & { note: string }
  practiceAreas: PracticeArea[]
  about: SectionCopy & { image: string; imageAlt: string; imageCaption: string; values: string[] }
  differentials: SectionCopy & { items: { title: string; description: string }[] }
  process: SectionCopy & { steps: { title: string; description: string }[]; note: string }
  contactCTA: SectionCopy & { disabledLabel: string; notice: string }
  contact: SectionCopy & { name: string; address: string; phone: string; email: string; hours: string; note: string }
  wrTech: { name: string; website: string; ctaUrl: string; ctaLabel: string; title: string; description: string; whatsappMessage: string }
  privacy: { title: string; description: string; sections: { title: string; text: string }[] }
  seo: { title: string; description: string; socialTitle: string; socialDescription: string; image: string; imageAlt: string; noIndex: boolean; canonicalUrl?: string }
}

export const siteConfig: SiteConfig = {
  isDemo: true,
  brand: {
    name: 'Monteiro & Associados', subtitle: 'Advocacia', logo: '/favicon.svg',
    colors: { navy: '#101C2B', slate: '#23364A', gold: '#B69A70', ivory: '#F6F3ED', white: '#FFFFFF', muted: '#64748B' },
  },
  demo: {
    notice: 'Projeto demonstrativo • Escritório fictício',
    footer: 'Projeto conceitual fictício, criado exclusivamente para demonstração da WR Tech. Não representa escritório existente e não oferece serviços jurídicos.',
  },
  navigation: [
    { href: '#inicio', label: 'Início' }, { href: '#areas', label: 'Áreas de atuação' },
    { href: '#sobre', label: 'Sobre' }, { href: '#diferenciais', label: 'Diferenciais' }, { href: '#contato', label: 'Contato' },
  ],
  hero: {
    eyebrow: 'COMPROMISSO COM O QUE IMPORTA',
    title: 'Orientação jurídica com seriedade e atenção a cada situação.', titleEmphasis: 'seriedade e atenção',
    description: 'Uma apresentação de como um escritório de advocacia pode comunicar seus serviços com clareza, sofisticação e uma experiência digital profissional.',
    image: '/images/office-hero.webp', imageSmall: '/images/office-mobile.webp',
    imageCaption: 'Ambiente ilustrativo criado por IA • Não é um escritório real',
    imageAlt: 'Ambiente fictício ilustrativo: mesa de madeira, janela em arco e biblioteca sob luz natural.',
    signature: 'Escuta. Clareza. Cuidado.',
  },
  credibility: [
    { title: 'Atendimento individualizado', detail: 'Cada situação tem sua singularidade.' },
    { title: 'Comunicação clara', detail: 'Informação que aproxima e esclarece.' },
    { title: 'Apresentação institucional moderna', detail: 'Cuidado presente em cada detalhe.' },
  ],
  areas: { eyebrow: 'ÁREAS DE ATUAÇÃO', title: 'Como podemos\norientar você?', description: 'Diferentes aspectos da vida. O mesmo cuidado em compreender cada situação.', note: 'Áreas exibidas apenas como exemplo de organização de conteúdo.' },
  practiceAreas,
  about: {
    eyebrow: 'SOBRE O ESCRITÓRIO', title: 'Atendimento jurídico com responsabilidade e clareza.',
    description: 'Este espaço demonstra como a trajetória, os valores e as qualificações de um profissional podem ser apresentados em um site real, de forma objetiva e acolhedora. Em uma implementação para cliente, as informações serão substituídas por dados devidamente confirmados.',
    image: '/images/office-detail.webp', imageAlt: 'Detalhe de ambiente institucional fictício: janela em arco, materiais naturais e mesa de madeira.', imageCaption: 'Composição ilustrativa • Ambiente fictício',
    values: ['Ouvir com atenção, antes de orientar.', 'Explicar com clareza, em cada etapa.', 'Tratar cada situação com responsabilidade.'],
  },
  differentials: {
    eyebrow: 'NOSSA ESSÊNCIA', title: 'Uma atuação pautada na\natenção a cada detalhe.', description: 'Pilares ilustrativos de uma relação construída com cuidado.',
    items: [
      { title: 'Atendimento individualizado', description: 'Uma comunicação adaptada à demanda, respeitando o contexto e a singularidade de cada situação.' },
      { title: 'Comunicação clara', description: 'Informações objetivas sobre etapas e possibilidades, em uma linguagem próxima e compreensível.' },
      { title: 'Análise responsável', description: 'Cuidado na organização das informações para que cada questão receba a atenção necessária.' },
    ],
  },
  process: {
    eyebrow: 'COMO FUNCIONARIA O ATENDIMENTO', title: 'Clareza desde\no primeiro passo.', description: 'Um exemplo de jornada de atendimento, apresentada de forma simples e transparente.',
    steps: [
      { title: 'Contato inicial', description: 'Solicitação de informações pelo canal oficial de um escritório real.' },
      { title: 'Compreensão da demanda', description: 'Apresentação da situação e escuta atenta às suas particularidades.' },
      { title: 'Análise das informações', description: 'Avaliação do caso e dos documentos pelo profissional responsável.' },
      { title: 'Orientação sobre próximos passos', description: 'Esclarecimento de caminhos possíveis para uma decisão informada.' },
    ],
    note: 'Fluxo ilustrativo. Este protótipo não presta aconselhamento jurídico, não coleta dados e não realiza atendimentos.',
  },
  contactCTA: {
    eyebrow: 'UM ESPAÇO PARA O DIÁLOGO', title: 'Precisa de orientação jurídica?', description: 'Neste espaço, um escritório real poderia disponibilizar seu canal oficial de atendimento.',
    disabledLabel: 'Contato do escritório (demonstração)', notice: 'Botão sem ação: este é um escritório fictício. Não há atendimento jurídico nesta demonstração.',
  },
  contact: {
    eyebrow: 'CONTATO E LOCALIZAÇÃO', title: 'Proximidade começa\ncom uma boa conversa.', description: 'Veja como os canais de um escritório poderiam ser apresentados. Os dados abaixo são apenas espaços reservados.',
    name: 'Monteiro & Associados — Advocacia (fictício)', address: 'Endereço inserido após contratação', phone: 'Telefone profissional a definir', email: 'E-mail profissional a definir', hours: 'Horários definidos pelo escritório', note: 'Localização demonstrativa. Nenhum endereço ou ponto no mapa corresponde a um escritório real.',
  },
  wrTech: {
    name: 'WR Tech', website: 'https://www.wrtechbrasil.com.br/', ctaUrl: 'https://www.wrtechbrasil.com.br/', ctaLabel: 'Quero um site como este',
    title: 'Sua marca também pode ter\numa presença digital assim.', description: 'Gostou deste modelo? A WR Tech desenvolve sites com identidade, atenção aos detalhes e foco na experiência de quem visita.',
    whatsappMessage: 'Olá! Vi o modelo de site para advocacia da WR Tech e gostaria de um orçamento.',
  },
  privacy: {
    title: 'Privacidade da demonstração.', description: 'Uma experiência de portfólio com transparência sobre o uso de dados.',
    sections: [
      { title: 'Sobre este projeto', text: 'Monteiro & Associados é uma identidade fictícia criada para apresentar o trabalho de desenvolvimento de sites da WR Tech. A demonstração não representa um escritório existente e não presta serviços jurídicos.' },
      { title: 'Sem formulários ou coleta de relatos', text: 'Este site não possui formulários, contas, backend ou banco de dados. Não solicita, recebe ou armazena relatos de casos, documentos, nomes, telefones ou e-mails. Os elementos de contato do escritório são estáticos e o botão de atendimento é desabilitado.' },
      { title: 'Cookies e armazenamento', text: 'Não utilizamos cookies de marketing, analytics ou pixels de rastreamento. A aplicação não grava cookies, localStorage ou sessionStorage. As preferências de movimento são lidas diretamente do navegador, sem armazenamento próprio.' },
      { title: 'Fontes e imagens', text: 'As fontes e imagens são servidas junto ao próprio site. As imagens de ambiente são composições ilustrativas geradas por inteligência artificial e não representam um endereço ou escritório real. Não há mapa externo incorporado.' },
      { title: 'Hospedagem e registros técnicos', text: 'O projeto está preparado para hospedagem estática na Vercel. Quando publicado, o provedor de hospedagem poderá processar informações técnicas de acesso, como endereço IP, data, navegador e requisições, de acordo com sua própria política. A ausência de coleta pela aplicação não significa ausência de registros de infraestrutura.' },
      { title: 'Links da WR Tech', text: 'Os links comerciais levam ao site oficial da WR Tech, serviço de desenvolvimento de sites. Ao acessar esse destino, aplicam-se as práticas de privacidade dele. Não há envio automático de dados pessoais por esta demonstração.' },
    ],
  },
  seo: {
    title: 'Monteiro & Associados — Demonstração de Site de Advocacia | WR Tech',
    description: 'Projeto demonstrativo de site de advocacia desenvolvido pela WR Tech. Escritório fictício, sem atendimento ou serviços jurídicos.',
    socialTitle: 'Monteiro & Associados — Site demonstrativo | WR Tech', socialDescription: 'Uma presença digital pensada em cada detalhe. Projeto fictício de advocacia para o portfólio da WR Tech. Não oferece serviços jurídicos.',
    image: '/og-demo.png', imageAlt: 'Monteiro & Associados — Projeto demonstrativo da WR Tech. Escritório fictício.', noIndex: true,
  },
}
