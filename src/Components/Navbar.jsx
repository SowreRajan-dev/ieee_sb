import React from "react";
import { useState , Fragment } from "react";
import styled from "styled-components";

function Navbar() {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <Fragment>
      <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
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
    </Nav>
    </Fragment>
  );
}

export default Navbar;


export const Nav = styled.nav`
   background: transparent;
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   /* Fix your navbar by using below two lines of code */
   position: sticky;
   top:0;
   /* Fix your navbar by using above two lines of code */
   z-index: 10;
`
const NavbarContainer = styled.div`
  height: 90px;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 2; */
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
  width: 150px;
  font-size: 0.75rem;
  height: 40px;
  font-weight: 700;
  font-family: "Montserrat", " sans-serif";
  cursor: pointer;
  &:hover {
    background: #004578;
  }
`;
