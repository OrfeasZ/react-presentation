var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: [ 'babel' ],
            exclude: /node_modules/,
            include: __dirname
        },
        {
            test: /\.md$/,
            loader: "html-loader!markdown-loader?gfm=false"
        },
        {
            test: /\.css$/,
            loaders: ["style", "raw"],
            include: __dirname
        },
        {
            test: /\.svg$/,
            loader: "url?limit=10000&mimetype=image/svg+xml",
            include: path.join(__dirname, "assets")
        },
        {
            test: /\.png$/,
            loader: "url-loader?mimetype=image/png",
            include: path.join(__dirname, "assets")
        },
        {
            test: /\.gif$/,
            loader: "url-loader?mimetype=image/gif",
            include: path.join(__dirname, "assets")
        },
        {
            test: /\.jpg$/,
            loader: "url-loader?mimetype=image/jpg",
            include: path.join(__dirname, "assets")
        },
        {
            test: /\.json$/,
            loaders: [ 'json' ],
            exclude: /node_modules/,
            include: __dirname
        }]
    }
};

if (process.env.NODE_ENV === 'production')
{
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({ output: { comments: false }, sourceMap: false }));
    module.exports.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    module.exports.plugins.push(new webpack.optimize.DedupePlugin());
    module.exports.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }));
}
else
{
    module.exports.devtool = 'cheap-module-eval-source-map';
    module.exports.entry.unshift('webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server');
    module.exports.plugins.push(new webpack.NoErrorsPlugin());
    module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports.entry.push('./src/index');
