import React from "react";

export default class RecipeListItem extends React.Component {


    render() {
        return (
            <div>
                <h1>Name: {this.props.recipe.name}</h1>
                <h2>Ahuthor: {this.props.recipe.author}</h2>
                <h2>Type: {this.props.recipe.author}</h2>
                <h2>Ethnicity: {this.props.recipe.ethnicity}</h2>
                <h2>Servings: {this.props.recipe.servings}</h2>
                <h2>Ingredients: {this.props.recipe.ingredients}</h2>
                <h2>Directions: {this.props.recipe.directions}</h2>
                <img src={this.props.recipe.image} alt="some image" />
                <p>
                    <button onClick={() => this.props.handle('')}>Close</button>
                </p>
            </div>
        )
    }
}

