import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { recipeReducer } from './reducers/recipes';
import thunk from 'redux-thunk';
import Recipes from './components/recipes';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(recipeReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
<Recipes/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
