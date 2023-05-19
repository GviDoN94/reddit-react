const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";

function setupDevtool() {
  if (IS_DEV) return "eval";
  if (IS_PROD) return false;
}
module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "react-dom": IS_DEV ? "@hot-loader/react-dom" : "react-dom",
    },
  },
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: [
    path.resolve(__dirname, "../src/client/index.jsx"),
    "webpack-hot-middleware/client?path=//localhost:3001/static/__webpack_hmr",
  ],
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    filename: "client.js",
    publicPath: "//localhost:3001/static",
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        // Preprocess our own style files
        test: /\.(css|less|styl|scss|sass|sss)$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        // Preprocess 3rd party style files located in node_modules
        test: /\.(css|less|styl|scss|sass|sss)$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
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
  devtool: setupDevtool(),

  plugins: IS_DEV
    ? [new CleanWebpackPlugin(), new HotModuleReplacementPlugin()]
    : [],
};
