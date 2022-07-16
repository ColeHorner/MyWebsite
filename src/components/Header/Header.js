import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import './Header.css';

function Header(){
  return(
    <Navbar className="navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;