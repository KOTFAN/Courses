import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="./images/profile_image.jpg" alt="ME" />
    </div>
  );
}

function Intro() {
  return (
    <>
      <h1>Vitaliy Petrovskiy</h1>
      <p>
        I'm a Front-End Developer passionate about building applications that
        live, breathe, and inspire. Beyond technical skills, I bring energy,
        leadership, and a relentless drive for improvement into every project
        and every team I join.
      </p>
    </>
  );
}

function SkillList() {
  const skills = [
    { name: "HTML", status: "Pro", id: 0, color: "#e34c26" },
    { name: "CSS", status: "Pro", id: 1, color: "#264de4" },
    { name: "SCSS", status: "Good", id: 2, color: "#cd6799" },
    { name: "JavaScript", status: "Pro", id: 3, color: "#f0db4f" },
    { name: "React", status: "Good", id: 4, color: "#61dafb" },
    { name: "TypeScript", status: "Good", id: 5, color: "#3178c6" },
    { name: "Git", status: "Pro", id: 6, color: "#f1502f" },
    { name: "SQL", status: "Noob", id: 7, color: "#e38c00" },
  ];
  return (
    <div className="skill-list">
      {skills.map(({ name, status, id, color }) => (
        <Skill name={name} status={status} key={id} color={color} />
      ))}
    </div>
  );
}

function Skill({ name, status, color }) {
  const statusEmoji = {
    Pro: "💪",
    Good: "👍",
    Noob: "🙀",
  };

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <h4>{name}</h4>
      <p>{statusEmoji[status]}</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
