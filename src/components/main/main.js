import React from 'react';
import { Route} from 'react-router-dom';
import './main.css';
import Landing from '../landing/landing';
import Recipes from '../recipes/recipes'
import RecipeForm from '../recipeform/recipeform'
import Recipe from '../recipe/recipe'
import SearchResults from '../searchResults/searchResults'

export default function Main(props) {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Landing} />
      <Route exact path="/recipes" component={Recipes} />
      <Route exact path="/new" component={RecipeForm} createFormHidden={true} />
      <Route exact path="/recipes/:recipe" component={Recipe} />
      <Route exact path="/search" component={SearchResults} />
    </div>
  );
}
