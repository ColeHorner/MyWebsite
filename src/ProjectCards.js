import { Card, Button } from "react-bootstrap";
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
        <Button variant="dark">Check out my code</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;