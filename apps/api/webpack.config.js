const { composePlugins, withNx } = require('@nx/webpack');
const { withDeepkit } = require('@deepkit-modules/nx-webpack-plugin');

module.exports = composePlugins(withNx(), withDeepkit());
