import React from "react";
import styled from "styled-components";
import societyDatas from "../Data/Societies";
function Societies() {
  return (
    <SocietiesContainer>
      <SocietyText>Societies</SocietyText>
      <Society>
        {societyDatas.sociteies.map((society, index) => (
          <SocietyMapper key={index}>
            <IndividualSociety>
              <a href={society.websiteUrl}>
                <SocietyLogo src={society.imageUrl} alt={society.name} />
              </a>
            </IndividualSociety>
            <SocietyTextInfo color={society.color}>
              <a href={society.websiteUrl}>
                <SocietyName color={society.color}>
                  {society.name} - {society.fullName}
                </SocietyName>
                <SocietyBranch color={society.color}>
                  {society.branchChapter}
                </SocietyBranch>
              </a>
            </SocietyTextInfo>
          </SocietyMapper>
        ))}
      </Society>
    </SocietiesContainer>
  );
}

export default Societies;

const SocietiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 30px;

  a {
    text-decoration: none;
  }
`;

const SocietyText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #005f94;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  text-transform: uppercase;
`;

const SocietyLogo = styled.img`
  width: 80%;
  height: 100%;
  object-fit: contain;
`;

const Society = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;

  @media screen and (max-width: 850px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
`;

const IndividualSociety = styled.div`
  width: 60%;
  height: 150px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;

  cursor: pointer;
  &:hover {
    scale: 1.1;
    transition: all 0.5s ease-in-out;
  }
`;

const SocietyName = styled.p`
  font-size: 1rem;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  cursor: pointer;

  color: ${(props) => props.color};
`;

const SocietyMapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SocietyBranch = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  cursor: pointer;
  color: ${(props) => props.color};
  margin-top: 10px;
`;

const SocietyTextInfo = styled.div`
  &:hover {
    text-decoration-color: ${(props) => props.color};
    text-decoration: underline;
  }
`;
