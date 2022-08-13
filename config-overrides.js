const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { NODE_ENV } = process.env

const webpackPlugins = [];

if (NODE_ENV === 'development') {
    webpackPlugins.push(new BundleAnalyzerPlugin())
}

module.exports = {
    webpack: function (config) {
        return {
            ...config,
            plugins: [
                ...config.plugins,
                ...webpackPlugins
            ]
        }
    }
}
