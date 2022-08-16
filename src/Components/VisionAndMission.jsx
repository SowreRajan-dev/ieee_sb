import React from "react";
import styled from "styled-components";
function VisionAndMission() {
  return (
    <VisionAndMissionContainer>
      <VisionSection>
        <VisionHeader>Our vision</VisionHeader>
        <VisionMotto>“ INSPIRE... INNOVATE... INVENT... ”</VisionMotto>

        <Visions>
          IEEE SIT is a prolific student chapter that aims to inspire
          professionalism and empower students, help them learn and implement
          new skills and technologies, gain exemplary knowledge through various
          engaging workshops and webinars, experience in fields of interest like
          application and website development, robotics and automation, consumer
          and power electronics, engineering, media, corporate and content
          writing, carry out research, publish papers, establish a professional
          profile and network with esteemed IEEE alumni across the globe, and
          develop projects that greatly benefit mankind.
        </Visions>
      </VisionSection>
      <MissionSection>
        <MissionHeader>Our mission</MissionHeader>
        <Missions>
          IEEE SIT Promotes excellence in the field of technical advancement and
          innovation for the benefit of human society. To outline how IEEE
          continues to make a mark in all engineering and technology sectors, as
          its technologies progress. To encourage the students around to get
          involved in promoting innovative ideas
        </Missions>
      </MissionSection>
    </VisionAndMissionContainer>
  );
}

export default VisionAndMission;

const VisionAndMissionContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;
const VisionSection = styled.div``;

const VisionHeader = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #005f94;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  text-transform: uppercase;
`;

const VisionMotto = styled.p`
  font-size: 20px;
  font-weight: 700;
  font-style: italic;
  color: #000;
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;

const Visions = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #000;
  font-family: "Montserrat", sans-serif;
  margin: 20px 0;
  line-height: 31px;
  text-align: justify;
  line-break: auto;
`;

const MissionSection = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const MissionHeader = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #005f94;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  text-transform: uppercase;
`;

const Missions = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #000;
  font-family: "Montserrat", sans-serif;
  margin: 20px 0;
  line-height: 31px;
  text-align: justify;
  line-break: auto;
`;
