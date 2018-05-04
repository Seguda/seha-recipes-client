import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './app.css';

import Main from './components/main/main';
import Header from './components/header/header';
// import Footer from './components/footer/footer';


class App extends Component {

  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Main />
          {/*<Footer />*/}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(App);
