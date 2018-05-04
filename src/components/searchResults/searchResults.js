import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {setRecipe} from '../../actions';
import './searchResults.css'

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.setRecipe = this.setRecipe.bind(this);
  }

  setRecipe(recipe) {
    this.props.dispatch(setRecipe(recipe));
  }

  render(){
    let results;
    if(this.props.results) {
      results = this.props.results.map((recipe, index) => {
        let _param = `/recipes/?=${this.props.term.toLowerCase()}`;
        return (
          <Link key={index} to={{pathname: _param}}>
            <li onClick={() => this.setRecipe(recipe)}>
               {recipe.name}
            </li>
          </Link>
        )
      });
    } else {
      results = () => {
        return (
          <p>No match found.</p>
        )
      }
    }
    return (
      <div className="main">
        <div className="recipeList">
          <h2>Search Results</h2>
          <ul>{results}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
      results: state.recipeReducer.results,
      term: state.recipeReducer.term
  };
}

export default connect(mapStateToProps)(SearchResults);
