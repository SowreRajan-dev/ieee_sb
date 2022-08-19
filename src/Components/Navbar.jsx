import React, { useState } from "react";
import styled from "styled-components";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <NavbarContainer clicked={navbarOpen}>
      <NavbarLeft>
        <IeeeLogo>
          <IEEEAndSairam
            src="Assets\Images\IeeeAndSairamLogo.png"
            alt="IEEE and Sairam"
          />
        </IeeeLogo>
      </NavbarLeft>
      <NavbarMiddle>
        <MenuLabel htmlFor="navi-toggle" onClick={handleToggle}>
          <Icon clicked={navbarOpen}>&nbsp;</Icon>
        </MenuLabel>
        <NavbarUl clicked={navbarOpen}>
          <NavbarLink>
            <NavbarLinkText>Home</NavbarLinkText>
          </NavbarLink>
          <NavbarLink>
            <NavbarLinkText>About Us</NavbarLinkText>
          </NavbarLink>
          <NavbarLink>
            <NavbarLinkText>Society</NavbarLinkText>
          </NavbarLink>
          <NavbarLink>
            <NavbarLinkText>Members</NavbarLinkText>
          </NavbarLink>
          <NavbarLink>
            <NavbarLinkText>Events</NavbarLinkText>
          </NavbarLink>
          <NavbarLink>
            <NavbarLinkText>Gallery</NavbarLinkText>
          </NavbarLink>
        </NavbarUl>
      </NavbarMiddle>
      <NavbarRight>
        <ContactUsContainer>
          <ContactUsBtn>Contact Us</ContactUsBtn>
        </ContactUsContainer>
      </NavbarRight>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  height: 90px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 950px) {
    ${(props) => {
      if (props.clicked) {
        return `
            height: 100vh;
            width: 100vw;
            background: #fff;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            `;
      }
    }}
  }
`;

const NavbarLeft = styled.div`
  flex: 1;
  height: 100%;
  padding: 10px 0;
  @media screen and (max-width: 950px) {
    flex: 0;
    margin-bottom: 20px;
  }
`;

const NavbarMiddle = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  position: relative;

  @media screen and (max-width: 950px) {
    align-items: center;
    justify-content: center;
    flex: 2;
  }
`;

const MenuLabel = styled.label`
  background-color: #ffffff;
  position: fixed;
  top: 10px;
  right: 10px;
  border-radius: 10px;
  height: 60px;
  width: 60px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;

  @media (min-width: 950px) {
    display: none;
  }
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 2rem;
  height: 2px;
  display: inline-block;
  margin-top: 2rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const NavbarRight = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 950px) {
    display: none;
  }
`;

const IeeeLogo = styled.div``;

const IEEEAndSairam = styled.img`
  object-fit: contain;
  cursor: pointer;
`;

const NavbarLink = styled.li`
  padding: 10px;
  list-style: none;
`;

const NavbarUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 950px) {
    display: ${(props) => (props.clicked ? "flex" : "none")};
    transition: all 0.3s ease-in-out;

    ${(props) => {
      if (props.clicked) {
        return `
          background: #fff;
          flex-direction: column;
          align-items: center;
           
    `;
      }
    }}
  }
`;

const NavbarLinkText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  font-family: "Montserrat", " sans-serif";
  text-transform: uppercase;
  cursor: pointer;
`;

const ContactUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactUsBtn = styled.button`
  background: #005f94;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  width: 100%;
  font-size: 0.75rem;
  height: 40px;
  font-weight: 700;
  font-family: "Montserrat", " sans-serif";
  cursor: pointer;
  &:hover {
    background: #004578;
  }
`;
