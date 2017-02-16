module.exports = {
  devtool: 'cheap-module-eval-source-map',
  computerShapeUrl: 'https://hook.io/eric-basley/roshambo',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: '0.0.0.0',
    port: 3000,
  },
};
