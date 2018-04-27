import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import recipeReducer, { fetchRecipes } from './reducers';
import thunk from 'redux-thunk';

import Recipes from './components/recipes';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';	
import registerServiceWorker from './registerServiceWorker';



const store = createStore(
  combineReducers({
    formReducer,
    recipeReducer
  }), 
  composeWithDevTools(applyMiddleware(thunk)
));
store.dispatch(fetchRecipes());



ReactDOM.render(
  <Provider store={store}>
    <Recipes createFormHidden={true}/>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();

