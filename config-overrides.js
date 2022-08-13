const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackPlugins = [
    new BundleAnalyzerPlugin()
];

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
