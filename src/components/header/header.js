import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './header.css';
import Search from '../search/search';
import NavItem from '../navItem/navitem';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navs: [
        {
          link: "All Recipes",
          href: "/recipes"
        },
        {
          link: "Add Recipe",
          href: "/new"
        }
      ]
    };
  }

  render() {
    const header = (
      <div>
        <div className="header">
         <div className="wrap">
           <div className="logo">
               <img src="http://localhost:3000/images/logo.png" alt="logo" className="logo" />
           </div>
           <h1 className="app-header">Share Your Yummies</h1>
           <Search />
         </div>
        </div>
      </div>
    )
    if (this.props.searchExec) {
      let _param = `/search?term=${this.props.term.toLowerCase()}`;
      return (
        <div>
          {header}
          <Redirect to={_param} />;
        </div>
      )
    }
    return header
  }
}

const mapStateToProps = function (state) {
  return {
      term: state.recipeReducer.term,
      recipe: state.recipeReducer.recipe,
      searchExec: state.recipeReducer.searchExec
  };
}

export default connect(mapStateToProps)(Header);
