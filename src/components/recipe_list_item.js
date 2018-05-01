import React from "react";
import './recipe_list_item.css';

export default class RecipeListItem extends React.Component {


    render() {
        return (
            <ul>
            <div className="recipe_list">
            <div className="recipeListItem" id="list"> 
                <div className="content">
                <h1> {this.props.recipe.name}</h1>
                <div>
                <h2>Ahuthor: {this.props.recipe.author}</h2>
                <h2>Type: {this.props.recipe.type}</h2>
                <h2>Ethnicity: {this.props.recipe.ethnicity}</h2>
                <h2>Servings: {this.props.recipe.servings}</h2>
                <h2>Ingredients: {this.props.recipe.ingredients}</h2>
                <h2>Directions: {this.props.recipe.directions}</h2>
                {/* <img src={this.props.recipe.image} alt="some image" /> */}
                </div>
              
                <p>
                    <button onClick={() => this.props.handle('')}>Close</button>
                </p>
                </div>
             </div>
             </div>
            </ul>
           
        )
    }
}

