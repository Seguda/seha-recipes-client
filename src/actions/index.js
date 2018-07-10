import * as actions from "../actions";
import { API_BASE_URL } from "../config";

// export const RECIPE_SUBMIT = 'RECIPE_SUBMIT';
// export const submitNewRecipe = () => ({
//     type: RECIPE_SUBMIT
// });

export const FETCH_RECIPE_REQUEST = "FETCH_RECIPE_REQUEST";
export const fetchRecipeRequest = () => ({
  type: FETCH_RECIPE_REQUEST
});

export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const fetchRecipeSuccess = recipes => ({
  type: FETCH_RECIPE_SUCCESS,
  recipes
});

export const FETCH_RECIPE_ERROR = "FETCH_RECIPE_ERROR";
export const fetchRecipeError = error => ({
  type: FETCH_RECIPE_ERROR,
  error
});

export const CREATE_RECIPE = "CREATE_RECIPE";
export const createrecipe = recipe => ({
  type: CREATE_RECIPE,
  recipe
});

export const SET_RECIPE = "SET_RECIPE";
export const setRecipe = recipe => {
  return {
    type: SET_RECIPE,
    recipe
  };
};

export const DO_SEARCH = "DO_SEARCH";
export const doSearch = term => {
  return {
    type: DO_SEARCH,
    term
  };
};

export const CREATE_FORM = "CREATE_FORM";
export const createform = function(createFormHidden) {
  // console.log(createFormHidden);
  return {
    type: CREATE_FORM,
    createFormHidden: createFormHidden
  };
};

export const fetchRecipes = () => dispatch => {
  dispatch(actions.fetchRecipeRequest());
  return fetch(`${API_BASE_URL}/recipes`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(actions.fetchRecipeSuccess(data));
    })
    .catch(err => dispatch(actions.fetchRecipeError(err)));
};

export const createNewRecipe = ({
  file,
  name,
  author,
  type,
  ethnicity,
  servings,
  ingredients,
  directions
}) => dispatch => {
  // console.log(name, author, type, ethnicity, servings, ingredients, directions, file);
  var data = new FormData();
  data.append("name", name);
  data.append("author", author);
  data.append("type", type);
  data.append("ethnicity", ethnicity);
  data.append("servings", servings);
  data.append("ingredients", ingredients);
  data.append("directions", directions);
  data.append("file", file);

  return fetch(`${API_BASE_URL}/recipes`, {
    method: "POST",
    body: data
  })
    .then(res => {
      if (!res.ok) {
        if (
          res.headers.has("content-type") &&
          res.headers.get("content-type").startsWith("application/json")
        ) {
          return res.json().then(err => Promise.reject(err));
        }
        return Promise.reject({
          code: res.status,
          message: res.statusText
        });
      }
      return res;
    })
    .then(res => res.json())
    .then(body => console.log(body))
    .then(() => dispatch(fetchRecipes()))
    .catch(err => {
      console.log(err);
    });
};
