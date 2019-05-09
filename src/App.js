import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home';
import User from './components/User';
import About from './components/About';

export default function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/:id" component={User} /> */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}