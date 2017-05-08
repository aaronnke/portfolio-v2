import React, { Component } from 'react';
import IntroContainer from './IntroContainer';
import AboutContainer from './AboutContainer';
import GrdientContainer from './GrdientContainer';
import IntuteContainer from './IntuteContainer';
import EmilyContainer from './EmilyContainer';
import LSOContainer from './LSOContainer';
import ProjectsContainer from './ProjectsContainer';
import ContactContainer from './ContactContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <IntroContainer/>
        <AboutContainer/>
        <GrdientContainer/>
        <IntuteContainer/>
        <EmilyContainer/>
        <LSOContainer/>
        <ProjectsContainer/>
        <ContactContainer/>
      </div>
    );
  }
}

export default App;
