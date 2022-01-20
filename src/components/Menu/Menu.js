import React from 'react';
import './Menu.css'
import {Link} from 'react-router-dom';

export default function Menu() {
  return(
    <nav>
        <ul className='menu'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
  );
}