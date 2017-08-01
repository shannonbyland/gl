import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
//import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </div>
)

export default App;
