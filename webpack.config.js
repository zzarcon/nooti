module.exports = {
    entry: './nooti.js',
    output: {
        publicPath: 'http://localhost:8090/assets',
        path: './dist',
        filename: 'nooti.js',
        libraryTarget: 'umd',
        library: 'Nooti'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js']
    }
};