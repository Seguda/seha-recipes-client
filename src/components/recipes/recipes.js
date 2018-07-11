import React, { Component } from "react";
import { connect } from "react-redux";
import { setRecipe } from "../../actions";
import { Link } from "react-router-dom";
import "./recipes.css";
import { API_BASE_URL } from "../../config";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecipe: false,
      recipe: [],
      text: ""
    };
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

  render() {
    const recipes = this.props.recipes.map((recipe, index) => {
      let _param = `/recipes/${recipe.name.toLowerCase()}`;
      return (
        <li className="recipeimg" onClick={() => this.setRecipe(recipe)}>
          <Link key={index} to={{ pathname: _param }}>
            <img src={`${API_BASE_URL + "/" + recipe.downloadUrl}`} alt="" />
            <p> {recipe.name} </p>
            <p> {recipe.type} </p>
          </Link>
        </li>
      );
    });
    return (
      <div className="wrap">
        <h2>Pure Joy Below</h2>
        <ul className="recipelist">{recipes}</ul>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    recipes: state.recipeReducer.recipes
  };
};

export default connect(mapStateToProps)(Recipes);
