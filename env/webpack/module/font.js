module.exports = ({ name }) => ({
	test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
	exclude: /img/,
	use: [
		{
			loader: "file-loader",
			options: {
				name,
				outputPath: "font"
			}
		}
	]
});
