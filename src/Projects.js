import ProjectCards from "./ProjectCards";
import './Projects.css';
import { Container, Col, Row } from 'react-bootstrap';
import test1 from "../src/assets/images/axolotyl.jpg";
import test2 from "../src/assets/images/bird.jpg";
import test3 from "../src/assets/images/dog.jpg";
import test4 from "../src/assets/images/egypt_kitty_social.jpg";
import test5 from "../src/assets/images/me.jpg";
import test6 from "../src/assets/images/raccoon.jpg";

function Projects(){
    return(
      <>
        <h1 className="projectsText">Projects</h1>
        <Container>
          <Row lg={12}>
            <Col md={4} className='col'>
              <ProjectCards
              title='HomeMatch'
              image={test1}
              description='App to make finding a home easy and fun.'
              />
            </Col>
            <Col md={4} className='col'>
              <ProjectCards image={test2} />
            </Col>
            <Col md={4} className='col'>
              <ProjectCards image={test3} />
            </Col>
          </Row>
          <Row lg={12}>
            <Col md={4} className='col'>
              <ProjectCards image={test4} />
            </Col>
            <Col md={4} className='col'>
              <ProjectCards image={test5} />
            </Col>
            <Col md={4} className='col'>
              <ProjectCards image={test6} />
            </Col>
          </Row>
        </Container>
      </ >
    )
}

export default Projects;