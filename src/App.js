import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Layout from './components/layout';
import NavigationBar from './components/navigationBar';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <BrowserRouter>
            <Switch>
              <Route path='/' exact={true} component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </BrowserRouter>
        </Layout>
      </React.Fragment>
    );
  }
}

