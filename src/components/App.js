import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { NotFound } from './NotFound';
import CharacterDetail from './CharacterDetail';
import Home from './Home';
import List from './List';
import '../styles/reset.css';

export default function App() {
  const perPage = 10;
  const listComp = (props) => <List {...props} perPage={perPage} />;

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list/:search/:page" render={listComp} />
        <Route path="/list/:search/" render={listComp} />
        <Route path="/list/" render={listComp} />
        <Route path="/detail/:id" component={CharacterDetail} />
        <Route path="/" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
