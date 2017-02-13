/**
 * Webpack block for html-webpack-plugin
 *
 * @see https://github.com/ampedandwired/html-webpack-plugin
 */

import HtmlWebpackPlugin from 'html-webpack-plugin'
import merge from 'deepmerge'

export default function html (options) {
  return Object.assign(context => {
    // Merge the provided html config into the context
    const html = context.html || {}

    /* Warning: Thar be mutation ahead! */
    /* eslint-disable fp/no-mutation */
    context.html = merge([html, options], {clone: true})
    /* eslint-enable fp/no-mutation */

    // Return empty config snippet (configuration will be created by the post hook)
    return {}
  }, {post: postConfig})
}

function postConfig (context) {
  const htmlOptions = Object.assign({}, context.html)

  /* Warning: Thar be class instantiation ahead! */
  /* eslint-disable better/no-new */
  const plugin = new HtmlWebpackPlugin(htmlOptions)
  /* eslint-enable better/no-new */

  return {plugins: [plugin]}
}
