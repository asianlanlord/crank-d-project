import './App.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

// Get DayPicker package and related styles.
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

// Import images & logos
import Nat_Profile from './Assets/Nat_Profile.png';
import Crankd_Logo from './Assets/CRANKD_LOGO.svg';


function App() {
  const modifiers = {
    birthday: new Date(),
  }

  const customStyles = {
    birthday: {
      color: '#F47B6B',
      backgroundColor: 'white',
      fontWeight: 400,
    },

  }
  
  return (
    <div className="App">
      <Container>
        <img src={Crankd_Logo} id="logo" alt="Crank'd Logo"/>
        <Row>
          <Col lg="6" md="6" sm="12" xs="12" id="left-column">
            <img src={Nat_Profile} id="profile-pic" alt="Nathaniel's profile" />
            <p id="left-col-header"> Meet with Nathaniel </p>
            <DayPicker
              modifiers={modifiers}
              modifiersStyles={customStyles}
            />
          </Col>
          <Col lg="6" md="6" sm="12" xs="12" id="right-column">
            <p id="right-col-header"> Meeting Duration </p>
            <ListGroup>
              <ListGroup.Item id="duration-selector"> 30 mins </ListGroup.Item>
            </ListGroup>
            <p id="right-col-header" > What time works best? </p>
            <Scrollbars style={{ width: '100%', height: '50%' }}>
              <ListGroup id="time-selector">
                <ListGroup.Item> 12:00 </ListGroup.Item>
                <ListGroup.Item> 12:30 </ListGroup.Item>
                <ListGroup.Item> 13:00 </ListGroup.Item>
                <ListGroup.Item> 13:30 </ListGroup.Item>
                <ListGroup.Item> 14:00 </ListGroup.Item>
                <ListGroup.Item> 14:30 </ListGroup.Item>
                <ListGroup.Item> 15:00 </ListGroup.Item>
                <ListGroup.Item> 15:30 </ListGroup.Item>
              </ListGroup>
            </Scrollbars>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
