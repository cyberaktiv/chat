const path = require('path');
const loaders = require('./webpack.config.loaders')();
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/client.js',
	output: {
		filename: '[name].[hash].js',
		path: path.resolve('dist')
	},
	devtool: 'source-map',
	module: {
		rules: loaders
	},
	plugins: [
		new HtmlPlugin({
			title: 'Chat',
			template: './index.hbs',
			style: 'src/css/style.css'
		})
	]
};
