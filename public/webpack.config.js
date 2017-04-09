/**
 * Created by IlyaLitvinov on 09.04.17.
 */
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader','css-loader', 'autoprefixer-loader?browsers=last 5 versions']
        }]
    }
};