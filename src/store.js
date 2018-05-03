import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import recipeReducer from './reducers';
import { reducer as formReducer } from 'redux-form';


const store = createStore(
    combineReducers({
        form: formReducer,
        recipeReducer
    }),
    composeWithDevTools(applyMiddleware(thunk)
    ));



export default store;