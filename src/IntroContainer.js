import React, { Component } from 'react';
import Container from './Container';
import './css/intro_container.css';

const ProfilePhoto = props => {
  return (
    <div className='intro__container'>
      <img src='display_photo.png' className='intro-photo' alt='Aaron' />
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
      <h3 className='intro-tagline'>
        I'm Aaron Ng, <br /> a web developer who loves {this.state.text}
      </h3>
    )
  }
}

class IntroContainer extends Component {
  render() {
    return (
      <Container>
        <div className='intro'>
          <ProfilePhoto />
          <Tagline options={['Ruby.', 'Rails.', 'React.', 'JavaScript.', 'Material.', '@dhh.', 'Elon Musk.', 'exploring.', 'learning.']} />
        </div>
      </Container>
    )
  }
}

export default IntroContainer;
