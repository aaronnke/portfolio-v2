import React, { Component } from 'react';
import Container from './Container';
import SplitPane from './SplitPane';
import './about_container.css';

const AboutGraphic = props => {
  return (
    <div className='background--blue'>
    </div>
  )
}

const TextSection = props => {
  return (
    <div className='text-section'>
      <h3 className='text-section__title'>
        {props.title}
      </h3>
      {props.children}
    </div>
  )
}

const AboutText = props => {
  return (
    <div className=''>
      <TextSection title="I'm a web developer based in Singapore.">
      <p className='text-section__description'>
        Moved here somewhat recently due to work.
      </p>
      </TextSection>
    </div>
  )
}

class AboutContainer extends Component {
  render() {
    return (
      <Container>
        <SplitPane
        left={
          <AboutGraphic/>
        }
        right={
          <AboutText/>
        } />
      </Container>
    )
  }
}

export default AboutContainer;
