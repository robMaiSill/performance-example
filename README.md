# 🚀 Performance App

Welcome to the **Performance App** — your tool to **search, add, update, view, and manage journeys**, all wrapped with a smooth basket feature.

---

## 📋 Features

- 🔍 **Journeys CRUD**
  - Search, add, update, and view journeys
  - Strongly typed models generated from an OpenAPI spec
- 🧺 **Basket**
  - Add/remove journeys to a basket for multi-select actions
  - Manage your selection before finalizing
- 🧩 **Architecture & Tech**
  - **Angular 21** with **standalone components**
  - **Angular Signals** for reactive state management
  - Generated **API client** from OpenAPI with strong typings
- 🧹 **Quality & Tooling**
  - Automatic code formatting with **Prettier**
  - Linting with **ESLint**
  - Unit tests with **Vitest** (configured for Angular 21)
  - Git hooks managed via **Husky** (on `npm run prepare`)

---

## ⚙️ Scripts

Use these commands to develop, build, test, and maintain the app:

| Script                         | Description                                                                 |
|--------------------------------|-----------------------------------------------------------------------------|
| `npm start`                    | Start the Angular dev server (`ng serve`)                                   |
| `npm run start:mock`           | Start dev server with mock configuration on port `8901`                     |
| `npm run build`                | Build the Angular app for production                                        |
| `npm test`                     | Run unit tests with **Vitest**                                              |
| `npm run test:watch` *(opt.)*  | Run Vitest in watch mode (if configured)                                    |
| `npm run lint`                 | Run ESLint to check code style and static analysis                          |
| `npm run start:node:server`    | Start the backend Node server with `nodemon`                                |
| `npm run prepare`              | Install / update Git hooks with Husky                                       |
| `npm run generate:client`      | Generate API client from OpenAPI spec and format with Prettier              |
| `npm run prettier:fix`         | Format all supported source files with Prettier                             |

> If you added other Vitest helpers (e.g. `test:ci`, `coverage`), you can extend this table accordingly.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v22.22.0`  
  Ensure you’re using the correct version (e.g. with `nvm`):
  ```bash
  nvm use 22.22.0
