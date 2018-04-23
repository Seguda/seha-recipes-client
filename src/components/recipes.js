import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRecipes } from '../actions/recipes';

class Recipes extends Component {

    componentDidMount() {
        this.props.dispatch(fetchRecipes());
    }

    render() {
        console.log(this.props);
        const recipes = this.props.recipes.map((recipe, index) => {
            return(
                <li key={index}>{recipe.name}</li>)
        })

        return (
            <div>
                <h2>Share Your Yummy Recipes</h2>
            <ul>
                {recipes}
            </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    recipes: state.recipes
});

export default connect(mapStateToProps)(Recipes);