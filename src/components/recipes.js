import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import Button from './create_button';
import RecipeList from './recipe_list';
import CreateRecipeForm from './recipe_form'
import Header from './header';
import { fetchRecipes } from '../actions/recipes';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.state = {modal:false};
    }

    onButtonClick(event) {
       console.log('count');
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        var CreateRecipe = this.state.modal ? <CreateRecipe /> : '';
            <div>
                <ul>
                    {this.props.recipes}
                </ul>
            </div>
    
        return (
            <div>
                <Header />
            
            {CreateRecipe}
            <RecipeList recipes={this.state.recipes}/>
            <SearchBar />
            <Button onButtonClick={this.onButtonClick} />
           
            </div>
        );
    }
}
const mapStateToProps = state => ({
    recipes: state.recipes
});

export default connect(mapStateToProps)(Recipes);