import React, { Component } from 'react';
import Container from './Container';
import SplitPane from './SplitPane';
import './css/work_container.css';

class WorkLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: 'grdient_course.png'
    }
  }
  componentDidMount() {
    let screens = ['grdient_course.png', 'grdient_home.png', 'grdient_lesson.png'];
    let index = 0;
    this.interval = window.setInterval(() => {
      index > 1 ? index = 0 : index++;
      this.setState(() => {
        return {
          screen: screens[index]
        }
      })
    }, 3000)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return (
      <div className='background--red'>
        <div className='laptop'>
        <img src={this.state.screen} className='laptop__screen' alt='screen' />
        </div>
      </div>
    )
  }
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

const WorkRight = props => {
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

class WorkContainer extends Component {
  render() {
    return (
      <Container>
        <SplitPane
        left={
          <WorkLeft/>
        }
        right={
          <WorkRight/>
        } />
      </Container>
    )
  }
}

export default WorkContainer;
