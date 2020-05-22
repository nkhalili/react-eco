# React Ecosystem

## Dependencies

To install required libraries:

```powershell
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

To add ES6 transpile, add .babelrc file:

```powershell
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## Webpack

First install webpack and relevant dependencies:

```powershell
  npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
```

To add webpack.config file:

- webpack.config uses ES5 javascript syntax
- webpack uses loaders to transpile our code for example to transform ES6 to regular javascript webpack uses 'babel-loader', similarly, for css styles uses 'style-loader', 'css-loader'

After adding webpack configuration to run your webpack dev server run:

```powershell
  npx webpack-dev-server --mode development
```

## Hot-loader

To automatically refresh page after each changes:

```powershell
  npm install --save-dev react-hot-loader
```

Then import and use in App.js as follow:

```javascript
  import { hot } from 'react-hot-loader';
  ...
  export default hot(module)(App);
```
