# mern-stack-template

index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>React Template</title>
</head>
<body>

  <div id="root"></div>
  <script src="./bundle.js"></script>
</body>
</html>

```

react index.jsx

```
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(<App />)
```

webpack config file

```
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  // [devtool] this is an additional source map that will let the browser know what files are running our code.
  // Helps with error tracing. Without it we will not know where our errors are coming from because it will state that everything inside the bundle file.
  devtool: "eval-cheap-module-source-map",
  // [devServer] configuration for the live server including port
  devServer: {
    // [static] config for how what to serve
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    // [port] what port on our local machine to run the dev server
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  }
}
```

babel config

```
{
  // [presets] allow us to define the additional packages we would like to include.
  // This will give us access to jsx and several other newer js features.
  "presets": ["@babel/preset-env","@babel/preset-react"]
}
```