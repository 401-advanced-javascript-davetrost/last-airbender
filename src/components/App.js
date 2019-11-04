import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { NotFound } from './NotFound';
import { Home } from './Home';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
