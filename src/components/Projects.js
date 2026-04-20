import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchRoundedIcon from "@material-ui/icons/LaunchRounded";
import FadeInSection from "./FadeInSection";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  render() {
    const featured = {
      title: "Know Your Body",
      tagline: "Latest release",
      desc:
        "Free, AI-powered 3D symptom checker. Point to where it hurts on an interactive body model, answer a few questions, and get plain-language likely causes — built to demystify health info before a doctor's visit.",
      techStack: ["Three.js", "Flask", "MongoDB", "AI"],
      live: "https://know-your-body.com",
      github: "",
      images: [
        { src: "/assets/kyb-about.png", alt: "Know Your Body — Health information, made human" },
        { src: "/assets/kyb-app.png", alt: "Know Your Body — Interactive 3D symptom picker" },
        { src: "/assets/kyb-analysis.png", alt: "Know Your Body — Analysis results" }
      ],
      status: "live"
    };

    const spotlight = [
      {
        title: "Dragonsframe",
        desc:
          "Drexel-only social platform with 4,500+ course channels, roommate listings, club boards, and DMs.",
        techStack: "Express.js • Prisma • PostgreSQL • Clerk • Railway",
        link: "https://github.com/soyhugo/Dragonsframe",
        open: "",
        image: "/assets/Dragonsframe1.png"
      },
      {
        title: "Dragonsframe — Course channels",
        desc:
          "Per-course channels, subject filters, and threaded discussion to help students find classmates fast.",
        techStack: "Express.js • Prisma • PostgreSQL",
        link: "https://github.com/soyhugo/Dragonsframe",
        open: "",
        image: "/assets/Dragonsframe2.png"
      },
      {
        title: "Calorie Calculator",
        desc: "Simple web tool to calculate daily calorie needs.",
        techStack: "JavaScript • HTML • CSS",
        link: "https://github.com/soyhugo/Calorie_Calculator_Webtool",
        open: "",
        image: "/assets/CalorieCalc.png"
      }
    ];

    const projects = {
      "Calorie Calculator Webtool": {
        desc: "Simple web tool to calculate daily calorie needs.",
        techStack: "JavaScript • HTML • CSS",
        link: "https://github.com/soyhugo/Calorie_Calculator_Webtool",
        open: ""
      },
      Dragonsframe: {
        desc:
          "Drexel-only social platform with 4,500+ course channels, roommate listings, club boards, and DMs.",
        techStack: "Express.js • Prisma • PostgreSQL • Clerk • Railway",
        link: "https://github.com/soyhugo/Dragonsframe",
        open: ""
      },
      "LeetCode Solutions": {
        desc: "Selected LeetCode solutions (not all).",
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
          "Benchmarked 4G, Wi-Fi, LoRa, XBee (DigiMesh), and UHF for reliable drone ops; selected 4G.",
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
        <div className="section-header">
          <span className="section-title">/ projects</span>
        </div>

        <FadeInSection>
          <article className="featured-card">
            <div className="featured-media">
              <Carousel
                className="featured-carousel"
                interval={4500}
                indicators={true}
                controls={false}
                pause="hover"
                fade
              >
                {featured.images.map(img => (
                  <Carousel.Item key={img.src}>
                    <img src={img.src} alt={img.alt} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="featured-body">
              <div className="featured-kicker">
                {featured.status === "live" && (
                  <span className="live-dot" aria-hidden="true" />
                )}
                <span>{featured.tagline}</span>
              </div>
              <h3 className="featured-title">{featured.title}</h3>
              <p className="featured-desc">{featured.desc}</p>
              <ul className="chip-row">
                {featured.techStack.map(t => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
              <div className="featured-actions">
                {featured.live && (
                  <a
                    className="btn btn-primary"
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LaunchRoundedIcon style={{ fontSize: 18 }} />
                    <span>Visit site</span>
                  </a>
                )}
                {featured.github && (
                  <a
                    className="btn btn-ghost"
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon style={{ fontSize: 18 }} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        </FadeInSection>

        <div className="spotlight-wrap">
          <Carousel interval={null} indicators={true} controls={true}>
            {spotlight.map(item => (
              <Carousel.Item key={item.title}>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt={item.title}
                />
                <div className="caption-bg">
                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <div className="techStack">{item.techStack}</div>
                    <ExternalLinks
                      githubLink={item.link}
                      openLink={item.open}
                    />
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <li key={key} className="projects-card">
                <FadeInSection delay={`${i + 1}00ms`}>
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    />
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
