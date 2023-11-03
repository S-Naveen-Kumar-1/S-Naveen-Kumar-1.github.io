import { useState } from "react";
import styles from "../Styles/AboutSection.module.css";
import { useEffect } from "react";

export const AboutSection = () => {
  return (
    <div className={`${styles.rootCont} ${"about section"}`} id="about">
      <p>About</p>
      <div className={styles.mainCont}>
        <div className={styles.profilePicCont}>
          <img
            src="https://avatars.githubusercontent.com/u/130354961?v=4"
            alt=""
            className={styles.profilePic}
          />
        </div>
        <div>
          <h2>I am S Naveen Kumar</h2>
          <p id="user-detail-intro">
            Perceptive and thorough full-stack developer with a specialization
            in MERN stack. Outcome-driven and inquisitive, with a distinct
            fascination with building user-driven experiences. I have completed
            my graduation in Civil Engineering in 2019.
          </p>
        </div>
      </div>
    </div>
  );
};
