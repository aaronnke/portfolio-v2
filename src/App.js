import React, { Component } from 'react';
import IntroContainer from './IntroContainer';
import AboutContainer from './AboutContainer';
import GrdientContainer from './GrdientContainer';
import IntuteContainer from './IntuteContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <IntroContainer/>
        <AboutContainer/>
        <GrdientContainer/>
        <IntuteContainer/>
      </div>
    );
  }
}

export default App;
