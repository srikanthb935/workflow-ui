import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home/home.component';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact></Route>
      </Switch>
    );
  }
}

export default App;
