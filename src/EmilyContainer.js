import React, { Component } from 'react';
import WorkContainer from './WorkContainer';

class EmilyContainer extends Component {
  render() {
    return (
      <WorkContainer
        flipsides={true}
        company="Meet Emily"
        website="https://meetemily.grdient.com"
        images={['emily_calibration.png', 'emily_question.png', 'emily_loader.png', 'emily_results.png']}
        stories={[{title: "Project",
                  text: "Meet Emily (under Grdient) is (going to be) your AI-powered, on-demand interview trainer. Start a session anytime, answer as if you're in an actual interview, and get question-by-question feedback."},
                {title: "Role:",
                  text: "Sole developer (for now)."},
                {title: "Tasks:",
                  points: ["Everything. Models, Views, Controllers, and everything in between",
                          "Website UX / UI (granted, it doesn't look amazing - will work on looks soon!)",
                          "Adding video recording (async), emotion snapshots, evaluations (entirely inaccurate currently)",
                          "Setting up Elastic Beanstalk + RDS + ElastiCache + S3 + Route53",
                          ]},
                {title: "Achievements:",
                  points: ["Integrated various API's for facial and speech analysis",
                          "UJS-ed most of it",
                          "Adding an async video recorder",
                          "Played a lot with Action Cable, but the feature(1-to-1 interview training) was scrapped",
                          ]},
                ]}
      />
    )
  }
}

export default EmilyContainer;
