# webpack-blocks-html

A [webpack-block](https://github.com/andywer/webpack-blocks) for [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![NPM Version](https://img.shields.io/npm/v/webpack-blocks-html.svg)](https://www.npmjs.com/package/webpack-blocks-html)

*Version compatibility:*

* webpack-blocks v0._x_ -> webpack-blocks-html [v1._x_](https://github.com/ecliptic/webpack-blocks-copy/tree/master) (@latest)
* webpack-blocks v1._x_ -> DEPRECATED: Merged into [webpack-blocks-utils](https://github.com/ecliptic/webpack-blocks-utils)

## Installation

```sh
yarn add --dev webpack-blocks-html
```

or

```sh
npm install --save-dev webpack-blocks-html
```

## Usage

```js
import {createConfig, entryPoint, setOutput} from '@webpack-blocks/webpack2'
import babel from '@webpack-blocks/babel6'
import html from './src/webpack-block-html'

export default createConfig([
  entryPoint(['babel-polyfill', './src/Main.js']),
  setOutput('./build/bundle.js'),
  babel(),
  html({template: 'assets/index.html'}),
])
```

## Options

See the options list [here](https://github.com/jantimon/html-webpack-plugin#configuration).

Defaults:

* *filename:* 'index.html'
* *template:* 'templates/index.html'
* *showErrors:* false

## License

This project is licensed under [MIT](https://github.com/ecliptic/webpack-blocks-html/blob/master/LICENSE).
