"use strict";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let loader;
loader = {
    test: /\.(t|j)sx?$/,
    use: {
        loader: 'swc-loader',
        options: {
            jsc: {
                "target": "es2019"
            }
        }
    },
    exclude: /node_modules/
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
                }, {
                    from: "node_modules/ace-builds/ace.d.ts",
                    to: "ace.d.ts"
                }, {
                    from: "node_modules/ace-builds/ace-modes.d.ts",
                    to: "ace-modes.d.ts"
                }, {
                    from: "node_modules/ace-builds/types/ace-modules.d.ts",
                    to: "ace-modules.d.ts"
                }, {
                    from: "node_modules/ace-linters/types/ace-linters.d.ts",
                    to: "ace-linters.d.ts"
                }
            ]
        })
    ]
};
