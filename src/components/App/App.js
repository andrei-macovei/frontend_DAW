import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile'
import Products from '../Products/Products'
import Register from '../Register/Register'

function App() {
  const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="wrapper">
      <h1>Application Home Page</h1>
      
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;