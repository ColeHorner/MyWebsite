import { Outlet } from 'react-router-dom';
import './Home.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { myPicture, homeText } from '../../assets/constants/constants';

function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={4}>
            <Image fluid roundedCircle src={myPicture} />
          </Col>
          <Col xs={8}>
            <h3 className='infoText'>
              Hello!
            </h3>
            <p className='infoText'>
            {homeText}
            </p>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </>
  );
}

export default Home;
