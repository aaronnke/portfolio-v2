import React, { Component } from 'react';
import IntroContainer from './IntroContainer';
import AboutContainer from './AboutContainer';
import GrdientContainer from './GrdientContainer';
import IntuteContainer from './IntuteContainer';
import EmilyContainer from './EmilyContainer';
import LSOContainer from './LSOContainer';
import ProjectsContainer from './ProjectsContainer';
import ContactContainer from './ContactContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolling: false,
      prevHeight: 0,
      pageHeight: window.innerHeight
    }

    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleWorkClick = this.handleWorkClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
  }

  scrollToward(scrollDestination, scrollDuration) {
    if (!this.state.isScrolling && Math.abs(window.pageYOffset - this.state.prevHeight) > 20) {
      this.setState(() => {
        return {
          isScrolling: true,
        }
      })
    }
    var scrollStep = (scrollDestination - window.scrollY) / (scrollDuration / 25);
    var scrollInterval = setInterval(() => {
      let scrollY = window.scrollY;
      if ( scrollY !== scrollDestination ) {
        if ((scrollStep > 0 && scrollY > scrollDestination - 100)
            || (scrollStep < 0 && scrollY < scrollDestination + 100)) {
          window.scroll(0, scrollDestination);
          clearInterval(scrollInterval);
          this.setState(() => {
            return {
              isScrolling: false,
              prevHeight: scrollDestination
            }
          })
        }
        else {
          let miniScroll = scrollY + scrollStep;
          window.scroll(0, miniScroll);
        }
      }
      else {
        clearInterval(scrollInterval);
        this.setState(() => {
          return {
            isScrolling: false,
            prevHeight: scrollDestination
          }
        })
      }
    }, 25);
  }

  handleAboutClick() {
    this.scrollToward(this.state.pageHeight, 500);
  }

  handleWorkClick() {
    this.scrollToward(this.state.pageHeight*2, 500);
  }

  handleContactClick() {
    this.scrollToward(this.state.pageHeight*7, 500);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    const pageHeight = this.state.pageHeight;
    var timer;

    window.addEventListener('scroll', () => {
      if(timer) {
    		window.clearTimeout(timer);
    	}

    	timer = window.setTimeout(() => {
        let scrollHeight = window.pageYOffset;
        let prevHeight = this.state.prevHeight;

        if (scrollHeight < pageHeight && scrollHeight > prevHeight) {
          this.scrollToward(pageHeight, 500);
        }
        else if (scrollHeight < pageHeight && scrollHeight < prevHeight) {
          this.scrollToward(0, 500);
        }
        else if (scrollHeight < pageHeight*2 && scrollHeight > prevHeight) {
          this.scrollToward(pageHeight*2, 500);
        }
        else if (scrollHeight < pageHeight*2 && scrollHeight < prevHeight) {
          this.scrollToward(pageHeight, 500);
        }
        else if (scrollHeight < pageHeight*3 && scrollHeight > prevHeight) {
          this.scrollToward(pageHeight*3, 500);
        }
        else if (scrollHeight < pageHeight*3 && scrollHeight < prevHeight) {
          this.scrollToward(pageHeight*2, 500);
        }
        else if (scrollHeight < pageHeight*4 && scrollHeight > prevHeight) {
          this.scrollToward(pageHeight*4, 500);
        }
        else if (scrollHeight < pageHeight*4 && scrollHeight < prevHeight) {
          this.scrollToward(pageHeight*3, 500);
        }
        else if (scrollHeight < pageHeight*5 && scrollHeight > prevHeight) {
          this.scrollToward(pageHeight*5, 500);
        }
        else if (scrollHeight < pageHeight*5 && scrollHeight < prevHeight) {
          this.scrollToward(pageHeight*4, 500);
        }
        else if (scrollHeight < pageHeight*6 && scrollHeight > prevHeight) {
          this.scrollToward(pageHeight*6, 500);
        }
        else if (scrollHeight < pageHeight*6 && scrollHeight < prevHeight) {
          this.scrollToward(pageHeight*5, 500);
        }
        else if (scrollHeight < pageHeight*7 && scrollHeight > prevHeight) {
          this.scrollToward(pageHeight*7, 500);
        }
        else if (scrollHeight < pageHeight*7 && scrollHeight < prevHeight) {
          this.scrollToward(pageHeight*6, 500);
        }
    	}, 50);
    });
  }

  render() {
    return (
      <div className="app">
        <IntroContainer
          handleAboutClick={this.handleAboutClick}
          handleWorkClick={this.handleWorkClick}
          handleContactClick={this.handleContactClick}
        />
        <AboutContainer/>
        <GrdientContainer/>
        <IntuteContainer/>
        <EmilyContainer/>
        <LSOContainer/>
        <ProjectsContainer/>
        <ContactContainer/>
      </div>
    );
  }
}

export default App;
