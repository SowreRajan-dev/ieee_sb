import React from "react";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup"
function MembersCount() {
  return (
    <MembersCountContainer>
      <CounterHead>Members Count</CounterHead>
      <CounterContainer>
        <Progress>
          <Report>
            <ReportHolder>
          <CountUp end={110} enableScrollSpy="true"/>
          </ReportHolder>
          <ProgressText>Members</ProgressText>
          </Report>
          <Report>
            <ReportHolder>
          <CountUp end={9} enableScrollSpy="true"/>
          </ReportHolder>
          <ProgressText>Societies</ProgressText>
          </Report>
          <Report>
          <ReportHolder>
          <CountUp end={15} enableScrollSpy="true"/>
          </ReportHolder>
          <ProgressText>Events</ProgressText>
          </Report>
          <Report>
          <ReportHolder>
          <CountUp end={20} enableScrollSpy="true"/>
          </ReportHolder>
          <ProgressText>Staffs</ProgressText>
          </Report>
        </Progress>
      </CounterContainer>
    </MembersCountContainer>
  );
}

export default MembersCount;

const MembersCountContainer = styled.div`
margin-top:2rem;
  width: 100%;
  height: 85vh;
  margin-bottom: 20px;
`;

const CounterHead = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #005f94;
  margin-bottom: 15rem;
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;

const CounterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Progress = styled.div`
  width: 110px;
  position:absolute;
  font-family:
  height: 110px;
  display:flex;
  justify-content:center;
  transform:translate(-50%,20%);
  left:40%;
  gap:5rem;
  align-items:center;
  font-size : 1.5rem;
  margin-left:10rem;
  margin-top:-4rem;
`;
const Report = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:0.5rem;
`

const ReportHolder = styled.div`
width:8rem;
height:8rem;
border-radius:100%;
outline:0.5rem solid #005f94;
display:flex;
align-items:center;
justify-content:center;
margin-bottom : 2rem;
`
const ProgressText = styled.p`
font-family: "Montserrat", sans-serif;
`;
