import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { fetchRecipes } from './actions';
import thunk from 'redux-thunk';
import Recipes from './components/recipes';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import recipeReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lato:300,700', 'Josefin+Sans:100i', 'Grand+Hotel', 'sans-serif']
  }
});


store.dispatch(fetchRecipes());


ReactDOM.render(
  <Provider store={store}>
    <Recipes createFormHidden={true}/>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
