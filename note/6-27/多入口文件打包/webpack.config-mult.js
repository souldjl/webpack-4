const path = require('path');
const base = path.resolve(__dirname,'..');
module.exports = {
    entry: {
        index: path.resolve(base, 'src', 'index.js'),
        main: path.resolve(base, 'src', 'main.js')
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(base, 'dist')
    }
};