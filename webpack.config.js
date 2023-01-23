"use strict";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let loader;
loader = {
    test: /\.(t|j)sx?$/,
    use: {
        loader: 'ts-loader',
        options: {
            transpileOnly: true
        }
    },
    exclude: /node_modules\//
};
export default {
    devtool: 'source-map',
    entry: {
        simple: './src/playground.ts'
    },
    mode: "production",
    module: {
        rules: [
            loader, {
                test: /\.css$/,
                use: [
                    {
                        loader: "text-loader"
                    }
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
        path: __dirname + '/build'
    },
    optimization: {
        minimize: false
    },
    devServer: {
        compress: true,
        port: 9001,
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
                }, {
                    from: "samples/**/*",
                    to: "."
                }
            ]
        })
    ]
};