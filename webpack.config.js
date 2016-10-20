var config = {
  context: __dirname + "/app",
  entry: "./main.js",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
};
module.exports = config;
