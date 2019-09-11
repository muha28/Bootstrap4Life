import React, { Component } from 'react';

import Layout from './components/layout';
import NavigationBar from './components/navigationBar';
import TesteNavBar from './components/teste';
import {Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TesteNavBar />
        <Layout>
          <div className="content">
            <Route path='/' exact={true} component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

