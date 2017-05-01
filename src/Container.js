import React, { Component } from 'react';

class Container extends Component {
  render() {
    return (
      <section className='container'>
        {this.props.children}
      </section>
    )
  }
}

export default Container;
