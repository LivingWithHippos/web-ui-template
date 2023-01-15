# web-ui-template
A [Svelte Kit](https://kit.svelte.dev/) + [daisyUI](https://daisyui.com/) + Typescript web app project skeleton

## Libraries and Frameworks

- [Svelte Kit](https://kit.svelte.dev/) (with [Vite](https://vitejs.dev/))
- [DaisyUI](https://daisyui.com)
- [TailwindCSS](https://tailwindcss.com/)
- [TailwindCSS typhography](https://tailwindcss.com/docs/typography-plugin)
- [Theme change](https://github.com/saadeghi/theme-change)

## Installation

1. Clone or download the repository
2. Enter the `app` folder
3. Use `npm install` to install the dependencies
4. Use `npm run dev` to run the development server
5. ???
6. Money

## Configuration and developement

These are the configuration files:

- package.json
- postcss.config.cjs
- svelte.config.js
- tailwind.config.js
- tsconfig.js
- vite.config.ts

The adapter used to specify how the app should be build is set to `static` at the moment. This means the build will be a colllection of static files ready to be served by any web server (Caddy, Flask, Apache etc.).
Follow [this guide](https://kit.svelte.dev/docs/adapters) to change the adapter.