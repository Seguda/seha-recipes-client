import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipes';
import RecipeListItem from './recipe_list_item';

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            modal: false,
            recipeList: ''
        };
    }

    componentWillMount() {
        this.props.dispatch(fetchRecipes())
    }

    handleClick(val) {
        this.setState({
            modal: (this.state.modal) ? false : true,
            recipeList: val
        })
    }
    render() {
        const recipes = this.props.recipes.map((val, index) => {
            <li key={index} onClick={() => this.handleClick(val)}>
                Name:{val.name}
            </li>
        }
        );
        return (
            <div>
                <div className="recipe_list">
                    <h3>Recipe List</h3>
                   
                </div>
                <div className="recipe_list" style={{ 'display': (this.state.modal) ? 'block' : 'none' }}>
                    <RecipeListItem recipe={this.state.recipeList} handle={(e) => this.handleClick(e)} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes
})

export default connect(mapStateToProps)(RecipeList);
