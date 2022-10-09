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
import EventComponent from "./Components/EventComponent";
import GalleryContainer from "./Components/GalleryContainer";
import Membership from "./Components/Membership";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MembersCount from "./Components/MembersCount";

function App() {
  return (
    <BrowserRouter>
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
          <NavContainer id="/">
            <Navbar />
          </NavContainer>
          <Animator>
            <EventBoxContainer>
              <EventAlertBox>
                <EventPoster src="\Assets\eventposter\dpSeries.jpeg" />
                <EventContent>
                  <EventName>Dynamic Gnimmargorp series O(1)</EventName>
                  <br />
                  <EventBtn className="page-button ghost-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSfmuemOiXCPV8MprOfx--b09Z2_eJtMampDxqQaakJ-QHjLUw/viewform">
                    Register now
                  </EventBtn>
                  <br />
                </EventContent>
              </EventAlertBox>
            </EventBoxContainer>
          </Animator>
        </ScrollPage>
        <AboutUs />
        <VisionAndMission />
        <Societies />
        <Members />

        <ScrollPage>
          <EventComponent />
        </ScrollPage>
        <GalleryContainer />
        <Membership />
        <MembersCount />
        <Footer />
      </ScrollContainer>
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/society" element={<Societies />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<EventComponent />} />
        <Route path="/gallery" element={<GalleryContainer />} />
      </Routes>
    </BrowserRouter>
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

const EventAlertBox = styled.div`
  width: 80%;
  border: 1px solid #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid #004267;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 20px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 80%;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;

const EventBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EventContent = styled.div`
  text-align: center;
  margin-top: 30px;
  a {
    text-decoration: none;
    font-size: large;
    color: #007cc2;
  }
`;

const EventName = styled.p`
  font-family: Flamenco;
  color: #4c0067;
  font-size: 48px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: center;
  margin-bottom: 20px;
`;

const EventPoster = styled.img`
  width: 100%;
  height: calc(90vh - 100px);
  object-fit: contain;
`;

const EventBtn = styled.a`
font-size: 1.4rem;
color: #eeeeee;
transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
text-decoration: none;
padding: 0.75rem 1.25rem;
border-radius: 12px;
font-family: 'Montserrat', sans-serif;
outline: 1px solid #0288d1;

`