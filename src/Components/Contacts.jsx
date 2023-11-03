import styles from "../Styles/ContactSection.module.css";

import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { useRef } from "react";
export const Contacts = () => {
  return (
    <div className={styles.rootCont} id="contact">
      <hr style={{ width: "95vw" }} />
      <p className={styles.text}>Liked my work? Want to get in touch?</p>
      <p className={styles.text}>You can reach out to me at:</p>
      <div className={styles.iconsCont}>
        <a href="gmailto:navee1110@gmail.com">
          <AiOutlineMail className={styles.emailicon} />
        </a>
        <a
        id="contact-linkedin"
          href="https://www.linkedin.com/in/s-naveen-kumar-17774312a/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className={styles.linkedInIcon} />
        </a>
        <a
        id="contact-github"
          href="https://github.com/S-Naveen-Kumar-1"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineGithub className={styles.gitIcon} />
        </a>
      </div>
      <p id="contact-phone" className={styles.text}>Phone: 7829881674</p>
      <p id="contact-email" className={styles.text}>Email: navee1110@gmail.com</p>
    </div>
  );
};
