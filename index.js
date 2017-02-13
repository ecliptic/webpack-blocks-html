/**
 * Webpack block for html-webpack-plugin
 *
 * @see https://github.com/ampedandwired/html-webpack-plugin
 */

import HtmlWebpackPlugin from 'html-webpack-plugin'

/**
 * @param {object} [options]
 * @param {string} [options.filename] - The file to write HTML to.
 * @param {string} [options.template] - The Webpack require path to the template.
 * @param {boolean} [options.showErrors] - If true (default), error details will be written to the HTML page.
 * @return {Function}
 */
export default function html ({filename, template, showErrors = true}) {
  return Object.assign(context => {
    /* Warning: Thar be mutation ahead! */
    /* eslint-disable fp/no-mutation */

    // Write html config into the context
    context.html = context.html || {}

    context.html.filename = filename
    context.html.template = template
    context.html.showErrors = showErrors

    /* eslint-enable fp/no-mutation */

    // Return empty config snippet (configuration will be created by the post hook)
    return {}
  }, {post: postConfig})
}

function postConfig (context) {
  const htmlOptions = Object.assign({}, context.html)

  /* eslint-disable better/no-new */
  const plugin = new HtmlWebpackPlugin(htmlOptions)
  /* eslint-enable better/no-new */

  return {plugins: [plugin]}
}
