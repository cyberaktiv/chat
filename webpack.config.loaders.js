module.exports = function() {
  return [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      },
      {
          test: /\.hbs/,
          loader: 'handlebars-loader'
      },
      {
          test: /\.(jpe?g|png|gif|svg|)$/i,
          loader: 'file-loader?name=images/[hash].[ext]'
      }
  ];
};
