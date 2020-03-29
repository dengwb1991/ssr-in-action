const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
module.exports = {
  webpack(config, ...args) {
    conifg = withCSS().webpack(config, ...args)
    config = withSass({
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
      }
    }).webpack(config, ...args)
    return config
  }
}