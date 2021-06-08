import svelte from "rollup-plugin-svelte"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
// import del from "rollup-plugin-delete"
import html from "@rollup/plugin-html"

import appInfo from "./app-info.js"
import template from "./html-template.js"

export default {
    input: "./src/main.js",
    output: {
        file: `./output/app-d${Date.now()}.js`,
        format: "iife",
    },
    plugins: [
        svelte(),
        resolve(),
        commonjs(),
        html({
            filename: "./output/index.html",
            title: appInfo.name,
            template,
        })
    ]
}
