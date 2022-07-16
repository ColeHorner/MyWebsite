import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

function Header(){
  const [navbarOpen, setNavbarOpen] = useState(false);
  return(
    <>
      <Navbar bg="light">
        <Container>
            <Nav>
              <Nav.Link 
                className="text" 
                href="/" 
              >
                Home
              </Nav.Link>
              <Nav.Link 
                className="text" 
                href="/projects"
              >
              Projects
              </Nav.Link>
            </Nav>
            <Nav className="icon">
              <Nav.Link 
                target={'_blank'}
                href='https://github.com/colehorner'
              >
                <AiOutlineGithub/>
              </Nav.Link>
              <Nav.Link 
                target={'_blank'}
                href='https://www.linkedin.com/in/cole-horner/'
              >
                <AiFillLinkedin/>
              </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;