import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  Code2,
  Cpu,
  Headphones,
  LineChart,
  Megaphone,
  Palette,
  ShoppingBag,
  Sparkles,
  Users,
  WalletCards,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Course = {
  title: string
  description: string
  progress: number
  color: string
  icon: LucideIcon
  category: 'Tecnologia' | 'Criatividade' | 'Negócios' | 'Atendimento'
  level: 'Iniciante' | 'Intermediário'
  duration: number
  income: string
  lessons: number
  offline: boolean
  modules: CourseLesson[]
  project: string
}

export type CourseLesson = {
  title: string
  duration: string
  task: string
  freePreview?: boolean
}

export type Opportunity = {
  title: string
  category: 'Freela' | 'Vaga rápida' | 'Microtrabalho' | 'Serviço local'
  pay: string
  time: string
  match: number
  mode: 'Remoto' | 'Presencial' | 'Hibrido'
  difficulty: 'Fácil' | 'Média' | 'Avançada'
  skill: string
  verified: boolean
}

export const courses: Course[] = [
  {
    title: 'Programação',
    description: 'Sites, lógica, automação e primeiros projetos pagos.',
    progress: 82,
    color: 'from-sky-400 to-blue-600',
    icon: Code2,
    category: 'Tecnologia',
    level: 'Iniciante',
    duration: 6,
    income: 'R$ 280 por projeto',
    lessons: 18,
    offline: true,
    project: 'Publicar uma landing page simples para um comércio local.',
    modules: [
      {
        title: 'Como funciona uma página de vendas',
        duration: '12 min',
        task: 'Anotar 3 negócios do bairro que precisam de uma página.',
        freePreview: true,
      },
      {
        title: 'Estrutura HTML essencial',
        duration: '18 min',
        task: 'Criar título, texto e botão de contato.',
      },
      {
        title: 'Estilo rápido com CSS',
        duration: '22 min',
        task: 'Aplicar cores, espaçamento e versão mobile.',
      },
    ],
  },
  {
    title: 'Design',
    description: 'Identidade visual, posts, landing pages e portfolio.',
    progress: 76,
    color: 'from-fuchsia-400 to-violet-600',
    icon: Palette,
    category: 'Criatividade',
    level: 'Iniciante',
    duration: 4,
    income: 'R$ 160 por pacote',
    lessons: 14,
    offline: true,
    project: 'Criar um pacote com 3 posts para uma loja fictícia.',
    modules: [
      {
        title: 'Briefing simples para pequenos negócios',
        duration: '10 min',
        task: 'Escolher uma loja local e definir objetivo visual.',
        freePreview: true,
      },
      {
        title: 'Composicao de post profissional',
        duration: '16 min',
        task: 'Montar uma arte de promoção com hierarquia clara.',
      },
      {
        title: 'Portfolio no celular',
        duration: '14 min',
        task: 'Organizar 3 imagens para enviar a clientes.',
      },
    ],
  },
  {
    title: 'Marketing digital',
    description: 'Conteúdo, tráfego orgânico, métricas e campanhas simples.',
    progress: 68,
    color: 'from-purple-400 to-pink-600',
    icon: Megaphone,
    category: 'Negócios',
    level: 'Intermediário',
    duration: 5,
    income: 'R$ 450 por cliente',
    lessons: 16,
    offline: false,
    project: 'Criar uma campanha simples para divulgar um serviço local.',
    modules: [
      {
        title: 'Oferta clara em uma frase',
        duration: '9 min',
        task: 'Escrever uma promessa simples para um serviço.',
        freePreview: true,
      },
      {
        title: 'Calendário de conteúdo',
        duration: '20 min',
        task: 'Planejar 5 posts com objetivo de venda.',
      },
      {
        title: 'Métricas básicas',
        duration: '15 min',
        task: 'Definir uma meta de mensagens recebidas.',
      },
    ],
  },
  {
    title: 'Vendas online',
    description: 'Marketplace, WhatsApp comercial e atendimento consultivo.',
    progress: 91,
    color: 'from-emerald-400 to-teal-600',
    icon: ShoppingBag,
    category: 'Negócios',
    level: 'Iniciante',
    duration: 3,
    income: 'R$ 700 por mês',
    lessons: 12,
    offline: true,
    project: 'Montar uma vitrine de produtos para vender por WhatsApp.',
    modules: [
      {
        title: 'Escolha de produto e margem',
        duration: '11 min',
        task: 'Listar 5 produtos com preço e margem.',
        freePreview: true,
      },
      {
        title: 'Mensagem de venda sem pressão',
        duration: '13 min',
        task: 'Criar um roteiro curto de atendimento.',
      },
      {
        title: 'Organização de pedidos',
        duration: '18 min',
        task: 'Montar uma tabela simples de pedidos.',
      },
    ],
  },
  {
    title: 'Atendimento',
    description: 'Suporte remoto, postura profissional e ferramentas de CRM.',
    progress: 64,
    color: 'from-cyan-300 to-sky-600',
    icon: Headphones,
    category: 'Atendimento',
    level: 'Iniciante',
    duration: 2,
    income: 'R$ 1.200 por mês',
    lessons: 10,
    offline: true,
    project: 'Simular atendimento profissional para uma loja online.',
    modules: [
      {
        title: 'Tom de voz e acolhimento',
        duration: '8 min',
        task: 'Reescrever 3 respostas para clientes.',
        freePreview: true,
      },
      {
        title: 'Resolução de problemas',
        duration: '17 min',
        task: 'Responder a um caso fictício de atraso.',
      },
      {
        title: 'Registro de atendimento',
        duration: '12 min',
        task: 'Criar um modelo simples de acompanhamento.',
      },
    ],
  },
  {
    title: 'Tecnologia',
    description: 'IA aplicada, produtividade, dados e seguranca digital.',
    progress: 73,
    color: 'from-indigo-400 to-cyan-500',
    icon: Cpu,
    category: 'Tecnologia',
    level: 'Intermediário',
    duration: 7,
    income: 'R$ 350 por automação',
    lessons: 20,
    offline: false,
    project: 'Criar uma automação simples para economizar tempo.',
    modules: [
      {
        title: 'Onde a tecnologia gera renda',
        duration: '12 min',
        task: 'Identificar uma tarefa repetitiva de um negocio.',
        freePreview: true,
      },
      {
        title: 'Planilhas inteligentes',
        duration: '24 min',
        task: 'Criar um controle automático simples.',
      },
      {
        title: 'Entrega para cliente',
        duration: '19 min',
        task: 'Escrever uma proposta de automação.',
      },
    ],
  },
]

