const path = require('path');

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': '/takeAwayJson'
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('styles', path.join(__dirname, './src/assets/styles/'))
            .set('@', path.join(__dirname, './src/'))
    },
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/"
}
