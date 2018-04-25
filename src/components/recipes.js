import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import Button from './create_button';
import RecipeList from './recipe_list';
import CreateRecipeForm from './recipe_form'
import Header from './header';
import { fetchRecipes } from '../actions/recipes';

class Recipes extends Component {

    // componentDidMount() {
    //     this.props.dispatch(fetchRecipes());
    // }
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.state = {};
    }

    onButtonClick(event) {
       console.log('count');
        this.setState();
    }

    render() {
        var CreateRecipe = this.state.creatingRecipe ? <CreateRecipe /> : '';

       // var Recipe = (this.props.recipes.length > 0) ? 
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
        // console.log(this.props);
        // const recipes = this.props.recipes.map((recipe, index) => {
        //     return(
        //         <li key={index}>{recipe.name}</li>)
        // }) 

const mapStateToProps = state => ({
    recipes: state.recipes
});

export default connect(mapStateToProps)(Recipes);