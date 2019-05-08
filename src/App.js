import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home';
import User from './components/User';


class About extends React.Component {
  render() {
    return <h1>About Screen</h1>
  }
}

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={User} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </div>
  );
}