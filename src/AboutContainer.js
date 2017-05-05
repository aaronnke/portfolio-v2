import React, { Component } from 'react';
import Container from './Container';
import SplitPane from './SplitPane';
import './css/about_container.css';

const AboutLeft = props => {
  return (
    <div className='background--blue'>
      <h6 className='section-title'>ABOUT</h6>
    </div>
  )
}

const AboutSection = props => {
  return (
    <div className='about-section'>
      <h3 className='about-section__title'>
        {props.title}
      </h3>
      {props.children}
    </div>
  )
}

const Tile = props => {
  return (
    <div className='tile'>
      <img src={props.image} className='tile__icon' alt={props.name}/>
      <p className='tile__name'> {props.name} </p>
    </div>
  )
}

const AboutRight = props => {
  return (
    <div className=''>
      <AboutSection title="I'm a web developer based in Singapore.">
        <p className='about-section__text'>
          Moved here somewhat recently due to work. Full stack. Rails, but willing to pick up new language / frameworks too. Especially since learning the powers of React.
        </p>
      </AboutSection>
      <AboutSection title="I'm looking to:">
        <p className='about-section__text'>
          Help push the world forward. Write (and learn to write) clean, scalable code using modern technologies. Pick up new things, move fast, work hard.
        </p>
      </AboutSection>
      <AboutSection title="I know these things:">
        <div className='tile-container'>
          <Tile image='ruby.png' name='Ruby'/>
          <Tile image='rails.png' name='Rails'/>
          <Tile image='html.png' name='HTML'/>
          <Tile image='scss.png' name='SCSS'/>
          <Tile image='javascript.png' name='JavaScript'/>
          <Tile image='react.png' name='React'/>
          <Tile image='python.png' name='Python'/>
          <Tile image='aws.png' name='AWS'/>
        </div>
      </AboutSection>
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
