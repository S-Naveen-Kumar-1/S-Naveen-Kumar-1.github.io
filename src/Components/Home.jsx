import React from "react";
import styled from "styled-components";
import { RiDownloadLine } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export const Home = () => {
  const openNewTab = () => {
    window.open(
      "https://drive.google.com/file/d/1BZzN9V1wgjJqdFH3nKV9WzIAsuenP-YS/view?usp=sharing ",
      "_blank"
    );
  };

  return (
    <DIV id="home">
      <Content id="intro">
        <h1>Hi,</h1>
        <h1 id="user-detail-name">I am S Naveen Kumar</h1>
        <h5>Full Stack Web Developer</h5>
        <button id="resume-button-2" onClick={openNewTab}>
          <div>
            <RiDownloadLine
              style={{
                fontSize: "18px",
                marginLeft: "10px",
                marginRight: "5px",
              }}
            />
          </div>
          <div>Resume</div>
          <a
            id="resume-link-2"
            href="https://drive.google.com/file/d/1BZzN9V1wgjJqdFH3nKV9WzIAsuenP-YS/view?usp=sharing"
            download="https://drive.google.com/file/d/1BZzN9V1wgjJqdFH3nKV9WzIAsuenP-YS/view?usp=sharing"
          ></a>
        </button>
        <div id="socialIcons">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/s-naveen-kumar-17774312a/"
            target="_blank"
            id="linkedInIcon"
          >
            <AiFillLinkedin />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/S-Naveen-Kumar-1"
            target="_blank"
            id="gitIcon"
          >
            <AiOutlineGithub />
          </a>
        </div>
      </Content>
      <Content id="codeImg">
        <img
          src="https://camo.githubusercontent.com/e4a569755580f96dce0e6d65bc761e0d9aef0fecae524ec73a1b0be60fc934fa/68747470733a2f2f7777772e6d79676f2e67652f75706c6f6164732f626c6f672f313538343032333739352e6a7067"
          alt=""
        />
      </Content>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  border: 1px solid red;
  justify-content: center;
  gap: 5%;
  padding-top: 80px;
  margin: 5%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: 50%;
  border: 1px solid red;

  h1 {
    font-size: 50px;
    font-weight: 800;
  }
  h5 {
    font-size: 40px;
    font-weight: 600;
    color: #495a92;
  }

  button {
    border: 3px solid #495a92;
    background-color: #495a92;
    width: auto; /* Adjust the width to "auto" */
    color: white;
    height: 11%;
    border-radius: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #socialIcons {
    display: flex;
  }
  #linkedInIcon {
    font-size: 40px;
    margin: 0 10px;
    cursor: pointer;
    color: rgb(8, 111, 143);
    margin: 2%;
    transition: color 0.3s;
  }
  #linkedInIcon:hover {
    color: rgb(17, 121, 224) !important;
  }
  #gitIcon {
    font-size: 40px;
    margin: 2%;
    cursor: pointer;
    color: rgb(80, 80, 80);
    transition: color 0.3s;
  }
  #gitIcon:hover {
    color: rgb(17, 121, 224) !important;
  }
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 30px;
    }
    h5 {
      font-size: 30px;
      font-weight: 400;
    }
    button {
      width: auto; /* Adjust the width to "auto" for mobile screens */
      height: 40px;
      font-size: 14px;
    }
  }
`;
