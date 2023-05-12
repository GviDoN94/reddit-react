const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(css|less|styl|scss|sass|sss)$/,
        exclude: /node_modules/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(css|less|styl|scss|sass|sss)$/,
        include: /node_modules/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        type: "asset",
      },
      {
        test: /\.svg/,
        type: "asset/inline",
      },
      {
        test: /\.(bmp|gif|jpg|jpeg|png)$/,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
