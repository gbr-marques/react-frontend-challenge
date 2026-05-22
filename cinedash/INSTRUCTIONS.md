# CINEDASH

## Sobre o projeto

O CineDash é uma aplicação frontend desenvolvida como teste prático, com foco em explorar filmes, visualizar detalhes, assistir trailers e gerenciar uma lista de curadoria pessoal de favoritos/watchlist.

O projeto foi construído com foco em boas práticas de arquitetura frontend, componentização, gerenciamento de estado global, experiência do usuário e qualidade de código através de testes automatizdos.

## Principais funcionalidades

- Autenticação simulada com persistência de sessão
- Proteção de rotas privadas
- Listagem de filmes populares
- Busca e filtragem de filmes
- Visualização detalhada de informações do filme
- Exibição de elenco
- Exibição de trailers via YouTube
- Gerenciamento de watchlist (adicionar e remover favoritos)
- Feedback visual através de toasts
- Tratamento de estados de carregamento, erro e ausência de resultados
- Testes unitários e de integração

## Tecnologias Utilizadas

• React — Biblioteca para construção de interfaces de usuário baseadas em componentes reutilizáveis.
• TypeScript — Superset do JavaScript que adiciona tipagem estática, aumentando a segurança e a previsibilidade do código.
• Vite — Ferramenta de build e desenvolvimento focada em velocidade e experiência moderna de desenvolvimento.
• TanStack Router — Gerenciamento de rotas com tipagem forte e suporte a carregamento de dados por rota.
• TanStack Query (React Query) — Gerenciamento de requisições assíncronas, cache e sincronização de dados com APIs.
• Zustand — Biblioteca leve para gerenciamento de estado global da aplicação.
• Tailwind CSS — Framework utilitário de estilização que permite criar interfaces responsivas de forma rápida e consistente.
• shadcn/ui — Coleção de componentes acessíveis e personalizáveis construída sobre Radix UI e Tailwind CSS.
• Moment.js — Biblioteca utilizada para manipulação, formatação e exibição de datas de forma simplificada.
• Vitest — Framework de testes unitários integrado ao ecossistema Vite.
• React Testing Library — Biblioteca para testes focados no comportamento real da interface sob a perspectiva do usuário.
• TMDB API — Fonte dos dados de filmes, trailers, avaliações e demais informações exibidas pela aplicação.
• Lucide React — Biblioteca de ícones SVG utilizada para complementar a interface da aplicação.

# INSTRUÇÕES

## Clonando o projeto

Clone o repositório:

``git clone -b feature/cinedash-impl https://github.com/gbr-marques/react-frontend-challenge.git``


Acesse a pasta do projeto:

``cd .\cinedash\``

## Configuração do ambiente

Crie um arquivo ``.env`` na raiz do projeto contendo seu Token de leitura da API do TMDB:

VITE_TMDB_TOKEN=<sua_chave_tmdb>

A chave pode ser obtida através do portal de desenvolvedores do TMDB:

https://developer.themoviedb.org

## Instalação

Instale as dependências do projeto:

``npm install``


## Executando a aplicação

Inicie o ambiente de desenvolvimento:

``npm run dev``

A aplicação ficará disponível em:

``http://localhost:5173``

## Executando os testes

Executar todos os testes:

``npm run test``

Executar testes em modo observação:

``npx vitest --watch``

Executar um arquivo específico:

``npx vitest src/tests/integration/movie-details.test.tsx``


## Observações

- A aplicação consome dados públicos fornecidos pela API do TMDB.
- É preciso fornecer uma chave válida da API para utilização dos recursos relacionados a filmes.
- As decisões arquiteturais, estrutura do projeto, organização das features e justificativas técnicas encontram-se documentadas em ARCHITECTURE.md.