module.exports = () => {
    return {
        test: /\.(css|scss)$/,
        use:  ['style-loader', 'css-loader', 'sass-loader']
    }
}