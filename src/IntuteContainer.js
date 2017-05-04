import React, { Component } from 'react';
import WorkContainer from './WorkContainer';

class IntuteContainer extends Component {
  render() {
    return (
      <WorkContainer
        company="Intute"
        website="https://intute.co"
        images={['intute_topics.png', 'intute_sets.png', 'intute_question.png', 'intute_complete.png']}
        stories={[{title: "Project",
                  text: "Intute is an intelligent math tutor, built on mastery through personalized practice. Practice sets get generated based on past performance, ensuring progressive and complete topical mastery. Current focus is Singapore P1-P6 Maths."},
                {title: "Role:",
                  text: "Co-founder and programmer."},
                {title: "Tasks:",
                  points: ["Product and business idea",
                          "Translating a super rough designer sketch into a working web app mockup and flow",
                          "Student-side front-end code",
                          "Rolling out features like recommended practice sets",
                          ]},
                {title: "Achievements:",
                  points: ["Experimental porting to React using Rails 5.1 webpacker",
                          "Implementing BEM for CSS",
                          "Introducing the weighted algorithm for practice question generation",
                          "Adding a mascot to make things fun!",
                          ]},
                ]}
      />
    )
  }
}

export default IntuteContainer;
