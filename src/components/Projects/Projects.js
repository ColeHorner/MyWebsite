import ProjectCards from "../ProjectCards/ProjectCards";
import './Projects.css';
import { Container, Col, Row } from 'react-bootstrap';
import { projectTitles, projectImages, projectDescriptions, projectLinks } from '../../assets/constants/constants'

function Projects(){
  return(
  <>
    <h1 className="projectsText">Projects</h1>
    <Container>
      <Row lg={12}>
        {[...Array(projectTitles.length)].map((e, i) => {
          return (
            <Col key={i} md={4} className='col'>
              <ProjectCards
                title={projectTitles[i]}
                image={projectImages[i]}
                description={projectDescriptions[i]}
                link={projectLinks[i]}
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