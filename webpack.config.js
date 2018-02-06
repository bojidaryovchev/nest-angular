const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const dev = env === 'development';

// plugins
const devPlugins = [
    new NodemonPlugin()
];
const prodPlugins = [];
const commonPlugins = [];
const plugins = dev ? devPlugins.concat(commonPlugins) : prodPlugins.concat(commonPlugins);

// TODO: add plugins

module.exports = {
    entry: path.resolve(__dirname, "./src/server/main.ts"),
    output: {
        path: path.resolve(__dirname, "./bin"), 
        filename: "server.bundle.js"
    },
    plugins: plugins,
    target: "node",
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.tsx?$/,
                loader: "tslint-loader",
                options: {
                    configFile: "./src/server/tslint.json"
                },
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [ ".ts", ".tsx" ]
    }
}