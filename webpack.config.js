const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }, module: {
        rules: [{
            test: /\.(tsx|ts)$/, exclude: /node_modules/, use: {
                loader: 'babel-loader', options: {
                    presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react']
                }
            }
        }, {
            test: /\.(jsx|js)$/, exclude: /node_modules/, use: {
                loader: 'babel-loader', options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }, {
            test: /\.css$/i, exclude: /\.module\.css$/, use: ['style-loader', 'css-loader']
        }, {
            test: /\.module\.css$/i, use: ['style-loader', {
                loader: 'css-loader', options: {
                    modules: {
                        namedExport: false
                    }
                }
            }]
        },]
    }, output: {
        clean: true
    }, plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html')
    })]
}

