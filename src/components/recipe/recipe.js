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
      text: "",
      currentPage: 1,
      recipesPerPage: 6
    };
    this.setRecipe = this.setRecipe.bind(this);
    this.closeRecipe = this.closeRecipe.bind(this);
    this.searchRecipe = this.searchRecipe.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
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
      console.log(recipe, recipe.downloadUrl);

      let _param = `/recipes/${recipe.name.toLowerCase()}`;
      return (
        <li
          className="recipeimg"
          key={index}
          onClick={() => this.setRecipe(recipe)}
        >
          <Link to={{ pathname: _param }}>
            <img src={`${API_BASE_URL + "/" + recipe.downloadUrl}`} alt="" />
            <p> {recipe.name} </p>
            <p> {recipe.type} </p>
          </Link>
        </li>
      );
    });
    const { currentPage, recipesPerPage } = this.state;
    // Logic for displaying current recipes
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipe = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(recipes.length / recipesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={(e) => this.handleClick(e)}
        >
          {number}
        </li>
      );
    });
    return (
      <div className="wrap">
        <h2>Pure Joy Below</h2>
        <ul className="recipelist">{recipes}</ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    recipes: state.recipeReducer.recipes
  };
};

export default connect(mapStateToProps)(Recipes);
