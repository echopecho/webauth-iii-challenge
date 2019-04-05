import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

import Login from './login/Login';
import SignUp from './signup/SignUp';
import Users from './users/Users';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavLink to='/users'>Users</NavLink>
          &nbsp; | &nbsp;
          <NavLink to='/login'>Login</NavLink>
          &nbsp; | &nbsp;
          <NavLink to='/signup'>Sign Up</NavLink>
        </header>
        <main>
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/users' component={Users} />
        </main>
      </>
    );
  }
}

export default App;
