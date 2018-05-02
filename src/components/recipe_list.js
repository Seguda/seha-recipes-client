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
                <ul>
                <li key={index} onClick={() => this.props.displayRecipe(recipe)}>
                   {recipe.name}
                </li>  
                </ul>     
            )
        });
        return (
                <div className="recipeList">
                    <h2>Recipe List</h2>
                    <ul><li>{recipes}</li></ul>
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
