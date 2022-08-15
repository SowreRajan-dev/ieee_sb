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

function App() {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <ImageContainer>
            <ImageBg />
          </ImageContainer>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator>
          <Navbar />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;

const ImageContainer = styled.div`
  width: 100vw;
  height: 100%;
  z-index: -1;
`;
