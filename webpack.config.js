"use strict";
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = (env, argv) => {
    let loader;
    loader = {
        test: /\.(t|j)sx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        },
        exclude: [
            path.resolve(__dirname,'node_modules'),
            path.resolve(__dirname, 'samples')
        ]
    };
    return {
        devtool: 'source-map',
        entry: {
            simple: './src/playground.ts',
        },
        mode: "production",
        module: {
            rules: [
                loader,
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: "text-loader",
                        }
                    ],
                    exclude: [
                        path.resolve(__dirname,'node_modules'),
                        path.resolve(__dirname, 'samples/')
                    ]
                }
            ]
        },
        resolveLoader: {
            alias: {
                "ace-code/src/requirejs/text": __dirname + "/node_modules/text-loader"
            },
            modules: [
                "node_modules", __dirname + "/node_modules"
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'bundle.[name].js',
            path: __dirname + '/built'
        },
        optimization: {
            minimize: false
        },
        devServer: {
            compress: true,
            port: 9000,
            client: {
                overlay: false
            }
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {
                        from: "index.html",
                        to: "."
                    },
                    {
                        from: "samples/**/*",
                        to: "."
                    }
                ]
            })
        ]
    };
};