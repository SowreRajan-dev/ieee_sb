import React from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";
function Membership() {
  return (
    <MembershipContainer>
      <MadrasSection>
        <AboutContainer>
          <LearnText>Learn to know</LearnText>
          <MSText>IEEE madras section</MSText>
          <MsPara>
            IEEE is the world's largest technical professional organization
            dedicated to advancing technology for the benefit of humanity.
          </MsPara>
          <MsButton>
            <a href="https://www.ieeemadras.org/" target="_blank" rel="noreferrer">Visit website</a>
          </MsButton>
        </AboutContainer>
      </MadrasSection>
      <MembershipSection>
        <MemberShipText>Membership</MemberShipText>
        <MemberMotto>
          Come be a part of the legacy and make technology better!
        </MemberMotto>
        <MembershipCards>
          <MemberShipCard>
            <CardTitle>Benefits</CardTitle>
            <CardContents>
              <CardCondition>
                <IconContainer>
                  <TiTick />
                </IconContainer>
                <MemberCardContent>
                  New resources, opportunities and many discounts{" "}
                </MemberCardContent>
              </CardCondition>
              <CardCondition>
                <IconContainer>
                  <TiTick />
                </IconContainer>
                <MemberCardContent>
                  Advance your career in the right direction{" "}
                </MemberCardContent>
              </CardCondition>
              <CardCondition>
                <IconContainer>
                  <TiTick />
                </IconContainer>
                <MemberCardContent>
                  Chance to participate in various IEEE conferences across the
                  globe{" "}
                </MemberCardContent>
              </CardCondition>
            </CardContents>
            <CardButton>
              <a rel="noreferrer" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi4xdCIsM76AhWpRmwGHb_YDkQQFnoECAwQAw&url=https%3A%2F%2Fwww.ieee.org%2Fmembership%2Fbenefits%2Findex.html%3FbyCareerPhase%3DAll%23%3A~%3Atext%3DIEEE%2520members%2520enjoy%2520reduced%2520rates%2Caffinity%2520programs%2520that%2520offer%2520savings.&usg=AOvVaw3ACVNrjqAb0mVbAWuRrAjh" target="_blank">Know More</a>
            </CardButton>
          </MemberShipCard>
          <MemberShipCard>
            <CardTitle>Join a society</CardTitle>
            <CardContents>
              <CardCondition>
                <IconContainer>
                  <TiTick />
                </IconContainer>
                <MemberCardContent>
                  Stay updated with latest trends in technology{" "}
                </MemberCardContent>
              </CardCondition>
              <CardCondition>
                <IconContainer>
                  <TiTick />
                </IconContainer>
                <MemberCardContent>
                  Network with colleagues locally and abroad{" "}
                </MemberCardContent>
              </CardCondition>
              <CardCondition>
                <IconContainer>
                  <TiTick />
                </IconContainer>
                <MemberCardContent>
                  Collaborate on research and projects with leading experts and
                  many such opportunities{" "}
                </MemberCardContent>
              </CardCondition>
            </CardContents>
            <CardButton>
              <a href="https://www.ieee.org/communities/societies/index.html" target = "_blank" rel="noreferrer">View More</a>
            </CardButton>
          </MemberShipCard>
          <MemberShipCard>
            <CardTitle>Join IEEE</CardTitle>
            <CardContents>
              <CardCondition>
                <IconContainer>
                  <TiTick />
                </IconContainer>
                <MemberCardContent>
                  Be a part of the world's largest technology community{" "}
                </MemberCardContent>
              </CardCondition>
              <CardCondition>
                <IconContainer>
                  <TiTick />
                </IconContainer>
                <MemberCardContent>
                  Acquire new skills, and advance your professional growth and
                  development{" "}
                </MemberCardContent>
              </CardCondition>
              <CardCondition>
                <IconContainer>
                  <TiTick />
                </IconContainer>
                <MemberCardContent>
                  New resources, opportunities and many discounts{" "}
                </MemberCardContent>
              </CardCondition>
            </CardContents>
            <CardButton>
              <a href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join" target = "_blank" rel="noreferrer">Join Now</a>
            </CardButton>
          </MemberShipCard>
        </MembershipCards>
      </MembershipSection>
    </MembershipContainer>
  );
}

export default Membership;

const MembershipContainer = styled.div`
  margin-top: 80px;
`;

const MadrasSection = styled.div``;

const LearnText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #005f94;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const MSText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
  margin-top: 20px;
`;

const MsPara = styled.p`
  text-align: center;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
  margin-top: 20px;
  padding: 20px;
  font-weight: 500;
`;

const AboutContainer = styled.div`
  position: relative;

`;

const MsButton = styled.button`
  width: 160px;
  border-radius : 0.2rem;
  height: 50px;
  color: #fff;
  background: #005f94;
  font-size: 1.2rem;
  border: none;
  marign-bottom:2rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 500;
  position: absolute;
  left:50%;
  transform:translate(-50%,50%);
  a {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    background: #004578;
  }

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 40px;
    font-size: 0.8rem;
  }
`;

const MembershipSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  margin-top:8rem;
`;

const MemberShipText = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 2px;
`;

const MemberMotto = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #005f94;
  letter-spacing: 2px;
  margin-top: 20px;
`;

const MembershipCards = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  @media screen and (max-width: 958px) {
    flex-direction: column;
  }
`;

const MemberShipCard = styled.div`
  margin-top: 20px;
  width: 100%;
  border: 1px solid #dee2e6;
  height: 500px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h2`
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

const CardCondition = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 20px;
`;

const IconContainer = styled.div`
  color: green;
  font-size: 15px;
`;

const MemberCardContent = styled.div`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  margin-left: 10px;
  text-align: left;
`;

const CardButton = styled.button`
  width: 160px;
  height: 50px;
  color: #fff;
  background: #005f94;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  margin-top: 30px;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
