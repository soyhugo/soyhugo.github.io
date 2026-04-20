import React from "react";

import "../styles/Intro.css";
import TypewriterText from "./TypewriterText";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LaunchRoundedIcon from "@material-ui/icons/LaunchRounded";
import FadeInSection from "./FadeInSection";
import Donut from "./Donut";

class Intro extends React.Component {
  render() {
    return (
      <section id="intro" className="hero container">
        <div className="hero-content">
          <div className="hero-left ascii">
            <Donut />
          </div>
          <div className="hero-right copy">
            <div className="hero-kicker">
              <span className="live-dot" aria-hidden="true" />
              <span>Currently shipping</span>
            </div>
            <h1 className="hero-title">
              <TypewriterText />
            </h1>
            <FadeInSection>
              <div className="hero-sub">
                I'm Hugo Lopez Garcia, a Spanish computer science student at
                Drexel University (Philadelphia, PA), pursuing a BS in
                Computer Science with Software Engineering and AI/ML
                concentrations ('28). I care about building products people
                actually use: practical, reliable, and a little bit personal.
              </div>
              <div className="hero-actions">
                <a href="mailto:hugolopezgarcia2005@gmail.com" className="cta">
                  <EmailRoundedIcon style={{ fontSize: 18 }} />
                  <span>Say hi!</span>
                </a>
                <a
                  href="https://know-your-body.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-ghost"
                >
                  <LaunchRoundedIcon style={{ fontSize: 16 }} />
                  <span>Latest: know-your-body.com</span>
                </a>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
