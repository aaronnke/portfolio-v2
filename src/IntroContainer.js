import React, { Component } from 'react';
import Container from './Container';
import './css/intro_container.css';

const ProfilePhoto = props => {
  return (
    <div>
      <div className='IntroPhotoSpinner'></div>
      <div className='IntroPhoto'></div>
    </div>
  )
}

class Tagline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }
  componentDidMount() {
    let options = this.props.options;
    let index = -1;
    let subIndex = 1;
    let isForward = true;
    let timerCount = 0;
    this.interval = window.setInterval(() => {
      if (options.includes(this.state.text)) {
        if (timerCount > 3) {
          timerCount = 0;
          isForward = false;
          this.setState(() => {
            return {
              text: options[index].substr(0, subIndex - 1)
            }
          })
        }
        else {
          timerCount++;
        }
      }
      else if (this.state.text === '') {
        index >= options.length - 1 ? index = 0 : index++;
        isForward = true;
        subIndex = 1;
        this.setState(() => {
          return {
            text: options[index][0]
          }
        })
      }
      else {
        isForward ? subIndex++ : subIndex--;
        this.setState(() => {
          return {
            text: options[index].substr(0, subIndex)
          }
        })
      }
    }, 100)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <h3 className='IntroTagline IntroTagline--center'>
          Hello. I'm Aaron Ng,
        </h3>
        <h3 className='IntroTagline'>
          a web developer who loves {this.state.text}
        </h3>
      </div>
    )
  }
}

const Navigator = props => {
  return (
    <div className='Navigator'>
      <span className='Navigator__item' onClick={props.handleAboutClick}> ABOUT </span>
      <span className='Navigator__filler'>/</span>
      <span className='Navigator__item' onClick={props.handleWorkClick}> WORK </span>
      <span className='Navigator__filler'>/</span>
      <span className='Navigator__item' onClick={props.handleContactClick}> CONTACT </span>
    </div>
  )
}

class IntroContainer extends Component {
  render() {
    return (
      <Container>
        <div className='Intro'>
          <div className='Intro__container'>
            <div className='Intro__photo-container'>
              <ProfilePhoto />
            </div>
            <div className='Intro__text-container'>
              <Tagline options={['Ruby.', 'Rails.', 'React.', 'JavaScript.', 'Material.', '@dhh.', 'Musk.', 'moonshots.', 'learning.']} />
            </div>
          </div>
          <Navigator
            handleAboutClick={this.props.handleAboutClick}
            handleWorkClick={this.props.handleWorkClick}
            handleContactClick={this.props.handleContactClick}
          />
        </div>
      </Container>
    )
  }
}

export default IntroContainer;
