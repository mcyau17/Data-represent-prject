import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateCharacter from './components/createcharacter';
import ViewCharacters from './components/viewcharacters';
import EditCharacters from './components/editcharacters';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/createcharacter">Create</Nav.Link>
            <Nav.Link href="/viewcharacters">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/viewcharacters' element={<ViewCharacters></ViewCharacters>}></Route>
        <Route path='/createcharacter' element={<CreateCharacter></CreateCharacter>}></Route>
        <Route path='/editcharacters/:id' element={<EditCharacters></EditCharacters>}></Route>
      </Routes>
      {/* <Header></Header>
      <Content></Content>
      <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
