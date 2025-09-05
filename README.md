# PROJETO S.A.C.A (Sistema de aprendizado de cards ativos)

Breve descrição do projeto em 1–3 linhas. Explique o propósito, público-alvo e o que o torna diferente.

---

## Sumário

* [Demonstração](#demonstração)
* [Arquitetura & Padrões](#arquitetura--padrões)
* [Tecnologias](#tecnologias)
* [Pré‑requisitos](#pré-requisitos)
* [Instalação](#instalação)
* [Configuração (.env)](#configuração-env)
* [Scripts](#scripts)
* [Estrutura de Pastas](#estrutura-de-pastas)
* [Qualidade de Código](#qualidade-de-código)
* [Testes](#testes)
* [Acessibilidade](#acessibilidade)
* [i18n](#i18n)
* [Performance](#performance)
* [Storybook / Design System](#storybook--design-system)
* [Integração com API](#integração-com-api)
* [Deploy](#deploy)
* [Roadmap](#roadmap)
* [Contribuição](#contribuição)
* [Licença](#licença)

---

## Demonstração

Coloque aqui:

* Link de produção: `https://...`
* Link de homologação: `https://...`
* GIFs ou screenshots principais

Badges (exemplos via shields.io):

```
![React](https://img.shields.io/badge/React-18-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Vite](https://img.shields.io/badge/Vite-5-646CFF)
![PNPM](https://img.shields.io/badge/pnpm-8-F69220)
![CI](https://img.shields.io/badge/CI-GitHub_Actions-2088FF)
```

---

## Arquitetura & Padrões

* **Camadas**: `app/` (rotas/layout), `entities/` (domínio), `shared/` (infra/utilitários), `widgets/` (composições), `features/` (casos de uso). *(Adapte ao seu padrão, ex.: FSD, Clean Architecture, Atomic Design).*
* **Estado**: React Query / Zustand / Redux Toolkit (marque o que usar)
* **Rotas**: React Router / TanStack Router / Next.js
* **Estilos**: Tailwind CSS / Styled Components / CSS Modules / MUI / shadcn/ui
* **Formulários**: React Hook Form + Zod (validação)
* **HTTP**: Axios / fetch com wrapper
* **Código**: TypeScript, ESLint + Prettier, Husky + lint-staged, commitlint (Conventional Commits)

> Princípios: coesão alta, baixo acoplamento, SRP, composição > herança, componentes puros, hooks isolando efeitos, feature flags, caminhos absolutos (tsconfig `paths`).

---

## Tecnologias

Marque o que se aplica ao seu projeto:

* **Core**: React 18, TypeScript, Vite/CRA/Next.js
* **Roteamento**: React Router | TanStack Router | Next app router
* **Estado**: React Query | Redux Toolkit | Zustand | jotai | Recoil
* **UI**: Tailwind CSS | shadcn/ui | MUI | Chakra | Styled Components
* **Form**: React Hook Form | Formik + Zod | Yup
* **Charts**: Recharts | Chart.js | Visx | ECharts
* **Internacionalização**: react-i18next
* **Teste**: Vitest/Jest + React Testing Library | Cypress/Playwright (E2E)
* **Qualidade**: ESLint, Prettier, Husky, lint-staged, commitlint
* **A11y**: eslint-plugin-jsx-a11y, axe-core (opcional)
* **CI/CD**: GitHub Actions / GitLab CI / Vercel / Netlify / Docker

---

## Pré‑requisitos

* Node.js >= 18
* PNPM **ou** Yarn **ou** NPM (escolha um)
* (Opcional) Docker/Docker Compose

---

## Instalação

```bash
# 1) Clone
git clone https://github.com/<org>/<repo>.git
cd <repo>

# 2) Gerenciador de pacotes (escolha UM)
pnpm i
# ou
yarn
# ou
npm i

# 3) Rodar em dev
pnpm dev
# ou
yarn dev
# ou
npm run dev

# Acesse http://localhost:5173 (Vite) ou http://localhost:3000 (Next/CRA)
```

### Docker (opcional)

```bash
docker build -t <repo>:dev .
docker run -p 5173:5173 <repo>:dev
```

---

## Configuração (.env)

Crie um arquivo `.env` na raiz com base no exemplo abaixo:

```dotenv
# Build
NODE_ENV=development
VITE_APP_NAME=MinhaApp
VITE_API_BASE_URL=https://api.meuservico.com

# Auth
VITE_AUTH_PROVIDER=keycloak
VITE_AUTH_CLIENT_ID=web
VITE_AUTH_REALM=meu_reino
VITE_AUTH_URL=https://auth.example.com

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_EXPERIMENTAL=false
```

> Para Next.js use `NEXT_PUBLIC_` nos envs públicos.

---

## Scripts

Ajuste conforme seus scripts reais em `package.json`.

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier --write .",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:e2e": "cypress run",
    "typecheck": "tsc --noEmit",
    "storybook": "storybook dev -p 6006",
    "build:storybook": "storybook build",
    "prepare": "husky install"
  }
}
```

---

## Estrutura de Pastas

Exemplo baseado em FSD (Feature‑Sliced Design) com Vite:

```
src/
├─ app/              # bootstrap (providers, rotas, layout raiz)
├─ pages/            # rotas (se CRA/Vite) | app/ (Next)
├─ shared/           # ui, lib, config, api base, hooks comuns, as
```
