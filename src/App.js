import './App.css';
import { ToastContainer, toast } from "react-toastify"
import Header from "./Components/Header"
import { Container, Row, Col } from 'reactstrap';
import LeftMenu from './Components/leftMenu';
import Home from './Components/Home'

function App() {

  const btnHandle = () => {
    toast.error("This is my first message", {
      position: 'top-center'
    });
  };

  return (
    <div>
      <ToastContainer />
      <Container>
      <Header></Header>  
        <Row>
          <Col md={4}>
          <LeftMenu/>
          </Col>
          <Col md={8}>
          <Home/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
