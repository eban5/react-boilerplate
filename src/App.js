import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Navigation from './components/Navigation';

class Home extends React.Component {
  render() {
    return <h1>HOME SCREEN</h1>
  }
}

class About extends React.Component {
  render() {
    return <h1>About Screen</h1>
  }
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </div>
  );
}

export default App;
