import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';

class RecipeList extends React.Component {

    componentWillMount() {
        this.props.getList();
    }

    render() {      
        const recipes = this.props.recipes.map((recipe, index) => {
            return (
            <li key={index} onClick={() => this.props.displayRecipe(recipe)}>
               {recipe.name}
            </li>                 
            )
        });
        return (
            <div className="recipeList">
                <h2>Recipe List</h2>
                <ul>{recipes}</ul>
            </div> 
        );
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipeReducer.recipes
})

const mapDispatchToProps = (dispatch) => ({
    getList: () => dispatch(fetchRecipes())
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
