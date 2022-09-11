import React from "react";
import "./App.css";
import styled from "styled-components";
import ImageBg from "./Components/ImageBg";
import Navbar from "./Components/Navbar";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from "react-scroll-motion";
import AboutUs from "./Components/AboutUs";
import VisionAndMission from "./Components/VisionAndMission";
import Societies from "./Components/Societies";
import Members from "./Components/Members";

function App() {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator
          animation={batch(
            Fade(0, 1, { duration: 1 }),
            Sticky,
            MoveOut(0, -200)
          )}
        >
          <ImageBg />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <NavContainer>
          <Navbar />
        </NavContainer>
        <Animator>
          <ImageContainer>
            <BackgroundImg
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80"
              alt="bg-img"
            />
          </ImageContainer>
        </Animator>
      </ScrollPage>

      <AboutUs />

      <VisionAndMission />

      <Societies />

      <Members />
    </ScrollContainer>
  );
}

export default App;

const ImageContainer = styled.div`
  width: 100%;
  height: calc(90vh - 50px);
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const BackgroundImg = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
`;
