module.exports = ({exactName, optimize}) => {

    const use = [
        {
            loader: 'file-loader',
            options: {
                name: exactName ? '[name].[ext]' : '[hash:16].[ext]',
                outputPath: 'img'
            },    
        }
    ]

    if (optimize) {
        use.push(
            {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 65
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  // the webp option will enable WEBP
                  webp: {
                    quality: 75
                  }
                }
            },
        )
    }

    return {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        use
    }
}