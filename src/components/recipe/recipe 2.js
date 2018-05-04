import React, { Component } from 'react';
import { connect } from 'react-redux';
import './recipe.css';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: {}
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({
      steps: {...this.props.recipe}
    })

  }

  render() {
    var className = "recipeListItem " + (this.props.display === "block" ? "block" : "hidden");
    // if(props.recipe.downloadUrl) {
    //     var image = `http://localhost:8080/${props.recipe.downloadUrl}`;
    // } else {
    //     var image = `http://localhost:8080/static/default.jpg`;
    // }

    return (
      <ul>
        <li>
          <div className="content">
            <h2>{this.state.steps.name}</h2>
            <h3>Author: {this.state.steps.author}</h3>
            <h3>Type: {this.state.steps.type}</h3>
            <h3>Ethnicity: {this.state.steps.ethnicity}</h3>
            <h3>Servings: {this.state.steps.servings}</h3>
            <h3>Ingredients: {this.state.steps.ingredients}</h3>
            <h3>Directions: {this.state.steps.directions}</h3>
          </div>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = function (state) {
  return {
      recipe: state.recipeReducer.recipe
  };
}

export default connect(mapStateToProps)(Recipe);
