#ARQUITETURA

A estrutura de pastas e componentes do CineDash é baseada na FSD (Feature Sliced Design), se organizando em camadas (pages/, entities/, widgets/, etc.). Isso permite que a aplicação cresça de forma escalável e organizada.

``src``
``├── app/``               # Configurações globais da aplicação, providers e ``bootstrap
``├── components/``        # Componentes reutilizáveis compartilhados entre múltiplas features
``├── entities/``          # Entidades de negócio e seus componentes, modelos e integrações
``├── lib/``               # Funções utilitárias, helpers e configurações compartilhadas
``├── pages/``             # Páginas da aplicação e composição das features
``├── routes/``            # Definição e configuração das rotas da aplicação
``├── shared/``            # Assets, constantes, tipos e recursos compartilhados
``├── stores/``            # Gerenciamento de estado global com Zustand
``├── tests/``             # Testes unitários e de integração
``├── widgets/``            # Blocos de interface compostos por múltiplos componentes/features
``└── main.tsx``           # Ponto de entrada da aplicação

