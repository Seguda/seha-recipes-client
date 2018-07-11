import React, { Component } from "react";
import { connect } from "react-redux";
import { doSearch } from "../../actions";
import "./search.css";

// function searchingFor(text,recipe){
//       // return recipe.name.toLowerCase().includes(text.toLowerCase());
// }
class Search extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      executeSearch: false,
      searchCompleted: false,
      term: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const _term = this.state.term;
    this.props.dispatch(doSearch(_term));
  }

  handleChange(e) {
    e.preventDefault();
    const _term = this.textInput.value;
    if (_term.length > 3) {
      this.setState((prevState, props) => {
        return {
          term: _term
        };
      });
    }
  }

  render() {
    return (
      <form className="searchbar" onSubmit={e => this.handleSubmit(e)}>
        <input
          type="search"
          placeholder="Recipe Search"
          onChange={this.handleChange}
          ref={input => (this.textInput = input)}
        />
        <button type="submit">Go!</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes
  };
};

export default connect(mapStateToProps)(Search);
