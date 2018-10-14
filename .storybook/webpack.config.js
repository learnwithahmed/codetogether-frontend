// ./.storybook/webpack.config.js
const scssModuleRegex = /\.module\.scss$/;

module.exports = {
  module: {
    rules: [
      {
        test: scssModuleRegex,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          require.resolve('sass-loader'),
        ]
      }
    ]
  }
};