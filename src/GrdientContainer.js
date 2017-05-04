import React, { Component } from 'react';
import WorkContainer from './WorkContainer';

class GrdientContainer extends Component {
  render() {
    return (
      <WorkContainer
        flipsides={true}
        company="GrdientHQ"
        website="https://app.grdient.com"
        images={['grdient_course.png', 'grdient_home.png', 'grdient_lesson.png', 'grdient_profile.png', 'grdient_achievement.png']}
        stories={[{title: "Project",
                  text: "GrdientHQ (under Grdient) is LinkedIn meets Coursera for startups. Find mentors, meet startup people, and take courses."},
                {title: "Role:",
                  text: "Web developer, 2nd hire. Pair programming with tech lead."},
                {title: "Tasks:",
                  points: ["Co-developing entire web app in Rails 5",
                          "Design and implementation of the front-end (lead)",
                          "Deploying new core features like course / lesson flow",
                          "Database design (clean structure and performant migrations)",
                          "Unit and integration tests (capybara)",
                          "Responsive design, it's also a PWA!"
                          ]},
                {title: "Achievements:",
                  points: ["Revamped entire GrdientHQ website design. Examples on left.",
                          "Implemented several key features like course / lesson rendering, completion, tracking.",
                          "Gamified app with achievements, badges, and stats.",
                          "Deployed a new staging server on EC2 and maintaining it.",
                          ]},
                ]}
      />
    )
  }
}

export default GrdientContainer;
