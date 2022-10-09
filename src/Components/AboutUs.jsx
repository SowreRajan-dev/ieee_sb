import React from "react";
import styled from "styled-components";
function AboutUs() {
  return (
    <>
    <A id="aboutus"/>
    <AboutUsContainer >
      <AboutUsText >ABOUT US</AboutUsText>
      <AboutUsSection>
        <SITImage src="Assets\Images\situniv.png" alt="sit-building" />
        <AboutUsContent>
          <AboutUsContentText>
          IEEE is the world’s largest technical professional society, dedicated to advancing innovation and technological excellence for the benefit of humanity. It is also a shared platform for the exultant upbringing of new ideas or projects into furtherance.   IEEE-SIT is affiliated with the IEEE Madras Chapter, which is one of the most active student chapters, constituting a separate entity of tech enthusiasts, developers, and designers who go along with the motto of “Advancing Technology for Humanity”.  Members of IEEE-SIT are active participants in national and international hackathons and are involved in multiple projects.  
          </AboutUsContentText>
        </AboutUsContent>
      </AboutUsSection>
    </AboutUsContainer></>
  );
}

export default AboutUs;

const A =styled.div``
const AboutUsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10rem;
  margin-bottom:5rem;
`;

const AboutUsText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #005f94;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;

const AboutUsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  margin-top:3rem;
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`;

const SITImage = styled.img`
  width: 50%;
  height: auto;
  margin-bottom: 20px;
  padding: 20px;
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

const AboutUsContent = styled.div`
  width: 50%;
  height: auto;
  margin-bottom: 20px;
  padding: 20px;
  margin-left: 20px;
  padding: 20px;
  margin-right: 20px;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

const AboutUsContentText = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #000;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 20px;
  line-height: 31px;
  text-align: justify;
  line-break: auto;

  @media screen and (max-width: 950px) {
    font-size: 20px;
  }
`;
