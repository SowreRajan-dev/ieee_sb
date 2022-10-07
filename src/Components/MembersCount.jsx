import React from "react";
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function MembersCount() {
  return (
    <MembersCountContainer>
      <CounterHead>Members Count</CounterHead>
      <CounterContainer>
        <Progress>
          <CircularProgressbar value={110} text={`110`} />
          <ProgressText>Members</ProgressText>
        </Progress>
      </CounterContainer>
    </MembersCountContainer>
  );
}

export default MembersCount;

const MembersCountContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const CounterHead = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #005f94;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;

const CounterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Progress = styled.div`
  width: 110px;
  height: 110px;
`;

const ProgressText = styled.p``;
