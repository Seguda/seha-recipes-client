import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {reducer} from './reducers';
import { reducer as formReducer } from 'redux-form';


// const store = createStore(
//   combineReducers({
//     reducer
//   }),
//   composeWithDevTools(applyMiddleware(thunk)));

const store = createStore(reducer, applyMiddleware(thunk));

export default store;