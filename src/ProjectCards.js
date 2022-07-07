import { Card, Button, Nav } from "react-bootstrap";
import './ProjectCards.css';

function ProjectCards(props) {
  return(
    <Card className="text-center" style={{width: '18em'}}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img variant="top" src={props.image} alt="picture" />
        <Card.Text>
          {props.description}
        </Card.Text>
        <Nav.Link href="https://github.com/ColeHorner/HomeMatch">
          <Button  variant="dark">Repo</Button>
        </Nav.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;