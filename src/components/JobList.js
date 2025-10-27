import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component="div">{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component="div">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Outlier AI": {
      jobTitle: "Freelance Developer @",
      duration: "JUN 2024 – PRESENT",
      desc: [
        "Evaluate and improve Large Language Models (LLMs) with rubric-based testing.",
        "Review GitHub pull requests for outsourced AI projects; run structured test workflows and validate results.",
        "Design and test prompts assessing logical consistency, visual accuracy, and runtime behavior in physics sims and code generation.",
        "Authored 50+ evaluations judging correctness and readability; collaborated to refine prompt wording for better performance."
      ]
    },
    "Drexel University": {
      jobTitle: "Events Technician @",
      duration: "SEP 2024 – PRESENT • Philadelphia, PA",
      desc: [
        "Set up and operated AV for panels, club meetings, and ceremonies across multiple campus venues.",
        "Supported 50+ events per quarter, collaborating with faculty and student organizations to ensure seamless execution.",
        "Built hybrid setups with Zoom and capture cards; diagnosed and resolved feedback, latency, and HDMI signal issues on site.",
        "Trained new technicians and documented setup procedures, improving setup speed and reliability across recurring spaces."
      ]
    },
    Dragonsframe: {
      jobTitle: "Founder & Software Developer @",
      duration: "AUG 2025 – PRESENT",
      desc: [
        "Building a Drexel-only social platform with 4,500+ course channels, roommate listings, club boards, and private messaging.",
        "Backend with Express + Prisma + PostgreSQL; authentication with Clerk; deployed on Railway.",
        "Focus on scalable database schemas, clean REST APIs, and growth-ready architecture."
      ]
    },
    "AI Assistants (Freelance)": {
      jobTitle: "AI Automation Developer @",
      duration: "AUG 2025 – PRESENT",
      desc: [
        "Design and deliver custom AI agents that automate email replies, scheduling, and client reminders.",
        "Built on n8n MCP servers with WhatsApp API integrations; reduced admin time ~50% for clients.",
        "Modular JSON-based workflows integrating Google Calendar, Gmail, client DBs, and CRMs."
      ]
    },
    "Know Your Body": {
      jobTitle: "Founder & Project Manager @",
      duration: "JUN 2024 – JUN 2025",
      desc: [
        "Interactive 3D symptom-mapping tool using Three.js to help users identify pain zones visually.",
        "Led an 8-person team; backend with Flask + MongoDB and a modern HTML/CSS + Three.js frontend.",
        "Designed a decision-tree engine for pre-consultation triage and accessible self-assessment."
      ]
    },
    "Drone Communication Research": {
      jobTitle: "Research student – Drexel University VIP @",
      duration: "OCT 2024 – FEB 2025",
      desc: [
        "Benchmarked 4G, Wi‑Fi, LoRa, XBee (DigiMesh), and UHF modules for reliable drone ops.",
        "Selected 4G as the optimal option after testing signal integrity and performance across conditions."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab key={key} label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel key={key} value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, j) {
              return (
                <li key={`${key}-desc-${j}`}>
                  <FadeInSection delay={`${j + 1}00ms`}>
                    <span>{descItem}</span>
                  </FadeInSection>
                </li>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
