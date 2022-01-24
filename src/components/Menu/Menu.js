import React from 'react';
import './Menu.css'
import {Link} from 'react-router-dom';

export default function Menu() {
  return(
    <nav>
        <ul className='menu'>
          <li className='left'>
            <Link to="/"><span class="fas fa-home"></span>Home</Link>
          </li>
          <li className='left'>
            <Link to="/products">Products</Link>
          </li>
          <li className='left'>
            <Link to="/profile">Profile</Link>
          </li>
          <li className='right'>
            <Link to="/login">Login</Link>
          </li>
          <li className='right'>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
  );
}