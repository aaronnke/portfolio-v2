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
      index >= screens.length - 1 ? index = 0 : index++;
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
        <a className='company-name' href={this.props.website} target="_blank" >{this.props.company}</a>
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
      {props.text &&
        <p className='work-section__text'>
          {props.text}
        </p>
      }
      {props.points &&
        <ul className="work-section__points">
          {props.points.map((point, index) => {
            return (
              <li className='work-section__point' key={index}>
                {point}
              </li>
            )
          })}
        </ul>
      }

    </div>
  )
}

const WorkRight = props => {
  return (
    <div>
      {props.stories.map((story, index) => {
        return (
          <WorkSection key={index} title={story['title']} text={story['text']} points={story['points']} />
        )
      })}
    </div>
  )
}

class WorkContainer extends Component {
  render() {
    let leftItem = null;
    let rightItem = null;

    if (this.props.flipsides) {
      leftItem = <WorkRight stories={this.props.stories} />
      rightItem = <WorkLeft company={this.props.company} website={this.props.website} images={this.props.images} />
    }
    else {
      leftItem = <WorkLeft company={this.props.company} website={this.props.website} images={this.props.images} />
      rightItem = <WorkRight stories={this.props.stories} />
    }
    return (
      <Container>
        <SplitPane
        left={leftItem}
        right={rightItem} />
      </Container>
    )
  }
}

export default WorkContainer;
