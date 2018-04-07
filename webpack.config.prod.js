const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const baseConfig = require("./webpack.config");

const plugins = [new ExtractTextPlugin("style.css")];
if (process.env.ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge.smart(baseConfig, {
  module: {
    rules: [
      // Extract all .css to style.css as is
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          publicPath: "./",
          use: {
            loader: "css-loader",
            options: {
              minimize: true
            }
          },
          fallback: "style-loader"
        })
      },
      // Extract all .scss to style.css as is
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          publicPath: "./",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                includePaths: [path.resolve("./node_modules")]
              }
            }
          ],
          fallback: "style-loader"
        })
      },
      // WOFF Font
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "application/font-woff"
          }
        }
      },
      // WOFF2 Font
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "application/font-woff"
          }
        }
      },
      // TTF Font
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "application/octet-stream"
          }
        }
      },
      // EOT Font
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader"
      },
      // SVG Font
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "image/svg+xml"
          }
        }
      },
      // Common Image Formats
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: "url-loader"
      }
    ]
  },

  plugins
});
