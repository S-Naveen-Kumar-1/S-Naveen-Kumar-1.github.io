import styles from "../Styles/Navbar.module.css";
import { Link } from "react-scroll";
export const Navbar = () => {
  return (
    <div id="nav-menu" className={styles.root}>
      <Link
        className="nav-link home"
        to="home"
        smooth={true}
        duration={1000}
        spy={true}
        hashSpy={true}
        activeClass={"active"}
      >
        <div className={styles.navlogo}>Home</div>
      </Link>
      <div className={styles.navsCont}>
        <Link
          className="nav-link about"
          to="about"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>about</div>
        </Link>
        <Link
          className="nav-link skills"
          to="skills"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>skills</div>
        </Link>
        <Link
          className="nav-link projects"
          to="projects"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>projects</div>
        </Link>
        <Link
          className="nav-link contact"
          to="contact"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>contact</div>
        </Link>
      </div>
    </div>
  );
};
