# Project Goals & Development Plan

This section outlines the current feature goals and architectural tasks for the portfolio site:

## 💡 Migration to TypeScript
*   Migrate the entire application stack to TypeScript.

## 🎯 Current Tasks
*   Implement Photo Gallery component for showcasing visual projects.
*   Develop 'MiniBlog' section with dedicated routing and content display.

## 🛠️ Architecture To-Do List
*   **Refactor Component Structure:** Create a reusable `PhotoGallery` component.
*   **Routing:** Implement dedicated routes for the blog section (`/blog`).
*   **Data Schema:** Define consistent content schemas for photos and blog posts.
*   **State Management:** Review and update state management for scalability.

---
(Original README content follows)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
