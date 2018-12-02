<div align="center">

<h1>codetogether-ui</h1>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Library of reusable components for CodeTogether

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

</div>

<div align="center">

<h1>Contribute</h1>

</div>

- [Editor Requirements](#editor-requirements)
- [System Requirements](#system-requirements)
- [How To Use](#how-to-use)
- [Dependency Overview](#dependency-overview)
- [Project Structure](#project-structure)

## Editor Requirements

-   [EditorConfig](http://editorconfig.org/#download)
-   [EsLint](https://eslint.org/docs/user-guide/integrations#editors)
-   [Prettier](https://github.com/prettier/prettier)

## System Requirements

-   [node.js](https://nodejs.org/en/)

## How To Use

Download the project

```
git clone git@github.com:AhmedAbdulrahman/codetogether.network.git
```

Install dependencies

```
yarn
```

Developing in Storybook

```
yarn storybook
(open localhost:9009)
```

Building Storybook

```
yarn storybook:build
```

Start the app

```
yarn build && yarn start
(open localhost:3000)
```

## Dependency Overview

The application is built using

-   [Create React App](https://github.com/facebook/create-react-app)

Moreover we've configured and use:

-   [eslint](https://eslint.org/) - for linting our JS code
-   [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) - for analyzing our bundles and dependencies
-   [storybook](https://storybook.js.org/) - for creating an interactive styleguide

## Project Structure

We split components into different types, to then group them by feature:

```bash
.storybook/ # Storybook config
src/components/ # Presentational or dumb components. They usually don't contain any complicated logic.
|-- SomeComponent/
|   |-- index.js
|   |-- SomeComponent.js
|   |-- stories.js
src/containers/ # Intelligent components, in other words, components with logic, e.g. forms.
|-- SomeContainer/
|   |-- index.js
|   |-- SomeContainer.js
|   |-- stories.js
src/pages/ # Components which are rendered by a route directly. These can also be intelligent.
|-- SomePage/
|   |-- index.js
|   |-- stories.js
```