export const courseCategories = ['Todos', 'Tecnologia', 'Criatividade', 'Negócios', 'Atendimento']
export const courseLevels = ['Todos', 'Iniciante', 'Intermediário']
export const courseDurations = ['Todos', 'Até 3h', 'Até 5h', 'Mais de 5h']

export const opportunities: Opportunity[] = [
  {
    title: 'Criar landing page local',
    category: 'Freela',
    pay: 'R$ 280',
    time: '2 dias',
    match: 94,
    mode: 'Remoto',
    difficulty: 'Média',
    skill: 'Programação',
    verified: true,
  },
  {
    title: 'Editar 12 posts para loja',
    category: 'Freela',
    pay: 'R$ 160',
    time: '24h',
    match: 89,
    mode: 'Remoto',
    difficulty: 'Fácil',
    skill: 'Design',
    verified: true,
  },
  {
    title: 'Cadastrar produtos online',
    category: 'Microtrabalho',
    pay: 'R$ 90',
    time: '4h',
    match: 86,
    mode: 'Remoto',
    difficulty: 'Fácil',
    skill: 'Vendas online',
    verified: true,
  },
  {
    title: 'Atendimento por chat',
    category: 'Vaga rápida',
    pay: 'R$ 1.200',
    time: 'Remoto',
    match: 91,
    mode: 'Remoto',
    difficulty: 'Média',
    skill: 'Atendimento',
    verified: true,
  },
  {
    title: 'Organizar catálogo de restaurante',
    category: 'Serviço local',
    pay: 'R$ 140',
    time: '1 dia',
    match: 78,
    mode: 'Presencial',
    difficulty: 'Fácil',
    skill: 'Vendas online',
    verified: true,
  },
  {
    title: 'Automatizar planilha simples',
    category: 'Freela',
    pay: 'R$ 350',
    time: '3 dias',
    match: 82,
    mode: 'Hibrido',
    difficulty: 'Avançada',
    skill: 'Tecnologia',
    verified: false,
  },
]

