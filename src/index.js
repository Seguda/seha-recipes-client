import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetchRecipes } from './actions';
import Recipes from './components/recipes';
import './index.css';
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
