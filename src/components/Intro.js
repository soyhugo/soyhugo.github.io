import React from "react";

import "../styles/Intro.css";
import TypewriterText from "./TypewriterText";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import Donut from "./Donut";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <section id="intro" className="hero container">
        <div className="hero-content">
          <div className="hero-left ascii">
            <Donut />
          </div>
          <div className="hero-right copy">
            <h1 className="hero-title">
              <TypewriterText />
            </h1>
            <FadeInSection>
              <div className="hero-sub">
                I'm Hugo Lopez Garcia, a Spanish computer science student at Drexel
                University (Philadelphia, PA), pursuing a BS in Computer Science
                with Software Engineering and AI/ML concentrations ('28).
                I care about building products people actually use: practical,
                reliable, and a little bit personal.
                
              </div>
              <a
                href="mailto:hugolopezgarcia2005@gmail.com"
                className="cta"
              >
                <EmailRoundedIcon></EmailRoundedIcon>
                {" Say hi!"}
              </a>
            </FadeInSection>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
