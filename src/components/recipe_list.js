import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import RecipeListItem from './recipe_list_item';

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
            showRecipe: false,
            recipe: ''
        };
    }

    componentWillMount() {
        this.props.dispatch(fetchRecipes());
    }

    handleClick(recipe) {
        this.setState({
            showRecipe: (this.state.showRecipe) ? false : true,
            recipe 
        })
    }
    render() {
        const recipes = this.props.recipes.map((recipe, index) => {
            return (
                <li key={index} onClick={() => this.handleClick(recipe)}>
                   {recipe.name}
                </li>
            )
        });
        return (
            <div>
                <div className="recipe_list">
                    <h3>Recipe List</h3>
                    <p>{recipes}</p>
                </div>
                <div className="recipe_list" style={{ 'display': (this.state.showRecipe) ? 'block' : 'none' }}>
                    <RecipeListItem recipe={this.state.recipe} handle={(e) => this.handleClick(e)} />
                </div>
            </div> 
        );
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes
})

export default connect(mapStateToProps)(RecipeList);
