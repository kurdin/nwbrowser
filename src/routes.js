import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';

const About = () => <div>nwbrowser について</div>;

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/index.html" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </App>
);
