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
            <h2 class='infoText'>
              Test
            </h2>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </>
  );
}

export default Home;
