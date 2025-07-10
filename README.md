# NLW Agentes

Projeto desenvolvido durante o **NLW (Next Level Week)** da **Rocketseat**, focado em criar uma aplicação de agentes inteligentes com interface moderna e responsiva.

## 🚀 Tecnologias Utilizadas

### Frontend

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultra-rápido
- **React Router DOM** - Roteamento para aplicações React
- **TanStack Query** - Biblioteca para gerenciamento de estado e cache de dados

### Styling & UI

- **Tailwind CSS 4** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Biblioteca de ícones
- **Class Variance Authority** - Utilitário para variantes de componentes
- **clsx & tailwind-merge** - Utilitários para composição de classes CSS

### Code Quality & Development

- **Biome** - Linter e formatter rápido (substitui ESLint + Prettier)
- **Ultracite** - Configuração de qualidade de código otimizada
- **TypeScript** - Configuração rigorosa para type safety

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/           # Componentes baseados no shadcn/ui
├── pages/            # Páginas da aplicação
│   ├── create-room.tsx
│   └── room.tsx
├── lib/              # Utilitários e configurações
├── app.tsx           # Componente principal da aplicação
├── main.tsx          # Ponto de entrada
└── index.css         # Estilos globais
```

## 🎨 Padrões de Projeto

### Arquitetura

- **Component-Based Architecture** - Componentes reutilizáveis e modulares
- **File-Based Routing** - Roteamento baseado em arquivos com React Router
- **Atomic Design** - Estrutura de componentes organizada por complexidade

### Padrões de Código

- **TypeScript First** - Tipagem rigorosa em todo o projeto
- **Functional Components** - Uso de hooks e componentes funcionais
- **Custom Hooks** - Lógica reutilizável encapsulada em hooks
- **Component Composition** - Composição de componentes para flexibilidade

### UI/UX

- **Design System** - Baseado no shadcn/ui com Tailwind CSS
- **Responsive Design** - Interface adaptável para diferentes dispositivos
- **Accessibility** - Componentes acessíveis com Radix UI

## 🛠️ Setup e Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd nlw-agentes
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**

```bash
npm run dev
```

4. **Acesse a aplicação**

```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção localmente

### Configurações Importantes

#### Vite

- Configurado com alias `@` apontando para `./src`
- Plugin do React habilitado
- Tailwind CSS integrado via plugin oficial

#### TypeScript

- Configuração rigorosa para type safety
- Path mapping configurado
- Strict mode habilitado

#### Biome

- Linter e formatter configurado
- Estende configuração do Ultracite
- Semicolons configurados como "as needed"

## 🎯 Funcionalidades

- **Criação de Salas** - Interface para criar novas salas de agentes
- **Sala de Agentes** - Ambiente para interação com agentes inteligentes
- **Roteamento Dinâmico** - Navegação entre páginas com parâmetros

## 📸 Screenshots

### Tela de Criação de Sala

![Criação de Sala](./screenshots/create-room.png)

### Sala de Agentes

![Sala de Agentes](./screenshots/room.png)

### Interface Responsiva

![Responsivo](./screenshots/responsive.png)

> 💡 **Nota**: As imagens acima mostram a interface moderna e intuitiva do NLW Agentes. Para visualizar as screenshots, certifique-se de que as imagens estão na pasta `screenshots/` do projeto.

## 📝 Licença

Este projeto foi desenvolvido durante o NLW da Rocketseat. Para mais informações sobre o curso, visite [rocketseat.com.br](https://rocketseat.com.br).

---

Desenvolvido com ❤️ pela comunidade Rocketseat
