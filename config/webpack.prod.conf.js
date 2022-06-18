// import PurgeCSS webpack plugin and glob-all
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const paths = require("path");

new PurgecssPlugin({
    paths: [paths.appHtml, ...glob.sync(`${paths.appSrc}/**/*`, { nodir: true })],
});
