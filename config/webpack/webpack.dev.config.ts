// development config
import webpack from "webpack";
import Dotenv from "dotenv-webpack";
import merge from "webpack-merge";
import path from "path";
import commonConfig from "./webpack.common.config";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import paths from "../paths";

const config: webpack.Configuration = merge(commonConfig, {
  mode: "development",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom", // replaces the "react-dom" package with additional patches to support hot reloading
    },
  },
  entry: [
    "react-hot-loader/patch", // activate HMR for React
    "webpack-dev-server/client?http://0.0.0.0:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.tsx", // the entry point of our app
  ],
  devServer: {
    historyApiFallback: true,
    static: paths.src,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    // host: "local-ipv4",
    headers: {
      "X-Frame-Options": "deny",
    },
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: true,
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new Dotenv({
      path: "./.env.development",
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, "../../tsconfig.json"),
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
  ],
});

export default config;
