SpaceX Portal
Projeto frontend desenvolvido em Next.js (App Router) que consome a API GraphQL pública da SpaceX, permitindo visualizar lançamentos passados de forma responsiva, acessível e performante.

Instalação e execução local
Após clonar o repositório, é necessário instalar as dependências do projeto.
npm install
Depois de instalar os pacotes, configure as variáveis de ambiente conforme indicado abaixo.

Variáveis de ambiente
Este projeto utiliza variáveis de ambiente para configurar a URL da API GraphQL.
Antes de executar a aplicação, é necessário criar os ficheiros .env.local (para execução local) e .env (para Docker), com base no ficheiro .env.example.
cp .env.example .env.local
cp .env.example .env

Tecnologias utilizadas
Next.js (App Router)
React
Typescript
GraphQL com @apollo/client
Tailwind CSS v4
shadcn/ui
Vitest (testes unitários)
Cypress (testes end-to-end)
Docker e Docker Compose

Integração com a API
A aplicação consome dados da API GraphQL pública da SpaceX, permitindo:
Listar lançamentos passados
Visualizar informação detalhada de cada lançamento

UI, Responsividade e Acessibilidade
Estilização com Tailwind CSS
Componentes reutilizáveis com shadcn/ui
Layout totalmente responsivo (mobile, tablet e desktop)
Boas práticas de acessibilidade (ARIA, estados de loading e erro)

Estratégias de renderização
SSR (Server-side Rendering)
Utilizado em páginas que beneficiam de renderização no servidor
CSR (Client-side Rendering)
Utilizado em componentes interativos, como o infinite scroll

Testes unitários
Foi implementado 1 teste unitário com Vitest para validar o comportamento de um hook de lógica (infinite scroll).

Testes end-to-end (E2E)
Foi implementado 1 teste E2E simples com Cypress para validar que a aplicação carrega corretamente no browser.

Execução com Docker
O projeto inclui um ficheiro docker-compose.yml.
Para o Docker funcionar corretamente, é obrigatório ter o ficheiro .env criado a partir do .env.example.
Para arrancar a aplicação com Docker:
docker compose up --build
Para parar os serviços:
docker compose down

Notas finais
Este projeto foi desenvolvido como teste técnico frontend, com foco em:
Qualidade de código
Estrutura e organização
Responsividade
Acessibilidade
Boas práticas em testes