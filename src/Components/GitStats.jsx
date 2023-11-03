import React from "react";
import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";

export const GitStats = () => {
  return (
    <div>
      <DIV>
        <div id="github-streak-stats">
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=S-Naveen-kumar-1&theme=dark"
            alt="GitHub Streak"
          />
        </div>
        <div id="github-top-langs">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=s-naveen-kumar-1&show_icons=true&locale=en&layout=compact&theme=dark"
            alt="s-naveen-kumar-1"
          />
        </div>
        <div id="github-stats-card">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=s-naveen-kumar-1&show_icons=true&locale=en&theme=dark"
            alt="s-naveen-kumar-1"
          />
        </div>
      </DIV>
      <div style={{display:"flex",alignItems:"center", margin:"auto",justifyContent:"center",paddingBottom:"80px"}} className="react-activity-calendar">
        <GitHubCalendar username="S-Naveen-Kumar-1" />
      </div>
    </div>
  );
};
const DIV = styled.div`
  display: flex;
  justify-content: center;
  gap: 1%;
  margin: auto;
  border: 1px solid red;
  padding-bottom: 80px;
  width: 80%;
  div {
    border: 1px solid red;
    height: 300px;
  }
  img {
    width: 100%;
    height: 100%;
  }

`;
