// eslint-disable-next-line import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("html-loader")
      .loader("html-loader")
      .end()
      .use("markdown-loader")
      .loader("markdown-loader");
    if (process.env.ANALYZE) {
      config.plugin("analyzer").use(BundleAnalyzerPlugin);
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/variables.scss";'
      }
    }
  }
};
