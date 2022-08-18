import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <IeeeLogo>
          <IEEEAndSairam
            src="Assets\Images\IeeeAndSairamLogo.png"
            alt="IEEE and Sairam"
          />
        </IeeeLogo>
      </NavbarLeft>
      <NavbarMiddle>
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
`;

const NavbarLeft = styled.div`
  flex: 1;
  height: 100%;
  padding: 10px 0;
`;

const NavbarMiddle = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const NavbarRight = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IeeeLogo = styled.div``;

const IEEEAndSairam = styled.img`
  object-fit: contain;
  cursor: pointer;
`;

const NavbarLink = styled.div`
  padding: 10px;
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
