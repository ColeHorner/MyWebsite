import { Outlet } from 'react-router-dom';
import './Home.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import test from "../src/assets/images/me.jpg";

function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image fluid roundedCircle src={test} />
          </Col>
          <Col xs={8}>
            <h3 class='infoText'>
              Hello!
            </h3>
            <p class='infoText'>
              I'm Cole welcome to my website. I'm very passionate about health, fitness, nutrition, all that jazz. I'm currently a software developer at Cuna Mutual Group.
            </p>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </>
  );
}

export default Home;
