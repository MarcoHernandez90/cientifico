// Importamos las librerías necesarias para la configuración de webpack
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Exportamos esta configuración a través de un modulo:
module.exports = {
  // Entry es el punto de entrada de la aplicación (el núcleo)
  entry: './src/index.js',
  // Output es la ruta donde se creará el proyecto listo para producción
  // (la versión dist) haciendo uso de la librería path para crear la ruta
  // y el archivo
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  // En resolve se configuran las extensiones de los archivos que estará
  // manejando webpack (.js, .jsx, .vue, etc.)
  resolve: {
    extensions: ['.js']
  },
  // Module contiene las reglas del módulo, en este caso es babel que se
  // utilizará para que el proyecto sea compatible con todos los navegadores
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: './src/styles/styles.css',
        to: ''
      }],
    })
  ]
}


