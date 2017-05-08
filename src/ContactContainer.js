import React, { Component } from 'react';
import Container from './Container';
import SplitPane from './SplitPane';
import './css/contact_container.css';

const ContactLeft = props => {
  return (
    <div className='background--green background--contact-left'>
      <div>
        <h6 className='contact-left__title'>CONTACT</h6>
      </div>
    </div>
  )
}

const ContactRight = props => {
  return (
    <div className='contact-right'>
      <div>
        <p className='contact-tagline contact-text'>If you want to collaborate on building something impactful,<br/> I'd love to hear from you.</p>
        <h3 className='contact-name contact-text'>Aaron Ng</h3>
        <h4 className='contact-position contact-text'>Web Developer</h4>
        <h5 className='contact-email contact-text'>aaronnke@gmail.com</h5>
      </div>
    </div>
  )
}

class ContactContainer extends Component {
  render() {
    return (
      <Container>
        <SplitPane
        left={
          <ContactLeft/>
        }
        right={
          <ContactRight/>
        } />
      </Container>
    )
  }
}

export default ContactContainer;
