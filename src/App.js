import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';


import Page from './components/Page';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Page />
        </div>
      </Router>
    );
  }
}

export default App;
