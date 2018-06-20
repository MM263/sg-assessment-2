const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill', path.join(__dirname, 'src', 'index.js')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url-loader?limit=1000'
      },
      {
        test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=1000'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
      filename: './index.html'
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true
  }
}
