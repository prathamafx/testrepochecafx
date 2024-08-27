## Usage

### Development server

```bash
yarn start / npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Unit Test

```bash
 yarn test / npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Production build

```bash
 yarn build / npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## Features

* **[React](https://facebook.github.io/react/)** (17.x)
* **[Webpack](https://webpack.js.org/)** (5.x)
* **[Babel](https://babeljs.io/)** (7.x)
* **[TypeScript](https://www.typescriptlang.org/)** (4.5.x)
* **[Tailwind CSS](https://tailwindcss.com/)** (3.x)
* [Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/) ([React Hot Loader](https://github.com/gaearon/react-hot-loader))
* Production build script [Webpack 5](https://webpack.js.org/)
* Image loading/minification ([Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader))
* TypeScript linting ([ESLint](https://github.com/eslint/eslint)) and formatting ([Prettier](https://github.com/prettier/prettier))
* CSS/Sass linting ([StyleLint](https://github.com/stylelint/stylelint))
* [Jest 26](http://jestjs.io/)
* [SASS](https://sass-lang.com/) support
* [PostCss](https://postcss.org/)  
* [Husky](https://github.com/typicode/husky)

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### Jest

- [`jest`](https://jestjs.io/) - Delightful JavaScript Testing
- [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom#readme) - Custom jest matchers to test the state of the DOM
- [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) - Simple and complete React DOM testing utilities
- [`@testing-library/user-event`](https://github.com/testing-library/user-event#readme) - Fire events the same way the user does

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- ['ts-loader'](https://www.npmjs.com/package/ts-loader) - Transpile all typescript files with webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
- [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Loader to process CSS with PostCSS
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Eslint
- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.
- [`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias) - a simple Node behavior import resolution plugin for eslint-plugin-import, supporting module alias.
- [`eslint-plugin-babel`](https://www.npmjs.com/package/eslint-plugin-babel) - an eslint rule plugin companion to babel-eslint.
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) - This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
- [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier) - Runs prettier as an eslint rule.
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) - React specific linting rules for ESLint.
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - Enforces the Rules of React Hooks.


### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - Optimize and minimize CSS assets
- [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Optimize and minimize JavaScript
- [`react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin) - HMR using React Fast Refresh
- [`dotenv-webpack`](https://github.com/mrsteele/dotenv-webpack) - Supports dotenv and other environment variables
- [`@svgr/webpack`](https://github.com/mrsteele/dotenv-webpack) - SVGR can be used as a webpack loader, this way you can import your SVG directly as a React Component.
- [`babel-jest`](https://www.npmjs.com/package/babel-jest) - Babel jest plugin for transforimg ```.js``` ,```.ts``` and ```.tsx``` files
