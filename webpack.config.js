module.exports = {
  entry: __dirname + '/src/index.js',
  output: { path: __dirname + '/pub', filename: 'bundle.js' },
  resolve: {
    extensions: [".js", ".json", ".css"]
  },
  //devtool: "eval-source-map", //not sure??
  module: {
    rules: [
      {
        test: /\.jsx?$/,  //compiles js or jsx
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:['react'] //move to .babelrc?
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader" // has separate config, see postcss.config.js nearby
        ]
      }
    ]
  }
};
