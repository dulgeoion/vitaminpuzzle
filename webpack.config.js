module.exports = {
  entry: './src/index.js',
  output: {
      path: __dirname,
      filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module:{
      rules: [
          {
            test: /\.js?$/,
            exclude: '/node_modules/',
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["es2015", 'react']
                }
            }
          },
          {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
          }
      ]
  }


}
