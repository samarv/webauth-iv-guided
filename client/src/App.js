import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './login/login'
import './App.css';

import { Route, NavLink, withRouter } from 'react-router-dom';

import Users from './users/Users'

class App extends Component {
  logoutHandler = () => {
    localStorage.removeItem("jwt");
    this.props.history.push('/login')
  }

  render() {
    return (
      <>

        <nav>
          <NavLink to="/login"> login </NavLink>
          <NavLink to="/users"> users </NavLink>

          <button onClick={this.logoutHandler}> logout </button>
        </nav>
        <main>
          <Route path ="/login" component= {Login} />
          <Route path ="/users" component= {Users} />
        </main>
      </>
    );
  }
}

export default withRouter(App);
