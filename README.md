# vite-plugin-html-banner

This is an extension plugin for the [vite](https://v3.vitejs.dev/).

Adds a banner to the generated html.

## Installation

```bash
$ npm install -d vite-plugin-html-banner
```

```bash
$ yarn add -D vite-plugin-html-banner
```

### Basic Usage

Load the plugin.

```js
const htmlBanner = require('vite-plugin-html-banner')
```

And add it to your `vite.config.js` config as follows:

```js
import { defineConfig } from 'vite'
import htmlBanner from 'vite-plugin-html-banner'

export default defineConfig({
  plugins: [htmlBanner('hello world')],
})
```

You will get the following results:

```html
<!--hello world-->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body></body>
</html>
```

#### Options

```js
htmlBanner(options)

options: string | string[] | { content: string | string[] }
```

Enter a string or array as follows:

```js
htmlBanner('hello world')
// If you enter an array, it will be automatically converted to a string separated by '\n'.
htmlBanner(['hello world'])
```

Or enter a object as follows:

_(features will be added in the future)_

```js
htmlBanner({ content: 'hello world' })
htmlBanner({ content: ['hello world'] })
```

## License

MIT
