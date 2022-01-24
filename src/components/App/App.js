import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';
import Products from '../Products/Products';
import Register from '../Register/Register';
import Home from '../Home/Home';

function App() {
  const [token, setToken] = useState();

  if(token){
    return (
      <div className="wrapper">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster|Roboto"></link>
        <h1>MacoMobility<span class="fas fa-bolt"></span></h1>
        
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  } else {
     return (
      <div className="wrapper">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster|Roboto"></link>
        <h1>MacoMobility<span class="fas fa-bolt"></span></h1>
        
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
              <Login setToken={setToken} />
            </Route>
            <Route path="/login">
              <Login setToken={setToken}/>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;