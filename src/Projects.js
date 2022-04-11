import ProjectCards from "./ProjectCards";
import './Projects.css';
import { Container, Col, Row } from 'react-bootstrap';
import test from "../src/assets/images/me.jpg";

function Projects(){
    return(
      <>
        <h1 id="projectsText">Projects</h1>
        <Container>
          <Row id='row'>
            <Col id='col'>
              <ProjectCards
              title='HomeMatch'
              image={test}
              description='App to make finding a home easy and fun.'
              />
            </Col>
            <Col id='col'>
              <ProjectCards/>
            </Col>
            <Col id='col'>
              <ProjectCards/>
            </Col>
          </Row>
          <Row id='row'>
            <Col id='col'>
              <ProjectCards/>
            </Col>
            <Col id='col'>
              <ProjectCards/>
            </Col>
            <Col id='col'>
              <ProjectCards/>
            </Col>
          </Row>
        </Container>
      </ >
    )
}

export default Projects;