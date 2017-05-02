import React, { Component } from 'react';
import Container from './Container';
import SplitPane from './SplitPane';
import './css/about_container.css';

const AboutLeft = props => {
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

const AboutRight = props => {
  return (
    <div className=''>
      <TextSection title="I'm a web developer based in Singapore.">
        <p className='text-section__description'>
          Moved here somewhat recently due to work.
        </p>
      </TextSection>
      <TextSection title="My skills include:">
        <div className='chip-container'>
          <div className='chip'>
            <img src='ruby.png' className='chip__icon' alt='ruby'/>
            <span className='chip__text'> Ruby </span>
          </div>
        </div>
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
          <AboutLeft/>
        }
        right={
          <AboutRight/>
        } />
      </Container>
    )
  }
}

export default AboutContainer;
