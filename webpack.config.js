const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
<<<<<<< HEAD
const HTMLWebapckPlugin = require('html-webpack-plugin');
=======
>>>>>>> 8e7998fce4d48dd168d6113bf022221fed141234

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
<<<<<<< HEAD
		filename: '[name].js',
		publicPath: './'
=======
		filename: 'bundle.js',
		publicPath: 'build/'
>>>>>>> 8e7998fce4d48dd168d6113bf022221fed141234
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		]
	},
<<<<<<< HEAD
	plugins: [
		new ExtractTextPlugin('style.css'),
		new HTMLWebapckPlugin({
			template: './index.html'
		})
	],
=======
	plugins: [new ExtractTextPlugin('style.css')],
>>>>>>> 8e7998fce4d48dd168d6113bf022221fed141234
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		overlay: true
	}
};

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map';
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	]);
}
