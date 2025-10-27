import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      imageIndex: 0
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  imgCandidates = [
    "/assets/hugo.jpg",
    "/assets/hugo.jpeg",
    "/assets/Hugo.jpg",
    "/assets/Hugo.jpeg",
    "/assets/hugo.JPG",
    "/assets/hugo.JPEG",
    "/assets/me2.jpg",
    "/assets/me.jpg"
  ];
  handleImgError = () => {
    this.setState(prev => ({
      imageIndex: Math.min(prev.imageIndex + 1, this.imgCandidates.length - 1)
    }));
  };
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
          <>
            <p>
              I’m <b>Hugo Lopez Garcia</b>, a Spanish computer science student at
              <a href="https://drexel.edu"> Drexel University</a> (Philadelphia, PA),
              expected to graduate in <b>June 2028</b>. I’m concentrating in
              <b> Software Engineering</b> and <b>AI/ML</b> and I love building products that
              people actually use.
            </p>
            <p>
              At Drexel, I’ve completed coursework in Advanced Programming Tools and
              Techniques, Data Structures, Discrete Mathematics, Digital Logic
              Design, Systems Programming, Linear Algebra, and Multivariate Calculus.
            </p>
            <p>
              I’m active in communities like <b>Drexel AI</b>, the
              <b> Society of Hispanic Professional Engineers</b>, and <b>ColorStack</b>, 
              connecting with peers who share the same drive for innovation and
              representation in tech.
            </p>
          </>
    );
    const two = (
          <p>
            I’m the kind of developer who gets energy from shipping, turning ideas
            into tools that make everyday workflows simpler for students,
            communities, and small businesses.
          </p>
    );

    const tech_stack = [
          // Languages
          "Python",
          "Java",
          "C",
          "JavaScript",
          "Racket",
          // Frameworks & Tools
          "React.js",
          "Flask",
          "Express.js",
          "Three.js",
          "Prisma",
          "Pandas",
          "NumPy",
          "TensorFlow",
          "MongoDB",
          "PostgreSQL",
          "GitHub / GitLab",
          "n8n",
          "JSON APIs"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {one}
                  {"Here are some technologies I’ve been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <li key={tech_item}>
                      <FadeInSection delay={`${i + 1}00ms`}>
                        <span>{tech_item}</span>
                      </FadeInSection>
                    </li>
                  );
                })}
              </ul>
              {two}
            </div>
    <div className="about-image">
      <img
        alt="Hugo Lopez Garcia"
        src={`${this.imgCandidates[this.state.imageIndex]}?v=2`}
        onError={this.handleImgError}
      />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
