'use strict';

exports.__esModule = true;
exports.default = html;

var _htmlWebpackPlugin = require('html-webpack-plugin');

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Webpack block for html-webpack-plugin
 *
 * @see https://github.com/ampedandwired/html-webpack-plugin
 */

function html(options) {
  return Object.assign(function (context) {
    var defaultOpts = {
      filename: 'index.html',
      template: 'templates/index.html',
      showErrors: false
    };

    // Merge the provided html config into the context
    var html = context.html || defaultOpts;

    /* Warning: Thar be mutation ahead! */
    /* eslint-disable fp/no-mutation */
    context.html = (0, _deepmerge2.default)(html, options, { clone: true });
    /* eslint-enable fp/no-mutation */

    // Return empty config snippet (configuration will be created by the post hook)
    return {};
  }, { post: postConfig });
}

function postConfig(context) {
  /* Warning: Thar be class instantiation ahead! */
  /* eslint-disable better/no-new */
  var plugin = new _htmlWebpackPlugin2.default(context.html);
  /* eslint-enable better/no-new */

  return { plugins: [plugin] };
}
module.exports = exports['default'];