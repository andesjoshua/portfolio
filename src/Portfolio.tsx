import React, { useState } from "react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const theme = darkMode ? dark : light;

  return (
    <div style={{ ...styles.container, backgroundColor: theme.bg, color: theme.text }}>
      <div style={{ ...styles.card, backgroundColor: theme.cardBg, color: theme.text }}>
        <header style={styles.header}>
          <img
            src="https://avatars.githubusercontent.com/u/00000000?v=4"
            alt="Joshua Andes Avatar"
            style={styles.avatar}
          />
          <h1 style={styles.name}>Joshua Andes</h1>
          <p style={styles.role}>Full Stack Software Developer</p>
          <div style={styles.links}>
            <a style={{ ...styles.link, color: theme.link }} href="mailto:1andesjoshua1@gmail.com">Email</a>
            <a style={{ ...styles.link, color: theme.link }} href="https://github.com/yourhandle" target="_blank" rel="noreferrer">GitHub</a>
            <a style={{ ...styles.link, color: theme.link }} href="https://www.linkedin.com/in/andesjoshua/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <button onClick={toggleDarkMode} style={styles.toggle}>
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <section style={styles.section}>
          <h2>Hi, I'm Josh 👋</h2>
          <p>
            I'm a full-stack developer who enjoys building clean, maintainable web applications with React,
            Ruby on Rails, and sometimes Java. I enjoy working on teams that turn ideas into scalable, usable software.
          </p>
        </section>

        <section style={styles.section}>
          <h2>What I Do</h2>
          <ul>
            <li>Build secure and scalable web applications</li>
            <li>Design intuitive frontend experiences with React</li>
            <li>Create APIs and data models using Ruby on Rails</li>
            <li>Write clean code and reliable tests (RSpec, Jest)</li>
            <li>Collaborate in agile teams with Git, Jira, and Docker</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>Experience</h2>
          <div style={styles.projectCard}>
            <h3>Full Stack Developer – Alpha Omega</h3>
            <p><em>Remote · Dec 2023 – Aug 2025</em></p>
            <ul>
              <li>Built secure, scalable web apps using Ruby on Rails and React for the Department of Homeland Security (DHS).</li>
              <li>Led frontend and backend efforts including ActiveAdmin dashboards and Kafka-based pipelines.</li>
              <li>Implemented RSpec tests, complex database migrations, and robust auditing with PaperTrail.</li>
            </ul>
          </div>
          <div style={styles.projectCard}>
            <h3>Software Engineer I – Appddiction Studio</h3>
            <p><em>Remote · Apr 2022 – Sep 2023</em></p>
            <ul>
              <li>Developed Java-based applications and helped modernize legacy systems using Angular and Spring Boot.</li>
              <li>Applied secure coding practices using tools like Checkmarx to ensure data safety.</li>
              <li>Collaborated remotely with cross-functional teams to deliver full-stack features.</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <h2>Get in Touch</h2>
          <p>
            I'm open to new opportunities. Shoot me an email or message me on LinkedIn, I'll try my best to reply in a timely manner.
          </p>
        </section>

        <footer style={styles.footer}>
          <p>© 2025 Joshua Andes</p>
        </footer>
      </div>
    </div>
  );
};

const light = {
  bg: "#f9fbfd",
  cardBg: "#ffffff",
  text: "#1f2937",
  link: "#2563eb",
};

const dark = {
  bg: "#111827",
  cardBg: "#1f2937",
  text: "#f3f4f6",
  link: "#60a5fa",
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
    transition: "all 0.3s ease",
  },
  card: {
    maxWidth: "800px",
    width: "100%",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    padding: "2.5rem",
    transition: "all 0.3s ease",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
    border: "3px solid #ccc",
  },
  name: {
    fontSize: "2.5rem",
    margin: 0,
  },
  role: {
    fontSize: "1.2rem",
    color: "inherit",
    marginTop: "0.25rem",
  },
  links: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
  },
  link: {
    textDecoration: "none",
    fontWeight: 500,
  },
  toggle: {
    marginTop: "1.5rem",
    padding: "0.5rem 1rem",
    color: "gray",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    background: "#e5e7eb",
  },
  section: {
    marginBottom: "2rem",
  },
  projectCard: {
    marginBottom: "1.5rem",
    padding: "1rem",
    borderLeft: "4px solid #3b82f6",
    background: "rgba(59, 130, 246, 0.05)",
    borderRadius: "8px",
  },
  footer: {
    borderTop: "1px solid #e5e7eb",
    paddingTop: "1rem",
    fontSize: "0.875rem",
    textAlign: "center",
  },
};

export default Portfolio;
