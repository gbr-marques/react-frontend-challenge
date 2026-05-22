# ARQUITETURA DO CINEDASH

## Estrutura de diretórios (Feature Sliced Design)

A estrutura de pastas e componentes do CineDash é baseada na FSD (Feature Sliced Design), se organizando em camadas (pages/, entities/, widgets/, etc.). Isso permite que a aplicação cresça de forma escalável e organizada.

``src``
``├── app/``               
``├── components/``        
``├── entities/``          
``├── lib/``               
``├── pages/``             
``├── routes/``            
``├── shared/``            
``├── stores/``            
``├── tests/``             
``├── widgets/``           
``└── main.tsx``           

• app/ — Responsável pela configuração global da aplicação, incluindo providers, inicialização de bibliotecas, gerenciamento de temas e demais recursos compartilhados por toda a aplicação.
• components/ — Contém componentes reutilizáveis da biblioteca shadcn/ui e independentes de domínio, como botões, inputs, diálogos, badges e demais elementos de interface utilizados em diferentes partes do sistema.
• entities/ — Reúne as entidades de negócio da aplicação, incluindo seus modelos, tipos, componentes e integrações. Neste projeto, exemplos de entidades são filmes (``movie/``) e atores ou membros da equipe ((``actor/``)).
• lib/ — Armazena funções utilitárias, helpers, formatadores e configurações compartilhadas, evitando duplicação de código entre módulos.
• pages/ — Contém as páginas da aplicação, responsáveis por compor widgets, entidades e componentes para formar as telas acessadas pelo usuário. Neste projeto, exemplos de páginas são a página inicial (``home/``), a página de descobetas (``discover/``), entre outras.
• routes/ — Centraliza a definição das rotas da aplicação, suas configurações e regras de navegação, incluindo proteção de rotas autenticadas.
• shared/ — Diretório destinado a recursos compartilhados globalmente, como imagens, fontes, constantes, tipos genéricos e arquivos estáticos.
• stores/ — Responsável pelo gerenciamento de estado global utilizando Zustand, concentrando informações compartilhadas entre múltiplos componentes e páginas, como autenticação e lista de favoritos. Neste projeto, os exemplos de stores são a que gerencia a lista de favoritos (``watchlist/``) e a que gerencia a autenticação do usuário (``auth/``).
• tests/ — Agrupa os testes unitários e de integração da aplicação, garantindo a confiabilidade dos principais fluxos e regras de negócio.
• widgets/ — Componentes mais complexos que combinam múltiplas entidades e componentes menores para formar blocos funcionais completos da interface. Neste projeto, alguns exemplos de widgets são a lista horizontal de filmes (``movie-horizontal-list/``), o grid de filmes (``movie-grid``), entre outros.
• main.tsx — Ponto de entrada da aplicação, responsável pela inicialização do React e montagem da árvore principal de componentes.

## Processo de autenticação 

Neste exercício, não existe uma estrutura de backend que gerencie a autenticação da aplicação. Portanto, foram usadas algumas estratégias pra simular esse processo, como:

- Criação e armazenamento de token no local storage, simulando um token de sessão real;
- Store do Zustand com uso do persist, que controla a propagação da autenticação no layout e navegação da aplicação de forma eficiente e reativa (ex.: barrar rotas internas 3 ocultar widgets e cabeçalho e rodapé para usuários que não estejam autenticados)

# ETAPAS DO DESENVOLVIMENTO

## Layout e prototipação

Antes de dar início à codificação, quando possível, gosto de rascunhar a estrutura e o layout dos meus projetos, pois acredito que isso reduz drasticamente a quantidade de ajustes e correções referentes só layout.

Os protótipos do Figma de <a href="https://www.figma.com/board/sn7OHoNTaSvHF4idTfzuX3/Teste-Pr%C3%A1tico-Inbazz--CineDash----Jam?t=mlXkdTuHmbuIefUz-1" target="_blank">estrutura</a> e <a href="https://www.figma.com/design/rcT4bwQDtoBUIhjsnPAdaJ/Teste-Pr%C3%A1tico-Inbazz--CineDash----Prot%C3%B3tipo?m=auto&t=mlXkdTuHmbuIefUz-1" target="_blank">layout</a> do projeto podem ser conferidos clicando nos links vinculados.
 
## Estruturação

Uma vez que todas as decisões referentes ao layout do CineDash foram tomadas, passei a traduzir a estrutura prototipada para o código.

Durante essa etapa, também foram configurados os principais pilares da aplicação:

- Estrutura de rotas utilizando TanStack Router;
- Gerenciamento de estado global com Zustand;
- Camada de requisições e cache com TanStack Query;
- Biblioteca de componentes baseada em shadcn/ui;
- Sistema de estilização utilizando Tailwind CSS;
- Tipagem de dados e contratos utilizando TypeScript.

