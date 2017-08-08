import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Clients from './components/Clients';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Supporters from './components/Supporters';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import FetchUser from './components/FetchUser';
import NoMatch from './components/NoMatch';

const App = () => (
  <div>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" render={ (props) => <Auth {...props} title="Register" /> } />
        <Route path="/login" render={ (props) => <Auth {...props} title="Login" /> } />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/clients" component={Clients} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/services" component={Services} />
        <Route path="/supporters" component={Supporters} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </div>
)

export default App;
