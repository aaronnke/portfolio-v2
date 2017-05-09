import React, { Component } from 'react';
import Container from './Container';
import SplitPane from './SplitPane';
import './css/projects_container.css';

const ProjectLeft = props => {
  return (
    <div className='ProjectLeft'>
      <div className='ProjectLeft__wrapper'>
        <div className='GameContainer'>
          <div className='GameContainer__column GameContainer__column--image'>
            <img src='checkers.png' className='GameContainer__image' alt='checkers' />
          </div>
          <div className='GameContainer__column GameContainer__column--textbox'>
            <div className='GameContainer__textbox'>
              <h3 className='GameContainer__title'><a href='https://minimax-checkers.herokuapp.com' target='_blank'> Checkers (minimax) </a></h3>
              <p className='GameContainer__tagline'>A simple AI-powered checkers web-app.</p>
              <ul className='GameContainer__list'>
                <li>Minimax algorithm, with an amateur static evaluation function.</li>
                <li>Ability to eat (you must eat if you can) and do combo moves.</li>
                <li>Can become King, with reverse moves.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='GameContainer'>
          <img src='snake.png' className='GameContainer__image' alt='snake' />
          <div className='GameContainer__textbox'>
            <h3 className='GameContainer__title'><a href='https://nokiasnake.herokuapp.com' target='_blank'> Snake </a></h3>
            <p className='GameContainer__tagline'>Classic Nokia Snake game, redone for the web with Javascript.</p>
            <ul className='GameContainer__list'>
              <li>Can eat food and grow.</li>
              <li>Collide into wall or body and die.</li>
              <li>Super food every 10th normal food for bonus points.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectRight = props => {
  return (
    <div className='background--green background--projects-right'>
      <div>
        <h6 className='projects-right__title'>PROJECTS</h6>
      </div>
    </div>
  )
}

class ProjectsContainer extends Component {
  render() {
    return (
      <Container>
        <SplitPane
        left={
          <ProjectLeft/>
        }
        right={
          <ProjectRight/>
        } />
      </Container>
    )
  }
}

export default ProjectsContainer;
