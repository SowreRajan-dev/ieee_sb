import React from "react";
import styled from "styled-components";

function EventComponent() {
  return (
    <EventContainer>
      <EventHead>EVENTS</EventHead>
      <EventLists>
        <EventCard>
          <EventImages src="\Assets\Images\bgEvent.jpeg" alt="event-bg" />
          <EventContent>WarRos'21</EventContent>
        </EventCard>
        <EventCard>
          <EventImages src="\Assets\Images\bgEvent.jpeg" alt="event-bg" />
          <EventContent>Kalaisaral</EventContent>
        </EventCard>
        <EventCard>
          <EventImages src="\Assets\Images\bgEvent.jpeg" alt="event-bg" />
          <EventContent>Quizz o grand</EventContent>
        </EventCard>
        <EventCard>
          <EventImages src="\Assets\Images\bgEvent.jpeg" alt="event-bg" />
          <EventContent>Technofest</EventContent>
        </EventCard>
        <EventCard>
          <EventImages src="\Assets\Images\bgEvent.jpeg" alt="event-bg" />
          <EventContent>Mind Hack</EventContent>
        </EventCard>
        <EventCard>
          <EventImages src="\Assets\Images\bgEvent.jpeg" alt="event-bg" />
          <EventContent>Dp series</EventContent>
        </EventCard>
      </EventLists>
      <EventAlert>
        <EventAlertContainer>
          <EventLinks>
            <EventTexts>CIS Society inaugurations</EventTexts>
            <EventSeperator />
          </EventLinks>
          <EventLinks>
            <EventTexts>CIS Society inaugurations</EventTexts>
            <EventSeperator />
          </EventLinks>
          <EventLinks>
            <EventTexts>CIS Society inaugurations</EventTexts>
            <EventSeperator />
          </EventLinks>
          <EventLinks>
            <EventTexts>CIS Society inaugurations</EventTexts>
          </EventLinks>
        </EventAlertContainer>
      </EventAlert>
    </EventContainer>
  );
}

export default EventComponent;

const EventContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const EventHead = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #005f94;
`;

const EventLists = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  place-items: center;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
`;

const EventCard = styled.div`
  width: 180px;
  height: 150px;
  margin-top: 20px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

const EventImages = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  opacity: 0.7;
`;

const EventContent = styled.div`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  position: absolute;
  color: #00656b;
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const EventAlert = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const EventAlertContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  padding: 20px;
  border-radius: 20px;
  flex-direction: column;
`;

const EventTexts = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 44px;
  text-align: center;
  letter-spacing: 0.05em;
  color: rgba(2, 90, 0, 0.81);
`;

const EventSeperator = styled.div`
  width: 100%;
  height: 1px;
  background: #bababa;
  border-radius: 20px;
`;

const EventLinks = styled.div`
  padding: 10px;
  margin-top: 20px;
`;
