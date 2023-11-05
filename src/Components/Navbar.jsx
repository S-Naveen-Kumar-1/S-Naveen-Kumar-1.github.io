import { useState } from "react";
import styles from "../Styles/Navbar.module.css";
import { Link } from "react-scroll";
import { HiMenuAlt1 } from "react-icons/hi";
import { RiDownloadLine } from "react-icons/ri";

export const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const openNewTab = () => {
    window.open(
      "S-Naveen-Kumar-Resume.pdf",
      "_blank"
    );
  };

  return (
    <div
      id="nav-menu"
      onClick={handleMobileMenu}
      style={{
        color: "#7389d1",
        backgroundColor: "#000000",
        fontSize: "20px",
        fontWeight: "500",
        border: "1px solid black",
      }}
      className={`flex items-center justify-between px-10 py-4 border-b-2 sticky top-0 left-0 w-full z-[999] `}
    >
      <div className="flex items-center justify-between max-[900px]:w-full mr-5 ">
        <Link
          className="nav-link home"
          to="home"
          smooth={true}
          duration={1000}
          spy={true}
          hashSpy={true}
          activeClass={"active"}
        >
          Home
        </Link>
        <span onClick={handleMobileMenu} className="hidden max-[900px]:inline">
          <HiMenuAlt1 className="text-2xl" />
        </span>
      </div>

      <div className="flex items-center gap-12 max-[900px]:inline">
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
          to="skills"
          className="nav-link skills"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>skills</div>
        </Link>
        <Link
          to="projects"
          className="nav-link projects"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>projects</div>
        </Link>
        <Link
          to="contact"
          className="nav-link contact"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>contact</div>
        </Link>
        <button
          style={{
            display: "flex",
            gap: " 5%",
            alignItems: "center",
            borderRadius: "5%",
            border: "1px solid #495a92",
            backgroundColor: "#495a92",
            color: "white",
          }}
          className="nav-link resume"
          id="resume-button-1"
          onClick={openNewTab}
        >
          <div>
            <RiDownloadLine
              style={{
                fontSize: "18px",
                marginLeft: "10px",
                marginRight: "5px",
              }}
            />
          </div>
          <div className={styles.nav}>Resume</div>
          <a
            id="resume-link-1"
            href="S-Naveen-Kumar-Resume.pdf"
            download="S-Naveen-Kumar-Resume.pdf"
          ></a>
        </button>
      </div>

      {/* <div className="relative min-[900px]:hidden">
        <div
          className={`flex gap-4 w-[170px] flex-col fixed top-[4.3rem] -right-3 p-1 px-3 shadow-[0px_13px_29px_0px_rgba(100,100,111,0.4)] bg-white h-[100vh] ${
            isMobileMenuVisible ? "" : "-right-[300px]"
          } transition-all duration-500`}
        >
          <Link
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
            to="contact"
            smooth={true}
            duration={1000}
            activeClass={styles.active}
            spy={true}
            hashSpy={true}
          >
            <div className={styles.nav}>contact</div>
          </Link>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: " 5%",
              borderRadius: "5%",
              border: "1px solid #495a92",
              backgroundColor: "#495a92",
              color: "white",
            }}
            onClick={openNewTab}
          >
            <div>
              <RiDownloadLine
                style={{
                  fontSize: "18px",
                  marginLeft: "10px",
                  marginRight: "5px",
                }}
              />
            </div>
            <div className={styles.nav}>Resume</div>
            <a
              href="https://drive.google.com/file/d/1BZzN9V1wgjJqdFH3nKV9WzIAsuenP-YS/view?usp=sharing"
              download="https://drive.google.com/file/d/1BZzN9V1wgjJqdFH3nKV9WzIAsuenP-YS/view?usp=sharing"
            ></a>
          </button>
        </div>
      </div> */}
    </div>
  );
};