export const opportunityCategories = [
  'Todos',
  'Freela',
  'Vaga rápida',
  'Microtrabalho',
  'Serviço local',
]
export const opportunityModes = ['Todos', 'Remoto', 'Presencial', 'Hibrido']
export const opportunityDifficulties = ['Todos', 'Fácil', 'Média', 'Avançada']

export const impactStats = [
  { label: 'Pessoas ajudadas', value: 18420, suffix: '+' },
  { label: 'Renda gerada', value: 3.8, prefix: 'R$ ', suffix: ' mi' },
  { label: 'Cursos concluídos', value: 64200, suffix: '+' },
  { label: 'Oportunidades criadas', value: 12890, suffix: '+' },
]

export const aboutStats = [
  { label: 'sem acesso constante a qualificação', value: 63, suffix: '%' },
  { label: 'trilhas guiadas por IA social', value: 24, suffix: 'h' },
  { label: 'primeiras oportunidades conectadas', value: 7, suffix: ' dias' },
]

export const timeline = [
  {
    title: 'Diagnostico',
    text: 'Mapeia renda, tempo disponível, acesso digital e habilidades iniciais.',
    icon: Users,
  },
  {
    title: 'Trilha prática',
    text: 'Recomenda cursos curtos com foco em renda real e projetos de portfolio.',
    icon: Sparkles,
  },
  {
    title: 'Renda assistida',
    text: 'Conecta a microtrabalhos, mentorias e oportunidades locais verificadas.',
    icon: WalletCards,
  },
]

export const testimonials = [
  {
    name: 'Ana Clara',
    role: 'Designer iniciante',
    quote:
      'Em tres semanas montei portfolio, consegui meus primeiros clientes e comecei a pagar meu curso tecnico.',
  },
  {
    name: 'Rafael Santos',
    role: 'Suporte remoto',
    quote:
      'A plataforma me mostrou por onde comecar. Hoje faco atendimento remoto e tenho renda previsivel.',
  },
  {
    name: 'Bianca Rocha',
    role: 'Vendedora online',
    quote:
      'Aprendi a vender pelo celular e organizar pedidos. Foi a primeira vez que tecnologia pareceu feita para mim.',
  },
]

export const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diagnóstico', href: '#diagnostico' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Oportunidades', href: '#oportunidades' },
  { label: 'Impacto', href: '#impacto' },
]

export const dashboardMetrics = [
  { label: 'Match social', value: '96%', icon: BadgeCheck },
  { label: 'Renda potencial', value: 'R$ 1.840', icon: LineChart },
  { label: 'Projetos abertos', value: '328', icon: BriefcaseBusiness },
]

export const studentProfile = {
  name: 'Marina Alves',
  goal: 'Conseguir a primeira renda digital em 30 dias',
  level: 'Trilha iniciante',
  incomeGoal: 'R$ 900',
  weeklyTime: '8h/semana',
  readiness: 72,
}

export const studentTasks = [
  {
    title: 'Finalizar portfolio simples',
    time: '35 min',
    status: 'Hoje',
    icon: Palette,
  },
  {
    title: 'Enviar proposta para freela local',
    time: '15 min',
    status: 'Alta prioridade',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Aula: precificacao sem medo',
    time: '22 min',
    status: 'Offline disponível',
    icon: CalendarCheck,
  },
]

export const studentPath = [
  { label: 'Diagnóstico', value: 100 },
  { label: 'Curso prático', value: 72 },
  { label: 'Portfolio', value: 58 },
  { label: 'Primeira renda', value: 34 },
]

export const profileOptions = {
  incomeGoal: ['R$ 300', 'R$ 700', 'R$ 1.200+'],
  weeklyTime: ['2h', '5h', '8h+'],
  internetAccess: ['Limitado', 'Regular', 'Bom'],
  skillBase: ['Começando do zero', 'Sei usar celular', 'Já fiz trabalhos digitais'],
}

export const recommendationMap = {
  fastIncome: {
    title: 'Vendas online e atendimento',
    description:
      'Ideal para gerar renda rapidamente usando celular, WhatsApp, marketplaces e comunicacao com clientes.',
    match: 92,
  },
  creative: {
    title: 'Design para pequenos negocios',
    description:
      'Boa escolha para criar posts, cardapios, artes simples e pacotes visuais para comercios locais.',
    match: 88,
  },
  tech: {
    title: 'Programação para primeiros freelas',
    description:
      'Recomendada para quem tem mais horas semanais e quer construir sites, automacoes e portfolio tecnico.',
    match: 84,
  },
}
