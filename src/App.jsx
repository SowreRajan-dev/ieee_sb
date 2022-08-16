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
        <Animator>
          <Navbar />
          <ImageContainer>
            <BackgroundImg
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80"
              alt="bg-img"
            />
          </ImageContainer>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator>
          <AboutUs />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;

const ImageContainer = styled.div`
  width: 100%;
  height: calc(90vh - 50px);
`;

const BackgroundImg = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
`;
