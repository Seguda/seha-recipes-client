import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setRecipe} from '../../actions';
import {Link} from 'react-router-dom';
import './recipes.css'

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecipe: false,
      recipe: [],
      text: ''
    }
    this.setRecipe = this.setRecipe.bind(this);
    this.closeRecipe = this.closeRecipe.bind(this);
    this.searchRecipe = this.searchRecipe.bind(this);
  }

  setRecipe(recipe) {
    this.props.dispatch(setRecipe(recipe));
  }

  closeRecipe() {
    this.setState({
      showRecipe: false
    });
  }

  searchRecipe(text) {
    this.setState({
      text
    });
  }

  render(){
    const recipes = this.props.recipes.map((recipe, index) => {
      let _param = `/recipes/${recipe.name.toLowerCase()}`;
      return (
        <Link key={index} to={{pathname: _param}}>
          <li onClick={() => this.setRecipe(recipe)}>
             {recipe.name}
          </li>
        </Link>
      )
    });
    return (
      <div className="main">
        <div className="recipeList">
          <h2>Recipe List</h2>
          <ul>{recipes}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
      recipes: state.recipeReducer.recipes
  };
}

export default connect(mapStateToProps)(Recipes);
