import './App.css';
import { ToastContainer, toast } from "react-toastify"
import Header from "./Components/Header"
import { Container, Row, Col } from 'reactstrap';
import LeftMenu from './Components/leftMenu';
import Home from './Components/Home'
import AddCourse from "./Components/AddCourse"
import ViewCourses from "./Components/AllCourses"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

function App() {

  const btnHandle = () => {
    toast.error("This is my first message", {
      position: 'top-center'
    });
  };

  return (
    <div>
      <ToastContainer />
      <Router>
        <Container>
          <Header></Header>
          <Row>
            <Col md={4}>
              <LeftMenu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path='/' Component={Home} exact />
                <Route path='/add-course' Component={AddCourse} exact />
                <Route path='/view-courses' Component={ViewCourses} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
