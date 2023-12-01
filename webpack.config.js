/**
 * WordPress Dependencies
 */

const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const defaults = require('@wordpress/scripts/config/webpack.config.js');

module.exports = {
	...defaults,
	...{
		entry: {
			backend: path.resolve(process.cwd(), 'src/backend/', 'backend.js'),
			frontend: path.resolve(
				process.cwd(),
				'src/frontend/',
				'frontend.tsx'
			),
		},
		output: {
			filename: '[name].js',
			path: path.resolve(process.cwd(), 'build'),
		},
		module: {
			...defaults.module,
			rules: [
				...defaults.module.rules,
				{
					test: /\.tsx?$/,
					use: [
						{
							loader: 'ts-loader',
							options: {
								configFile: 'tsconfig.json',
								transpileOnly: true,
							},
						},
					],
				},
			],
		},
		resolve: {
			extensions: [
				'.ts',
				'.tsx',
				...(defaults.resolve
					? defaults.resolve.extensions || ['.js', '.jsx']
					: []),
			],
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						output: {
							comments: /translators:/i,
						},
						compress: {
							passes: 2,
							drop_console: true,
						},
						mangle: {
							reserved: ['__', '_n', '_nx', '_x'],
						},
					},
				}),
			],
		},
	},
};
