const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/client/index.tsx",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "./index.html" }
    ])
  ]
};
