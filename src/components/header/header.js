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
          link: "Home",
          href: "/home"
        },
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
    const links = this.state.navs.map((link, index) => {
      return (
        <NavItem key={index} {...link} />
      )
    });

    const header = (
      <div className="header">
       <div className="wrap">
         <div className="logo">
             <img src="/images/logo.png" alt="logo" className="logo" />
         </div>
         <h1 className="app-header">Share Your Yummies</h1>
         <ul className="navs">
           {links}
         </ul>
         <Search />
       </div>
      </div>
    )
    if (this.props.searchExec) {
      let _param = `/search?term=${this.props.term.toLowerCase()}`;
      return (
        <div>
          {header}
          <Redirect to={_param} />
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
