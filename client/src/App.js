import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Post from './pages/post';
import Create from './pages/create';
import Edit from './pages/edit';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">My Blog!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/posts/new">New</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="https://mern-blog-sample.netlify.app/" element={<Home />} />
        <Route path="https://mern-blog-sample.netlify.app/posts/:id" element={<Post />} />
        <Route path="https://mern-blog-sample.netlify.app/posts/new" element={<Create />} />
        <Route path="https://mern-blog-sample.netlify.app/posts/:id/edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
