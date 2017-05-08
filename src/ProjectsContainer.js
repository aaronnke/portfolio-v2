import React, { Component } from 'react';
import Container from './Container';
import SplitPane from './SplitPane';
import './css/projects_container.css';

const ProjectLeft = props => {
  return (
    <div>
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
