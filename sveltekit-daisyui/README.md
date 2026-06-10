# web-ui-template

A [Svelte Kit](https://kit.svelte.dev/) + [daisyUI](https://daisyui.com/) + Typescript static web project template

## Libraries and Frameworks

- [Svelte Kit](https://kit.svelte.dev/) (with [Vite](https://vitejs.dev/))
- [Vite 8](https://vite.dev/)
- [DaisyUI](https://daisyui.com)
- [theme change](https://github.com/saadeghi/theme-change)
- [TailwindCSS](https://tailwindcss.com/)
- [oxfmt formatter](https://oxc.rs/docs/guide/usage/formatter.html)
- [oxlint linter](https://oxc.rs/docs/guide/usage/linter.html)

## Installation

1. Use `npm install` to install the dependencies
2. Use `npm run dev` to run the development server
3. ???
4. Money

`fmt` and `lint` can be used to check the code formatting and linting respectively.

## Configuration and development

These are the configuration files, aside from `package.json`:

- svelte.config.js (adapters)
- tsconfig.json
- vite.config.ts
- layout css (global styles + [daisyui themes](https://daisyui.com/docs/themes/))

The adapter used to specify how the app should be build is set to `static` at the moment. This means the build will be a collection of static files ready to be served by any web server (Caddy, Nginx, Flask etc.).
Follow [this guide](https://kit.svelte.dev/docs/adapters) to change the adapter.
