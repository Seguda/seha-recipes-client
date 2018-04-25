import React, {Component} from 'react';
import RecipeList from './recipe_list';
import {reducer} from '../reducers';
import { connect } from 'react-redux';

function searchingFor(text,recipe){
      return recipe.name.toLowerCase().includes(text.toLowerCase());
}
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            // recipes:[],
            text:''
        }
    this.searchHandler=this.searchHandler.bind(this);
    }
    searchHandler(event){
        //console.log(event.target.value);
        this.setState({text:event.target.value})
    }
    render() {
        const{text} = this.state;
        const {recipes}=this.props;
       
        //console.log(searchForText({name:"cake"}));
        console.log(recipes);
        let filteredRecipes=recipes.filter(recipe => searchingFor(text,recipe));
        if(!text){
           filteredRecipes=[];
        }
        //console.log(filteredRecipes);
        return (
        <div className="search_bar">
            <form>
           <input type="text"
            onChange={this.searchHandler}
                        value={text} />
             </form>   
            
                {filteredRecipes.map((recipe, index) => {

               return <li key={index}>{recipe.name}</li>
            })}
         </div>
        );
    }
}
const mapStateToProps = (state) => ({
    recipes: state.recipes
})

export default connect(mapStateToProps)(SearchBar);