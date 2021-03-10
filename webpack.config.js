const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {filename: 'bundle.js', path: path.resolve(__dirname, 'public')},
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: false,
        port: 1337,
        historyApiFallback: true
    },
    module: {
        rules: [
          {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
          {test: /\.styl$/i, loader: [ MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],},
          {test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader'},
          {test: /\.(woff|woff2|eot|ttf|otf)$/i, loader: 'file-loader'},
        ]
    },
    plugins: [new MiniCssExtractPlugin({filename: 'bundle.css'})],
    resolve: {extensions: ['.js', '.jsx']},
    devtool: 'source-map'
};
