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
  componentDidMount() {
    const pageHeight = window.innerHeight;
    var isScrolling = false;
    var prevHeight = 0;

    function scrollToward(scrollDestination, scrollDuration) {
      var scrollStep = (scrollDestination - window.scrollY) / (scrollDuration / 25);
      var scrollInterval = setInterval(() => {
        let scrollY = window.scrollY;
        if ( scrollY !== scrollDestination ) {
          let miniScroll = scrollY + scrollStep;
          window.scroll(0, miniScroll);

          if ((scrollStep > 0 && scrollY > scrollDestination - 100)
              || (scrollStep < 0 && scrollY < scrollDestination + 100)) {
            window.scroll(0, scrollDestination);
          }
        }
        else {
          isScrolling = false;
          clearInterval(scrollInterval);
        }
      }, 25);
    }

    var timer;

    window.addEventListener('scroll', function(e) {
      if(timer) {
    		window.clearTimeout(timer);
    	}

    	timer = window.setTimeout(function() {
        if (!isScrolling && Math.abs(window.pageYOffset - prevHeight) > 50) {
          isScrolling = true;
          let scrollHeight = window.pageYOffset;

          if (scrollHeight < pageHeight && scrollHeight > prevHeight) {
            scrollToward(pageHeight, 500);
            prevHeight = pageHeight;

          }
          else if (scrollHeight < pageHeight && scrollHeight < prevHeight) {
            scrollToward(0, 500);
            prevHeight = 0;
          }
          else if (scrollHeight < pageHeight*2 && scrollHeight > prevHeight) {
            scrollToward(pageHeight*2, 500);
            prevHeight = pageHeight*2;
          }
          else if (scrollHeight < pageHeight*2 && scrollHeight < prevHeight) {
            scrollToward(pageHeight, 500);
            prevHeight = pageHeight;
          }
          else if (scrollHeight < pageHeight*3 && scrollHeight > prevHeight) {
            scrollToward(pageHeight*3, 500);
            prevHeight = pageHeight*3;
          }
          else if (scrollHeight < pageHeight*3 && scrollHeight < prevHeight) {
            scrollToward(pageHeight*2, 500);
            prevHeight = pageHeight*2;
          }
          else if (scrollHeight < pageHeight*4 && scrollHeight > prevHeight) {
            scrollToward(pageHeight*4, 500);
            prevHeight = pageHeight*4;
          }
          else if (scrollHeight < pageHeight*4 && scrollHeight < prevHeight) {
            scrollToward(pageHeight*3, 500);
            prevHeight = pageHeight*3;
          }
          else if (scrollHeight < pageHeight*5 && scrollHeight > prevHeight) {
            scrollToward(pageHeight*5, 500);
            prevHeight = pageHeight*5;
          }
          else if (scrollHeight < pageHeight*5 && scrollHeight < prevHeight) {
            scrollToward(pageHeight*4, 500);
            prevHeight = pageHeight*4;
          }
          else if (scrollHeight < pageHeight*6 && scrollHeight > prevHeight) {
            scrollToward(pageHeight*6, 500);
            prevHeight = pageHeight*6;
          }
          else if (scrollHeight < pageHeight*6 && scrollHeight < prevHeight) {
            scrollToward(pageHeight*5, 500);
            prevHeight = pageHeight*5;
          }
          else if (scrollHeight < pageHeight*7 && scrollHeight > prevHeight) {
            scrollToward(pageHeight*7, 500);
            prevHeight = pageHeight*7;
          }
          else if (scrollHeight < pageHeight*7 && scrollHeight < prevHeight) {
            scrollToward(pageHeight*6, 500);
            prevHeight = pageHeight*6;
          }
          else {
            isScrolling = false;
          }
        }
    	}, 50);
    });

  }
  render() {
    return (
      <div className="app">
        <IntroContainer/>
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
