import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { NotFound } from './NotFound';
import Home from './Home';
import List from './List';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list/:search/:page" component={List} />
        <Route path="/list/:search/" component={List} />
        <Route path="/" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
