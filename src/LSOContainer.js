import React, { Component } from 'react';
import WorkContainer from './WorkContainer';

class LSOContainer extends Component {
  render() {
    return (
      <WorkContainer
        company="Lemonade Stand Online"
        website="https://lso-staging.herokuapp.com"
        images={['lso_module.png', 'lso_multichoice.png', 'lso_truefalse.png', 'lso_content.png', 'lso_finish.png']}
        stories={[{title: "Project",
                  text: "Lemonade Stand Online is a client project under On the Line Digital (dev house)."},
                {title: "Role:",
                  text: "Lead front-end developer, remote."},
                {title: "Tasks:",
                  points: ["Translating client's designer mockups (sketch file) into real web pages, purpose built for iPad.",
                          "Ensuring pixel perfect reproduction",
                          "Giving feedback for mockups based on web practicalities",
                          "Co-ordinating remotely with other developers, code reviewing each other",
                          ]},
                {title: "Achievements:",
                  points: ["Delivery way ahead of schedule, even when ad hoc design changes are made (after freezing, too)",
                          "Setup highly reusable templates and classes, contributing to clean code",
                          "Added a resizer for video (responsive CSS, height-clipping JS for short screens). Simple, but neat!",
                          ]},
                ]}
      />
    )
  }
}

export default LSOContainer;
