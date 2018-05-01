import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import Button from './create_button';
import RecipeList from './recipe_list';
import WelcomeText from './welcome_text';
import CreateRecipeForm from './recipe_form'
import Header from './header';
import { ImageUpload } from './upload_image';
import './create_button.css'
import './welcome_text.css'
import './recipe_list.css'

class Recipes extends Component {

    render(){
        return (
            <div>
                <Header />
                <SearchBar />
                <CreateRecipeForm createFormHidden={this.props.createFormHidden} />
                <Button cls={"createRecipeBtn"} value={true} text={'Create Recipe'} ></Button>
                <ImageUpload />
            
            <div className="main">
                <RecipeList recipes={this.props.recipes} />
                <WelcomeText />
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