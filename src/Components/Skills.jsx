import React from "react";
import {
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiGit,
} from "react-icons/si";
import styles from "../Styles/Skills.module.css";

export const Skills = () => {
  const skills = [
    { name: "React", icon: <SiReact className="skills-card-img" /> },
    { name: "Redux", icon: <SiRedux className="skills-card-img" /> },
    { name: "HTML", icon: <SiHtml5 className="skills-card-img" /> },
    { name: "CSS", icon: <SiCss3 className="skills-card-img" /> },
    { name: "JavaScript", icon: <SiJavascript className="skills-card-img" /> },
    { name: "Express", icon: <SiExpress className="skills-card-img" /> },
    { name: "MongoDB", icon: <SiMongodb className="skills-card-img" /> },
    { name: "Node.js", icon: <SiNodedotjs className="skills-card-img" /> },
    { name: "Git", icon: <SiGit className="skills-card-img" /> },
  ];

  return (
    <div id="skills" className={styles.skills}>
      <p style={{ fontSize: "40px", fontWeight: "400" }}>Skills</p>
      <div className={styles.skillCards}>
        {skills.map((skill, index) => (
          <div className={`skills-card ${styles.skillCard} `} key={index}>
            {skill.icon}
            <h3 className="skills-card-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
