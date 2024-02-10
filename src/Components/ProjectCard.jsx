import React, { useState, useEffect } from "react";
import styles from "../Styles/ProjectsSection.module.css";
import { AiOutlineGithub } from "react-icons/ai";
import { IoLinkSharp } from "react-icons/io5";

export const ProjectCard = ({ name, img, git, link, stacks, about }) => {
  const [isFadingIn, setIsFadingIn] = useState(false);

  useEffect(() => {
    setIsFadingIn(true);
  }, []);

  return (
    <div
      className={`project-card  ${styles.projectCont} ${
        isFadingIn ? styles.active : ""
      }`}
    >
      <img src={img} alt="" className={styles.image} />
      <p
        className="project-title"
        style={{ fontSize: "25px", fontWeight: "400", margin: "5px 0 0 0" }}
      >
        {name}
      </p>
      <div className={styles.stacksDiv2}>
        {stacks.map((stack, index) => (
          <span key={index}>{stack}</span>
        ))}
      </div>

      <div className={styles.linkCont}>
        <a href={git} rel="noreferrer" target="_blank">
          <div className={`project-github-link ${styles.linkDiv}`}>
            <AiOutlineGithub />
            <p>Code</p>
          </div>
        </a>
        <div className={`project-tech-stack ${styles.stacksDiv}`}>
          {stacks.map((stack, index) => (
            <span key={index}>{stack}</span>
          ))}
        </div>

        <a href={link} rel="noreferrer" target="_blank">
          <div className={`project-deployed-link ${styles.linkDiv}`}>
            <IoLinkSharp />
            <p>Demo</p>
          </div>
        </a>
      </div>

      <div className={`project-description ${styles.projInfo}`}>
        {/* <p >{about}</p> */}
      </div>
    </div>
  );
};
