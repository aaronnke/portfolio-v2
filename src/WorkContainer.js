import React, { Component } from 'react';
import Container from './Container';
import SplitPane from './SplitPane';
import './css/work_container.css';

class WorkLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: this.props.images[0]
    }
  }
  componentDidMount() {
    let screens = this.props.images;
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
        <h6 className='section-title'>WORK</h6>
        <div className='laptop-container'>
          <div className='laptop'>
          </div>
          <div style={{backgroundImage: 'url(' + this.state.screen + ')'}} className='laptop__screen'>
          </div>
        </div>
        <h3 className='company-name'>{this.props.company}</h3>
      </div>
    )
  }
}

const WorkSection = props => {
  return (
    <div className='work-section'>
      <h3 className='work-section__title'>
        {props.title}
      </h3>
      <p className='work-section__description'>
        {props.text}
      </p>
    </div>
  )
}

const WorkRight = props => {
  return (
    <div>
      <WorkSection
        title="My role:"
        text="Web developer."
      />
      <WorkSection
        title="My tasks:"
        text="When I came in I did pair programming with a senior"
      />
      <WorkSection
        title="My role:"
        text="Web developer."
      />
    </div>
  )
}

class WorkContainer extends Component {
  render() {
    return (
      <Container>
        <SplitPane
        left={
          <WorkLeft company={this.props.company} images={this.props.images}/>
        }
        right={
          <WorkRight/>
        } />
      </Container>
    )
  }
}

export default WorkContainer;
