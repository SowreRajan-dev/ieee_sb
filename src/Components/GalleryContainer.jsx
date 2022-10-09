import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function GalleryContainer() {
  return (
    <>
    <GalleryTag id="gallery"/>
    <GalleryCover>
      <GalleryText>Gallery</GalleryText>
      <GalleryCarousaul>
        <Carousel
          autoPlay
          adaptiveHeight={true}
          showStatus
          showIndicators
          className="carousel"
          infiniteLoop
          showThumbs={false}
        >
          <EventposterContainer>
            <EventPoster
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="carousaul"
            />
          </EventposterContainer>
          <EventposterContainer>
            <EventPoster
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="carousaul"
            />
          </EventposterContainer>
          <EventposterContainer>
            <EventPoster
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="carousaul"
            />
          </EventposterContainer>
        </Carousel>
      </GalleryCarousaul>
    </GalleryCover>
    </>
  );
}

export default GalleryContainer;

const GalleryTag = styled.div``

const GalleryCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top:5rem;
`;

const GalleryText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #005f94;
  letter-spacing: 2px;
`;

const GalleryCarousaul = styled.div`
  width: 80%;
  height: 600px;
  margin-top: 20px;

  .carousel {
    width: 100%;
    height: 100%;
  }
`;

const EventposterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const EventPoster = styled.img`
  width: 100%;
  height: 100%;
`;

const EventText = styled.p``;
