export const initialProjects = [
  {
    id: "sp-01",
    title: "Stark Web-Shooter HUD",
    tagline: "Augmented Reality HUD for real-time web tension and cartridge monitoring.",
    description: "A dashboard designed for Peter Parker's visor, measuring fluid density, web-slinging drag coefficients, and cartridge depletion using AI forecasting.",
    isWinner: true,
    winnerBadge: "Stark Industries Web-Shooter Upgrade",
    likes: 42,
    prizes: ["Stark Industries Web-Shooter Upgrade", "Best AI Application Built with Cloudflare"],
    members: [
      { name: "Peter Parker", role: "Hardware Architect", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80" },
      { name: "Ned Leeds", role: "Software Guru / Guy in the Chair", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100&q=80" }
    ],
    comments: [
      { author: "Tony Stark", text: "Nice work kid, but you're using too much power in the web-fluid heater circuit. Fix it.", date: "10 mins ago" },
      { author: "MJ", text: "Looks cool, Tiger. Try not to break it this time.", date: "1 hour ago" }
    ],
    readme: `# Stark Web-Shooter HUD Calibration System

This project is a React-powered HUD widget running on StarkOS embedded systems inside Spider-Man's upgraded suit. It utilizes high-frequency lidar arrays to map the surrounding Manhattan skyline and overlay dynamic grappling targets.

### Key Features
* **Predictive Fluid Calculator:** Uses AI algorithms to predict cartridge life based on tension force, air density, and wind speeds.
* **Rapid Snap Targets:** Real-time canvas highlights ideal anchor points on buildings to minimize deceleration.
* **Auto-Recalibration:** Automatically adjusts nozzle apertures for electric web, web-shield, and standard lines.

### Technical Architecture
- **Front End:** Embedded React with Canvas overlays for telemetry charts
- **Core Algorithms:** Rust-based physics engine compiling to WebAssembly
- **Data Streaming:** WebSockets transmitting suit metrics at 60fps`
  },
  {
    id: "sp-02",
    title: "Oscorp Bio-Antidote Grid",
    tagline: "AI-driven mapping tool to deploy cures for genetic anomalies.",
    description: "A tracking application that maps viral spreads across city sectors and coordinates target vectors for airborne bio-neutralizers.",
    isWinner: true,
    winnerBadge: "Oscorp Tech Innovation Prize",
    likes: 29,
    prizes: ["Oscorp Tech Innovation Prize", "Best Solutions for Social Impact"],
    members: [
      { name: "Gwen Stacy", role: "Lead Bio-Chemist", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" },
      { name: "Dr. Curt Connors", role: "Advisory Bio-Geneticist", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80" }
    ],
    comments: [
      { author: "Norman Osborn", text: "Highly promising results. Oscorp is ready to fund phase 2 trials immediately.", date: "2 hours ago" },
      { author: "Peter Parker", text: "Thanks Gwen! This is going to save thousands of people in Midtown.", date: "3 hours ago" }
    ],
    readme: `# Oscorp Bio-Antidote Grid (OBAG)

OBAG leverages convolutional neural networks (CNNs) to predict viral pathogen mutations and calculate optimal delivery vectors using UAV/Spider-Bot coordinates.

### Core Modules
1. **Mutation Map:** Interactive 3D vector map of mutant gene structures.
2. **Scatter Coordinate Solver:** Computes aerodynamic drift coefficients to guarantee 99.4% neutralizer delivery efficiency in open-air environments.
3. **Safety Interlock Protocol:** Multi-party signature protocol preventing rogue modification of genetic sequence payloads.

### Tech Stack
- React + Leaflet maps for geolocation tracking
- Python (FastAPI) + TensorFlow in the backend
- MQTT for real-time drone control`
  },
  {
    id: "sp-03",
    title: "Daily Bugle Photo Scanner",
    tagline: "Automated copyright tagger and threat classifier for spider-photography.",
    description: "An editor dashboard designed for J. Jonah Jameson to filter, label, and automatically headline spider sightings across New York City.",
    isWinner: false,
    winnerBadge: "",
    likes: 18,
    prizes: ["Daily Bugle Media & Social Impact Prize"],
    members: [
      { name: "Betty Brant", role: "Managing Editor", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80" },
      { name: "J. Jonah Jameson", role: "Executive Producer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" }
    ],
    comments: [
      { author: "JJJ", text: "WHERE ARE MORE PICTURES OF SPIDER-MAN? The AI scanner keeps tagging cats as threats!", date: "15 mins ago" },
      { author: "Betty Brant", text: "Working on the noise filters, Jonah! Cat ears are throwing off the threat ratio.", date: "30 mins ago" }
    ],
    readme: `# Daily Bugle AI Photo Tagger & Threat Classifier

An automated press asset management panel designed to process high-resolution photography sent in by freelancers (primarily Peter Parker). It scans images, detects spandex suits, and automatically writes highly dramatic headlines.

### Key Capabilities
- **Spandex Shape Identifier:** Leverages computer vision to instantly identify red/blue and black suits.
- **Sensational Headline Generator:** Generates headlines such as "SPIDER-MAN: HERO OR MENACE?" using custom-trained NLP models.
- **Copyright & Invoice Automation:** Matches image EXIF data with freelancer bank registries for direct payments.`
  },
  {
    id: "sp-04",
    title: "Web-Slinging Streamlit HUD",
    tagline: "Streamlit dashboard tracking web-fluid consumption and velocity statistics.",
    description: "A fast, Python-friendly dashboard that tracks velocity spikes, building heights, and overall fluid consumption per patrol.",
    isWinner: true,
    winnerBadge: "Best Use of Streamlit",
    likes: 31,
    prizes: ["Best Use of Streamlit", "Best Solutions for Social Impact"],
    members: [
      { name: "Miles Morales", role: "Python Developer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80" }
    ],
    comments: [
      { author: "Ganke Lee", text: "This dashboard runs so fast. The cache decorators really helped with the city telemetry data.", date: "4 hours ago" }
    ],
    readme: `# Web-Slinging Streamlit Analytics Dashboard

A simple and lightweight telemetry dashboard built in Python using Streamlit. It consumes telemetry data sent directly from Miles' suit during nightly patrols.

### Features
* **Patrol Heatmaps:** Tracks high-crime sectors and displays the density of web-traps deployed.
* **G-Force Analyzer:** Visualizes peak centrifugal acceleration during high-speed swings.
* **Fluid Level Alerts:** Plays warning sirens in-suit when fluid levels drop below 15%.`
  },
  {
    id: "sp-05",
    title: "Spider-Bot Central Control",
    tagline: "Multi-agent orchestration platform for coordinating hundreds of tiny autonomous bots.",
    description: "An command-and-control app to dispatch Spider-Bots, map crime scenes, and run structural damage scans on bridges.",
    isWinner: true,
    winnerBadge: "Best use of Conductor",
    likes: 38,
    prizes: ["Best use of Conductor", "Best Domain Name from GoDaddy Registry"],
    members: [
      { name: "Otto Octavius", role: "Systems Architect", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&h=100&q=80" },
      { name: "Peter Parker", role: "Contributor", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80" }
    ],
    comments: [
      { author: "Otto", text: "The task scheduling latency is down to 0.4 milliseconds. Inefficiency has been eliminated.", date: "5 hours ago" }
    ],
    readme: `# Spider-Bot Central Control (SBCC)

A highly scalable command center that schedules, updates, and commands hundreds of autonomous Spider-Bots deployed across Manhattan.

### System Infrastructure
- **Agent Orchestrator:** Uses Netflix Conductor to chain complex tasks (e.g., Scan Wall -> Detect Crack -> Deploy Cement -> Notify City Hall).
- **Communication Protocol:** Low-energy Zigbee relays combined with localized Wi-Fi mesh setups.
- **Edge Analytics:** In-bot micro-models handle object classification locally to conserve network bandwidth.`
  },
  {
    id: "sp-06",
    title: "Aunt May's Shelter Coordinator",
    tagline: "Helping volunteers coordinate resources for FEAST shelters.",
    description: "A database and logistic manager linking food donations and temporary housing vacancies with FEAST volunteers across New York.",
    isWinner: false,
    winnerBadge: "",
    likes: 25,
    prizes: ["Best Solutions for Social Impact", "Hack for CUSAT"],
    members: [
      { name: "May Parker", role: "Founder / Lead Organizer", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80" },
      { name: "Martin Li", role: "Contributor", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80" }
    ],
    comments: [
      { author: "Miles Morales", text: "Love this! Volunteer coordinates are updating in real-time. I'll drop off supplies tonight.", date: "7 hours ago" }
    ],
    readme: `# Aunt May's FEAST Shelter Logistics Portal

An app dedicated to the logistics coordination of FEAST (Food, Emergency Aid, Shelter, and Training) shelters across Chinatown and Brooklyn.

### Target Areas
- **Real-Time Inventory:** Live updates on meals, winter wear, and emergency medicine levels.
- **Socio-Economic Geo-Mapping:** Maps areas with low shelter capacity to deploy resources efficiently.
- **Secure Volunteer Signup:** Zero-knowledge identity proofs ensuring volunteer safety.`
  }
];

export const sponsorPrizes = [
  "Best Domain Name from GoDaddy Registry",
  "Best Use of Auth0",
  "Best Use of Streamlit",
  "Best AI Application Built with Cloudflare",
  "Best AI Project with Databricks Open Source",
  "Hack for CUSAT",
  "Best Use Gamification and AI in Personalised Learning",
  "Best use of Conductor",
  "Best Solutions for Social Impact",
  "Stark Industries Web-Shooter Upgrade",
  "Oscorp Tech Innovation Prize",
  "Daily Bugle Media & Social Impact Prize"
];

export const initialParticipants = [
  { name: "Peter Parker", role: "Spidey Hardware / Web Design", logo: "Stark Industries", active: true, avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80" },
  { name: "Gwen Stacy", role: "Bio-Chemist & Genetics Researcher", logo: "Oscorp Labs", active: true, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" },
  { name: "Ned Leeds", role: "Fullstack / Cloud Integrator", logo: "Midtown Science", active: true, avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100&q=80" },
  { name: "Miles Morales", role: "Data Science / Python Enthusiast", logo: "Brooklyn Vision Academy", active: true, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80" },
  { name: "Otto Octavius", role: "Automation Architect", logo: "Octavius Industries", active: false, avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&h=100&q=80" },
  { name: "Betty Brant", role: "PR & Copywriter Coordinator", logo: "Daily Bugle", active: true, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80" },
  { name: "Harry Osborn", role: "Project Manager", logo: "Oscorp Industries", active: false, avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80" }
];
