const path = require('path');
const fs = require('fs');
const NodemonPlugin = require('nodemon-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const dev = env === 'development';
const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(moduleName) {
    return moduleName !== '.bin';
  })
  .forEach(function(moduleName) {
    nodeModules[moduleName] = 'commonjs ' + moduleName;
  });

const plugins = [
    new NodemonPlugin()
];

// TODO: add plugins

module.exports = {
    entry: path.resolve(__dirname, "./server/bin/www.ts"),
    output: {
        path: path.resolve(__dirname, "./bin"), 
        filename: "server.bundle.js"
    },
    plugins: dev ? plugins : [],
    target: "node",
    externals: nodeModules,
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
                use: "tslint-loader",
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [ ".ts", ".tsx" ]
    }
}