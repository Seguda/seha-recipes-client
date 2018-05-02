import React, {Component} from 'react';
import { connect } from 'react-redux';
//import RecipeListItem from './recipe_list_item';
import './search_bar.css'

function searchingFor(text,recipe){
      return recipe.name.toLowerCase().includes(text.toLowerCase());
}
class SearchBar extends Component {

    render() {
        const { text } = this.props;
        const { recipes }=this.props;

       // console.log(recipes);
        let filteredRecipes=recipes.filter(recipe => searchingFor(text,recipe));
        if(!text){
           filteredRecipes=[];
        }
        //console.log(filteredRecipes);
        return (
        <div className="search_bar">
                <img src="http://localhost:3000/images/backgroundpic.jpg" alt="background_img" className="background_img" />
            <div className="search_box">
                    <label htmlFor="search" className="transparent">Recipe Search </label>
                <input type="search" className="search_input" id="search" placeholder="Recipe Search"
                        onChange={(event) => this.props.searchRecipe(event.target.value)}
                value={text} />
                    
                <div className="search_results">
                    {filteredRecipes.map((recipe, index) => {
                        return <li key={index} onClick={() => this.props.displayRecipe(recipe)}>{recipe.name}</li>
                    })}
                </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    recipes: state.recipeReducer.recipes
})

export default connect(mapStateToProps)(SearchBar);
