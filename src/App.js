import React, { Component } from 'react';
import IntroContainer from './IntroContainer';
import AboutContainer from './AboutContainer';
import WorkContainer from './WorkContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <IntroContainer/>
        <AboutContainer/>
        <WorkContainer/>
      </div>
    );
  }
}

export default App;
