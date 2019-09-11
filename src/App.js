import React, { Component } from 'react';

import Layout from './components/layout';
import NavigationBar from './components/navigationBar';
import TesteNavBar from './components/teste';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TesteNavBar />
        <Layout>
        </Layout>
      </React.Fragment>
    );
  }
}

