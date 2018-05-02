import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import Button from './create_button';
import RecipeList from './recipe_list';
import RecipeListItem from './recipe_list_item';
import WelcomeText from './welcome_text';
import CreateRecipeForm from './recipe_form'
import Header from './header';
import { ImageUpload } from './upload_image';
import './create_button.css'
import './welcome_text.css'
import './recipes.css'

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRecipe: false,
            recipe: {},
            text: ''
        }
        this.displayRecipe = this.displayRecipe.bind(this);
        this.closeRecipe = this.closeRecipe.bind(this);
        this.searchRecipe = this.searchRecipe.bind(this);
    }

    displayRecipe(recipe) {
        this.setState({
            showRecipe: true,
            recipe
        });
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
        return (
            <div>
              <Header />
              <SearchBar text={this.state.text} displayRecipe={this.displayRecipe} searchRecipe={this.searchRecipe} />
              <CreateRecipeForm createFormHidden={this.props.createFormHidden} />
              <Button cls={"createRecipeBtn"} value={true} text={'Create Recipe'} ></Button>
              <ImageUpload />

              <div className="main">
                  <WelcomeText />
                  <RecipeList recipes={this.props.recipes} displayRecipe={this.displayRecipe} />
                  <RecipeListItem display={this.state.showRecipe ? 'block' : 'none'} recipe={this.state.recipe} closeRecipe={this.closeRecipe} />
              </div>
            </div>
        );
    }
}


const mapStateToProps = function (state) {
    //console.log("State inside recipes.js ");
    //console.log(state);
return {
    recipes: state.recipeReducer.recipes,
    createFormHidden: state.recipeReducer.createFormHidden
};
}

export default connect(mapStateToProps)(Recipes);
