import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import Header from './Header';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <main className="main">
            <div className="container-fluid">
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Full;
