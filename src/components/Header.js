import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <div>
    <h1>Avatar Browser</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">All Avatars</Link></li>
      </ul>
    </nav>
  </div>
);
