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

## Redux

1. To install Redux:

   ```powershell
     npm install redux react-redux
   ```

2. Create store.js file inside src folder
3. Wrap App component in index.js with Provider from redux.

   ```javascript
    import { Provider } from 'react-redux';
    import { configureStore } from './store';
    ...
    render(
      <Provider store={configureStore()}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
   ```

## Redux-persist

1. To persist redux state, install:

   ```powershell
     npm install redux-persist
   ```

2. Add *persistReducer*, *storage*, and *autoMergeLevel2* in store.js
3. Add *persistStore* and *PersistGate* in index.js

## Redux Dev Tools

To connect your app to Redux Dev Tools, configureStore like this inside store.js:

```javascript
  ...
  export const configureStore = () =>
    createStore(
      persistedReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
```
