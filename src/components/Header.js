import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <div>
    <h1>The First Browser for the Last Airbender API</h1>
    <nav>
      <Link to="/">Home</Link>
      <a href="https://www.linkedin.com/in/dave-trost/">About Me</a>
    </nav>
  </div>
);
