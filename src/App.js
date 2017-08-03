import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path="/clients" component={Clients} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/services" component={Services} />
      <Route path="/supporters" component={Supporters} /> */}
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;
