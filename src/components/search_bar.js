import React, {Component} from 'react';
import RecipeList from './recipe_list';

function searchingfFor(text){
    return function(x){
        return x.name.toLowerCase().includes(text.toLowerCase()) || !text;
    }
}

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            recipes:[],
            text:''
        }
    this.searchHandler=this.searchHandler.bind(this);
    }
    searchHandler(event){
    this.setState({text:event.target.value})
    }
    render() {
        const{text, recipes} = this.state;
        return (
        <div className="search_bar">
            <form>
           <input type="text"
            onChange={this.searchHandler}
                        value={text} />
             </form>   
           {this.state.recipes.filter(recipe => {
               return <li key={recipe.name}></li>})}
         </div>
        );
    }
}

export default SearchBar;