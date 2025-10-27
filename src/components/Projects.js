import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Know Your Body": {
        title: "Know Your Body",
        desc:
          "Interactive 3D symptom-mapping tool with a decision-tree engine for pre‑consultation triage.",
        techStack: "Three.js • Flask • MongoDB",
        link: "",
        open: "",
        image: "/assets/KyB.png"
      },
      "Dragonsframe (1)": {
        title: "Dragonsframe",
        desc:
          "Drexel-only social platform with 4,500+ course channels, roommate listings, club boards, and DMs.",
        techStack: "Express.js • Prisma • PostgreSQL • Clerk • Railway",
        link: "https://github.com/soyhugo/Dragonsframe",
        open: "",
        image: "/assets/Dragonsframe1.png"
      },
      "Calorie Calculator": {
        title: "Calorie Calculator",
        desc: "Simple web tool to calculate daily calorie needs.",
        techStack: "JavaScript • HTML • CSS",
        link: "https://github.com/soyhugo/Calorie_Calculator_Webtool",
        open: "",
        image: "/assets/CalorieCalc.png"
      },
      "Dragonsframe (2)": {
        title: "Dragonsframe",
        desc:
          "Drexel-only social platform with 4,500+ course channels, roommate listings, club boards, and DMs.",
        techStack: "Express.js • Prisma • PostgreSQL • Clerk • Railway",
        link: "https://github.com/soyhugo/Dragonsframe",
        open: "",
        image: "/assets/Dragonsframe2.png"
      }
    };
    const projects = {
      "Calorie Calculator Webtool": {
        desc:
          "Simple web tool to calculate daily calorie needs.",
        techStack: "JavaScript • HTML • CSS",
        link: "https://github.com/soyhugo/Calorie_Calculator_Webtool",
        open: ""
      },
      "Dragonsframe": {
        desc:
          "Drexel-only social platform with 4,500+ course channels, roommate listings, club boards, and DMs.",
        techStack: "Express.js • Prisma • PostgreSQL • Clerk • Railway",
        link: "https://github.com/soyhugo/Dragonsframe",
        open: ""
      },
      "LeetCode Solutions": {
        desc:
          "Selected LeetCode solutions (not all).",
        techStack: "Algorithms • Data Structures",
        link: "https://github.com/soyhugo/Leetcode-Solutions",
        open: ""
      },
      "Secretary Scheduler": {
        desc:
          "Flask + React tool with clean API routes, consistent data schemas, and full-stack JSON debugging.",
        techStack: "Flask • React • GitLab • Agile",
        link: "",
        open: ""
      },
      "Drone Communication Research": {
        desc:
          "Benchmarked 4G, Wi‑Fi, LoRa, XBee (DigiMesh), and UHF for reliable drone ops; selected 4G.",
        techStack: "Networking • Embedded Comms • Experimentation",
        link: "",
        open: ""
      },
      "Course Tools & Utilities": {
        desc:
          "Assorted academic utilities and small tools focused on learning systems and productivity.",
        techStack: "Python • Java • C • JavaScript",
        link: "",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={key}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>{spotlightProjects[key]["desc"]}</p>
                  <div className="techStack">{spotlightProjects[key]["techStack"]}</div>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <li key={key} className="projects-card">
                <FadeInSection delay={`${i + 1}00ms`}>
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </FadeInSection>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
