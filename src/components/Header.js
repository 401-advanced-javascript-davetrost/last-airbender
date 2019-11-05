import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <div>
    <h1>Avatar Browser</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </div>
);
