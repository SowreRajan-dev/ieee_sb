import React from "react";
import styled from "styled-components";
function ImageBg() {
  return (
    <div>
      <ImageContainer>
        <BackgroundImg
          src="https://images.unsplash.com/photo-1559523182-a284c3fb7cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="bg-img"
        />
        <BlackLayer></BlackLayer>
        <IEEELogo src="\Assets\Images\IeeeLogo.png" alt="ieee-logo" />
        <LogoTextContainer>
          <LogoText>Student chapter</LogoText>
          <Seperator></Seperator>
          <CollageTextLogo>
            <CollageText>SRI SAI RAM INSTITUTE OF TECHNOLOGY</CollageText>
            <Seperator></Seperator>
            <CollageMotto>INSPIRE... INNOVATE... INVENT...</CollageMotto>
          </CollageTextLogo>
        </LogoTextContainer>
      </ImageContainer>
    </div>
  );
}

export default ImageBg;

const ImageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;
const BackgroundImg = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: fill;
  z-index: -1;
  background: rgba(255, 255, 255, 0.25);
`;

const BlackLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const IEEELogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 130px;
  object-fit: contain;
  z-index: 1;

  @media (min-width: 1024px) {
    top: 40%;
  }
`;

const LogoTextContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 130px;
  z-index: 1;
  width: 80%;
`;
const LogoText = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-align: center;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 15px;
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: white;
  margin: 10px 0;
`;

const CollageTextLogo = styled.div``;

const CollageText = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: white;
  text-align: center;
  margin: 0;
  font-family: "Montserrat", sans-serif;

  letter-spacing: 0;
`;

const CollageMotto = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: white;
  text-align: center;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 3px;
`;
