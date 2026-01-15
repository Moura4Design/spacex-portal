SpaceX Portal

Projeto frontend desenvolvido em Next.js (App Router) que consome a API GraphQL da SpaceX, permitindo visualizar lançamentos passados de forma responsiva.

Tecnologias utilizadas

Next.js (App Router)
React
GraphQL com @apollo/client
Tailwind CSS v4
shadcn/u
Vitest (testes unitários)
Cypress (testes end-to-end)

Integração com API

A aplicação consome dados da API GraphQL pública da SpaceX para listar lançamentos e apresentar detalhes individuais.

UI e Responsividade

Estilização com Tailwind CSS
Componentes reutilizáveis com shadcn/ui
Layout responsivo (mobile, tablet e desktop)

Estratégias de renderização

SSR (Server-side Rendering)
Utilizado em páginas que podem beneficiar de renderização no servidor.

CSR (Client-side Rendering)
Utilizado em componentes interativos e funcionalidades como infinite scroll.

Testes unitários

Foi implementado 1 teste unitário com Vitest para validar o comportamento de um hook de lógica (infinite scroll).