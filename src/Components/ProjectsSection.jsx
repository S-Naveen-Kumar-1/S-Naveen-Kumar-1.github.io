import { ProjectCard } from "./ProjectCard";
import styles from "../Styles/ProjectsSection.module.css";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
const projects = [
  {
    name: "FitQuest",
    img: "FitQuest.png",
    link: "https://posh-division-4370.vercel.app/",
    git: "https://github.com/audacity07/FitQuest---Gamified-Fitness-Tracking-Webapp",
    about: "check",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Clothly",
    img: "https://user-images.githubusercontent.com/121815825/271999664-e78a15e3-cef1-42cd-8815-4af655996ab6.png",
    link: "https://clothly.vercel.app/",
    git: "https://github.com/Tapishagrawal/actual-shoes-7533",
    about: "check",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Budget Buddy",
    img: "BudgetBuddy.png",
    link: "https://euphonious-valkyrie-c86e27.netlify.app/",
    git: "https://github.com/S-Naveen-Kumar-1/straight-sock-6982/tree/main/budget_buddy",
    about: "check",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Globe Walker",
    img: "Globe_Walker.png",
    link: "https://64be28f1846f6e32f239560b--lively-bienenstitch-d05eb7.netlify.app/",
    git: "https://github.com/S-Naveen-Kumar-1/boorish-earthquake-4077",
    about: "check",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
];
export const ProjectsSection = () => {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <p>Projects</p>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div className={`${styles.fadeContainer}`} key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};
