#ARQUITETURA

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
