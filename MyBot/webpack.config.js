const path = require('path');

module.exports = {
  entry: 'MyBot/src/App.jsx', // Replace with your component file path
  output: {
    filename: 'embed.js', // Define the output filename
    path: path.resolve(__dirname, 'dist'), // Define the output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react-app'],
          },
        },
      },
    ],
  },
};