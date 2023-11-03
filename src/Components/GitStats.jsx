import React from "react";
import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";

export const GitStats = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "auto",
          justifyContent: "center",
        }}
        className="react-activity-calendar"
      >
        <GitHubCalendar username="S-Naveen-Kumar-1" />
      </div>
      <DIV>
        <div>
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=S-Naveen-kumar-1&theme=dark"
            alt="GitHub Streak"
          />
        </div>
        <div>
          <img
            id="github-top-langs"
            align="left"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=s-naveen-kumar-1&show_icons=true&locale=en&layout=compact&theme=dark"
            alt="s-naveen-kumar-1"
          />
        </div>
        <div>
          <img
            id="github-stats-card"
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=s-naveen-kumar-1&show_icons=true&locale=en&theme=dark"
            alt="s-naveen-kumar-1"
          />
        </div>
      </DIV>
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
