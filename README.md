# SkillBridge

SkillBridge e uma plataforma social ficticia inspirada no Objetivo de Desenvolvimento Sustentavel 1 da ONU: erradicacao da pobreza.

O projeto foi desenvolvido como uma proposta academica de startup social. A ideia central e ajudar pessoas de baixa renda a aprender habilidades praticas, acessar oportunidades e gerar renda por meio de cursos curtos, microtrabalhos e conexoes profissionais.

## Objetivo

Criar uma experiencia digital acessivel, moderna e funcional para demonstrar como tecnologia pode apoiar inclusao social, educacao pratica e geracao de renda.

## Problema

Pessoas em situacao de vulnerabilidade social frequentemente enfrentam:

- Falta de acesso a educacao profissionalizante.
- Dificuldade de encontrar oportunidades confiaveis.
- Baixo acesso a internet constante.
- Exclusao digital.
- Necessidade de gerar renda rapidamente.

## Solucao

A SkillBridge propoe uma jornada simples:

- Diagnostico inicial do perfil socioeconomico.
- Recomendacao de trilha de aprendizado.
- Cursos curtos com tarefas praticas.
- Simulacao de aulas offline.
- Oportunidades filtradas por perfil.
- Dashboard com progresso, renda estimada e proximos passos.
- Recursos de acessibilidade para leitura em voz alta.

## Funcionalidades

- Landing page moderna e responsiva.
- Diagnostico inteligente ficticio.
- Dashboard do aluno.
- Catalogo de cursos com filtros.
- Sala de aula ficticia com progresso.
- Simulacao de download offline.
- Oportunidades com filtros e candidatura simulada.
- Persistencia local com `localStorage`.
- Painel de acessibilidade.
- Leitura em voz alta com selecao de idioma.
- Fonte maior.
- PWA com manifesto e service worker.
- Secao academica sobre ODS 1.
- Pitch deck interativo.

## Acessibilidade

O projeto inclui recursos voltados a pessoas com baixa visao, dificuldade de leitura ou alfabetizacao limitada:

- Leitura em voz alta usando Web Speech API.
- Escolha do idioma da leitura.
- Fonte maior.
- Alto contraste como estilo principal.
- Link "Pular para o conteudo".
- Botoes com foco visivel.
- Conteudo organizado em secoes semanticas.

Observacao: a leitura em voz alta depende das vozes instaladas ou disponiveis no navegador do usuario.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Web Speech API
- Service Worker
- LocalStorage

## Como Rodar

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```bash
http://localhost:5173
```

## Scripts

```bash
npm run dev
```

Roda o projeto em modo desenvolvimento.

```bash
npm run build
```

Gera a versao final de producao.

```bash
npm run lint
```

Verifica problemas de padronizacao e codigo.

```bash
npm run preview
```

Visualiza a versao de producao localmente.

## Estrutura

```text
src/
  components/
  data/
  hooks/
  pages/
  sections/
  utils/
public/
  manifest.webmanifest
  offline.html
  sw.js
```

## Relacao Com ODS 1

O ODS 1 busca acabar com a pobreza em todas as suas formas. A SkillBridge se conecta a esse objetivo ao propor uma plataforma que:

- Facilita acesso a conhecimento pratico.
- Ajuda usuarios a gerar renda.
- Inclui pessoas com acesso limitado a internet.
- Conecta habilidades a oportunidades.
- Mede impacto social por renda, cursos e oportunidades.

## Modelo de Negocio

A plataforma poderia funcionar com:

- Acesso gratuito para usuarios vulneraveis.
- Parcerias com ONGs, escolas e governos.
- Planos institucionais para empresas apoiarem trilhas sociais.
- Relatorios de impacto para patrocinadores.
- Marketplace de oportunidades verificadas.

## Status do Projeto

Este projeto e um prototipo academico funcional, sem backend real. As funcionalidades de curso, candidatura, perfil e download offline sao simuladas no front-end.

## Proximos Passos

- Criar autenticacao real.
- Adicionar backend e banco de dados.
- Permitir upload de conteudo de cursos.
- Criar sistema real de oportunidades.
- Integrar APIs de traducao e voz profissional.
- Melhorar testes automatizados.
