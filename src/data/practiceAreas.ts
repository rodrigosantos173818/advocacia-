export type PracticeIcon = 'scale' | 'family' | 'consumer' | 'pension' | 'bank' | 'succession'
export interface PracticeArea {
  id: string
  title: string
  description: string
  icon: PracticeIcon
}

export const practiceAreas: PracticeArea[] = [
  { id: 'civil', title: 'Direito Civil', description: 'Relações contratuais, obrigações e questões do cotidiano que pedem atenção aos seus direitos.', icon: 'scale' },
  { id: 'familia', title: 'Direito de Família', description: 'Questões familiares tratadas com sensibilidade, do divórcio à guarda e aos alimentos.', icon: 'family' },
  { id: 'consumidor', title: 'Direito do Consumidor', description: 'Informação sobre direitos nas relações de consumo, produtos, serviços e cobranças.', icon: 'consumer' },
  { id: 'previdenciario', title: 'Direito Previdenciário', description: 'Questões relacionadas à aposentadoria, aos benefícios e à proteção previdenciária.', icon: 'pension' },
  { id: 'bancario', title: 'Direito Bancário', description: 'Compreensão de contratos financeiros, operações bancárias e relações com instituições.', icon: 'bank' },
  { id: 'sucessoes', title: 'Direito das Sucessões', description: 'Organização patrimonial, inventários e partilhas, com cuidado em momentos de transição.', icon: 'succession' },
]
