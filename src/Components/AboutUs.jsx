import React from "react";
import styled from "styled-components";
function AboutUs() {
  return (
    <AboutUsContainer id="aboutus">
      <AboutUsText>ABOUT US</AboutUsText>
      <AboutUsSection>
        <SITImage src="Assets\Images\situniv.png" alt="sit-building" />
        <AboutUsContent>
          <AboutUsContentText>
            <b>IEEE SIT</b> is one of the most active student chapters. We're a
            diverse group of tech enthusiasts, developers and designers who live
            with the motto "Advancing Technology for Humanity". Members of IEEE
            SIT are active participants in national and international level
            hackathons and involve in multiple projects. IEEE, an association
            dedicated to advancing innovation and technological excellence for
            the benefit of humanity, IEEE is the world's largest technical
            professional society. It is also a shared-platform for the exultant
            upbringing of new ideas or projects into furtherance . IEEE SIT is
            affiliated to IEEE Madras Section.
          </AboutUsContentText>
        </AboutUsContent>
      </AboutUsSection>
    </AboutUsContainer>
  );
}

export default AboutUs;

const AboutUsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
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
