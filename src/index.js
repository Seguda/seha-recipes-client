import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { reducer} from './reducers';
import thunk from 'redux-thunk';

import Recipes from './components/recipes';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';	
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Recipes />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();

