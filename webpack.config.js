const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {  
  entry: [path.join(__dirname, 'src', 'index.js')], 
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: 'images' ,
              outputPath: 'images'
            }  
          }
        ]
      },
      {
        test: /\.(ttf)$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: 'fonts' ,
              outputPath: 'fonts'
            }  
          }
        ]
      },
      {
        test: /\.(js|jsx?)$/i,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, '/node_modules'),          
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react', 'stage-2'],
          plugins:['transform-decorators-legacy']
        }
      },
      {
        test: /\.(s?css)$/,
        use: [ {
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "sass-loader" // compiles Sass to CSS
      }]
      }
    ]
  },
 
  plugins:[
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ], 
  devtool: 'source-map',
  devServer: {    
    contentBase: path.join(__dirname,'dist'),
    compress: true,
    hot: true
  }
};