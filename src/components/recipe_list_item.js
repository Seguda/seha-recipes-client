import React from "react";
import './recipe_list_item.css';

export default class RecipeListItem extends React.Component {

   
    render() {
        var props = this.props.recipe ? this.props : { recipe: {
            name: "",
            author: "",
            ethnicity: "",
            type: "",
            servings: 0,
            ingredients: "",
            directions: ""
            }
        };

        var className = "recipeListItem " + (this.props.display === "block" ? "block" : "hidden");

        return (
            <ul>
                <div className={className}> 
                <div className="content">
                <h2> {props.recipe.name}</h2>
                <div>
                <h3>Ahuthor: {props.recipe.author}</h3>
                <h3>Type: {props.recipe.type}</h3>
                <h3>Ethnicity: {props.recipe.ethnicity}</h3>
                <h3>Servings: {props.recipe.servings}</h3>
                <h3>Ingredients: {props.recipe.ingredients}</h3>
                <h3>Directions: {props.recipe.directions}</h3>
                {/* <img src={this.props.recipe.image} alt="some image" /> */}
                </div>
              
                <p>
                    <button onClick={this.props.closeRecipe}>Close</button>
                </p>
                </div>
             </div>
            </ul>
           
        )
    }
}

