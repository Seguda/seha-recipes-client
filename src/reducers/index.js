import * as actions from '../actions';
const initialState = {
    recipes: [],
    loading: false,
    error: null,
    createFormHidden: false
};

const recipeReducer = (state = initialState, action) => {
   // console.log(action);
    if (action.type === actions.FETCH_RECIPE_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    } else if (action.type === actions.FETCH_RECIPE_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            error: null,
            recipes: action.recipes
        });
    } else if (action.type === actions.FETCH_RECIPE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if(action.type === actions.CREATE_FORM) {
        //console.log("in reducer");
        //console.log(state);
        //console.log(action);
       return Object.assign({}, state, {
            createFormHidden: action.createFormHidden
        });
    }
    // } else if (action.type === actions.RECIPE_SUBMIT) {


    // } 
     else if (action.type === actions.SET_RECIPE) {
      return Object.assign({}, state, {
        recipe: action.recipe
      });
    } else if (action.type === actions.DO_SEARCH) {
      let _results = state.recipes.filter((item, index) => {
        let _item = item.name.toLowerCase().split(" ");
        if(_item.indexOf(action.term.toLowerCase()) >= 0) {
            return item.name
        }
        // return item.name === action.term;
      });
      console.log(_results);
      return Object.assign({}, state, {
        term: action.term,
        results: _results,
        searchExec: true
      });
    }
    // } else if (action.type === actions.RECIPE_SUBMIT) {

    // }

    return state;
}

export default recipeReducer;
