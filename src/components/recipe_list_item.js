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
            directions: "",
            downloadUrl: ""
            }
        };

        var className = "recipeListItem " + (this.props.display === "block" ? "block" : "hidden");
        if(props.recipe.downloadUrl) {
            var image = `http://localhost:8080/${props.recipe.downloadUrl}`;
        } else {
            var image = `http://localhost:8080/static/default.jpg`;
        }
        return (
            <ul>
                <li>
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
                <img src={image} alt="some" />
               
                </div>
              
                <p>
                    <button onClick={this.props.closeRecipe}>Close</button>
                </p>
                 
                </div>
             </div>
                </li>
            </ul>
           
        )
    }
}

