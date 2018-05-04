import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navitem.css';

export default class NavItem extends React.Component {
  render() {
    return (
      <div>
        <Link to={{pathname: this.props.href}}>{this.props.link}</Link>
      </div>
    );
  }
}