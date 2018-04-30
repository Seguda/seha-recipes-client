import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import Button from './create_button';
import RecipeList from './recipe_list';
import CreateRecipeForm from './recipe_form'
import Header from './header';

class Recipes extends Component {


    render(){
        return (
            <div>
                <Header />
                <SearchBar />
                <CreateRecipeForm createFormHidden={this.props.createFormHidden} />
                <RecipeList recipes={this.props.recipes}/>
                <Button value={true} text={'Create Form'} ></Button>
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