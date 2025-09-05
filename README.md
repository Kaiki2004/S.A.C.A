# PROJETO S.A.C.A (Sistema de aprendizado de cards ativos)

Breve descrição do projeto em 1–3 linhas. Explique o propósito, público-alvo e o que o torna diferente.

---

## Sumário

* [Demonstração](#demonstração)
* [Tecnologias](#tecnologias)
* [Pré‑requisitos](#pré-requisitos)
* [Instalação](#instalação)
* [Configuração (.env)](#configuração-env)
* [Scripts](#scripts)
* [Estrutura de Pastas](#estrutura-de-pastas)
* [Acessibilidade](#acessibilidade)
* [Integração com API](#integração-com-api)
* [Deploy](#deploy)
* [Roadmap](#roadmap)
* [Contribuição](#contribuição)

---

## Demonstração

Coloque aqui:
* Link da demo: `https://...`
* GIFs ou screenshots principais

Badges (exemplos via shields.io):

![Vite](https://img.shields.io/badge/Vite-5-646CFF)
![Vite](https://img.shields.io/badge/Vite-5-646CFF)

---

## Tecnologias

Marque o que se aplica ao seu projeto:

* **Core**: React, Vite
* **Roteamento**: React Router
* **UI**: Styled Components
* **Form**: React Hook Form 
---

## Pré‑requisitos

* Node.js >= 18
* React >= 18
* PNPM **ou** Yarn **ou** NPM (escolha um)

---

## Instalação

```bash
# 1) Clone
git clone https://github.com/<org>/<repo>.git
cd <repo>

# 2) Gerenciador de pacotes 
npm i

# 3) Rodar em dev
npm run dev

# Acesse http://localhost:5173 (Vite) ou http://localhost:3000 (Next/CRA)
```

## Configuração (.env)

Crie um arquivo `.env` na raiz com base no exemplo abaixo:

```dotenv
# Build
NODE_ENV=development
VITE_APP_NAME=MinhaApp
VITE_API_BASE_URL=https://api.meuservico.com

```

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



```
src/
├─ app/              # bootstrap (providers, rotas, layout raiz)
├─ pages/            # rotas (se CRA/Vite) | app/ (Next)
├─ shared/           # ui, lib, config, api base, hooks comuns, as
```





