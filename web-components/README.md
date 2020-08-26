# Pax Web Components

Standalone Web Components for Pax, built with [Stencil](https://stenciljs.com/).

## Setup

1. Checkout the correct Node version: see `.nvmrc`
    * Using [NVM](https://github.com/nvm-sh/nvm): `nvm use`
2. Install all dependencies: `npm install`
3. Start [local development](#local-development).

### Production Build

1. Build web components: `npm run build`
    * Don't forget to update the version number
2. [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)

## Using Pax Web Components

### JavaScript

1. Install web components as a dependency: `npm install @devatpax/web-components --save`
2. Put the following tags in the head of your index.html
    * `<link href="https://use.typekit.net/ydt8vux.css" rel="stylesheet">`
        * Loads web fonts from https://fonts.adobe.com
    * `<link href="node_modules/@devatpax/web-components/dist/pax/pax.css" rel="stylesheet">`
    * `<script nomodule src="node_modules/@devatpax/web-components/dist/pax.js"></script>`
    * `<script type="module" src="node_modules/@devatpax/web-components/dist/pax/pax.esm.js"></script>`
3. Then you can use the element anywhere in your template, JSX, html etc

## Local Development

1. Finish [setup](#setup).
3. Start local development: `npm run start`
    * A browser will open with [http://localhost:3333/](http://localhost:3333/)
    * Navigate to the test folder of the component you want to work on, i.e. [http://localhost:3333/src/components/badge/test/basic](http://localhost:3333/src/components/badge/test/basic)

### Notes on developing

* When creating new component tags use the prefix `pax`.
* Follow the recommended [coding guidelines from Stencil](https://stenciljs.com/docs/style-guide).
