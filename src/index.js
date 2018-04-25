import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import { recipeReducer } from './reducers/recipes';
import thunk from 'redux-thunk';
import Recipes from './components/recipes';
import './index.css';
import SearchBar from './components/search_bar';
import RecipeList from  './components/recipe_list';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(recipeReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
<Recipes />
</Provider>, document.getElementById('root'));
registerServiceWorker();

