import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import Button from './create_button';
import RecipeList from './recipe_list';
import CreateRecipeForm from './recipe_form'
import Header from './header';


class Recipes extends Component {

    submit = values => {
        console.log(values)
    }

    render(){
        return (
            <div>
                <Header />
                <CreateRecipeForm createFormHidden={this.props.createFormHidden} onSubmit={this.submit} />
                <RecipeList recipes={this.props.recipes}/>
                <SearchBar />
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