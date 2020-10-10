import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import Sliders from './components/Sliders';
import './App.css';

export default function App() {
  return (
    <React.Fragment>
      <Navigationbar />
      <Router>
        <Switch>
          <Route path='/about'>
           <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/Sliders'>
            <Sliders />
          </Route>
          <Route path-='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

