const path = require('path');
const base = path.join(__dirname, '..')

module.exports = {
    entry: path.resolve(base, 'src', 'index.js'),
    output: {
        filename: './bundle.[name].[hash].js',
        path: path.resolve(base, 'dist')
    },
};