Com a arquitetura base definida, foi possível iniciar o desenvolvimento das funcionalidades de forma incremental, sempre mantendo uma separação clara entre regras de negócio, componentes visuais e integrações externas.

## Consumo da API

Após a estrutura inicial estar consolidada, foi realizada a integração com a API do TMDB, responsável por fornecer todas as informações exibidas pela aplicação.

As chamadas foram encapsuladas em hooks específicos utilizando TanStack Query, permitindo centralizar a lógica de carregamento, cache, tratamento de erros e revalidação automática dos dados.

Essa abordagem trouxe alguns benefícios importantes:

- Redução de requisições desnecessárias através do cache;
- Tratamento consistente de estados de carregamento e erro;
- Melhor separação entre camada de dados e interface;
- Facilidade para reutilizar consultas em diferentes partes da aplicação.

## Gerenciamento de Estado

Embora grande parte dos dados remotos fosse gerenciada pelo TanStack Query, algumas informações precisavam ser compartilhadas entre múltiplas telas e persistidas durante a navegação.

Para esses casos, foi utilizado Zustand como solução de gerenciamento de estado global.

As principais responsabilidades atribuídas às stores foram:

- Controle de autenticação do usuário;
- Persistência da lista de favoritos;
- Compartilhamento de estados entre componentes não relacionados diretamente.

A escolha pelo Zustand ocorreu principalmente pela simplicidade da API, baixa quantidade de código necessário e integração natural com aplicações React.

## Experiência do Usuário

Durante o desenvolvimento, procurei tratar os principais estados da interface para evitar telas vazias ou comportamentos inesperados.

Foram implementados:

- Skeletons para carregamento de conteúdo;
- Estados de erro com possibilidade de nova tentativa;
- Estados vazios para buscas sem resultados;
- Feedback visual através de notificações (toasts);
- Proteção de rotas para usuários não autenticados.

Esses cuidados ajudam a tornar a experiência mais previsível e amigável, mesmo em cenários de falha ou lentidão da rede.

## Testes

Por fim, foram adicionados testes automatizados para validar os fluxos mais importantes da aplicação.

Os testes foram desenvolvidos utilizando Vitest e React Testing Library, priorizando cenários que exercitam regras de negócio e interações relevantes do usuário, como gerenciamento da lista de favoritos e comportamento de componentes críticos.

A intenção não foi buscar cobertura máxima, mas garantir confiabilidade nos principais fluxos da aplicação e reduzir a chance de regressões durante futuras evoluções do projeto.

# DESAFIOS E TOMADA DE DECISÕES

## Novas stacks e bibliotecas

Das tecnologias listadas como requisitos do projeto, existem algumas com as quais eu não possuía tanta familiaridade, como TanStack Query, TanStack Table e Zustand. Na vez de implementá-las, escolhi investir um tempo inicial estudando a documentação oficial e analisando exemplos de implementação antes de incorporá-las ao projeto. Embora isso tenha levado um certo tempo ao longo do desenvolvimento, além de um repertório técnico bem valioso.

## Página de descobertas 

De acordo com o enunciado do desafio, a tela de Descobertas deveria antender os seguintes critérios:

    - Listagem de filmes (Trending/Popular) com paginação ou infinite scroll.
    - **Requisito Técnico:** Implementar **Debounce** no input para não floodar a API.
    - **Paginação:** Implementar paginação (botões ou infinite scroll).
    - **Filtros Avançados:** Filtrar por Gênero, Ano de Lançamento e Nota Mínima (Rating).

Analisando o que estava sendo pedido, apurei que o layout da página deveria oferecer:

    - Listagem de filmes populares nos últimos tempos;
    - Pesquisa de filmes por título;
    - Pesquisa de filmes por filtros avançados;

Porém, após estudar, com calma, os endpoints disponíveis na TMDB API, pude perceber que, até o momento, não existe um endpoint que atenda todos os três critérios. Diante desse cenário, decidi criar três widgets específicos, cada um oferecendo o seu próprio modo de busca:

    - <PopularMoviesGrid></PopularMoviesGrid> : responsável por listar os filmes populares no momento.
    - <MovieSearchGrid></MovieSearchGrid> : responsável por exibir os filmes pesquisados por título
    - <FilteredMovieGrid></FilteredMovieGrid> : responsável por exibir os filmes filtrados usando os filtros avançados (gênero, ano de lançamento e avaliações)

Esses widgets foram estruturados através de um sistema de tabs, de form que o usuário pode alternar entre eles e escolher a melhor forma de buscar novos títulos.

## Listagem de favoritos 
