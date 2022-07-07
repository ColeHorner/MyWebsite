import ProjectCards from "./ProjectCards";
import './Projects.css';
import { Container, Col, Row } from 'react-bootstrap';
import test1 from "../src/assets/images/axolotyl.jpg";
import test2 from "../src/assets/images/bird.jpg";
import test3 from "../src/assets/images/dog.jpg";
import test4 from "../src/assets/images/egypt_kitty_social.jpg";
import test5 from "../src/assets/images/me.jpg";
import test6 from "../src/assets/images/raccoon.jpg";
const numberOfCards = 7;

function Projects(){
  return(
  <>
    <h1 className="projectsText">Projects</h1>
    <Container>
      <Row lg={12}>
        {[...Array(numberOfCards)].map((e, i) => {
          return (
            <Col key={i} md={4} className='col'>
              <ProjectCards
                title='HomeMatch'
                image={test1}
                description='App to make finding a home easy and fun.'
                />
            </Col>
          )
        })}
      </Row>
    </Container>
  </>
  )
}

export default Projects;