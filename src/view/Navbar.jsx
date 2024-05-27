import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Carlo Acutis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Milagros Eucaristicos</Nav.Link>
            <Nav.Link href="#link">Santos</Nav.Link>
            <Nav.Link href="#link">Apariciones Marianas</Nav.Link>
            <NavDropdown title="Bibliografia" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Vida</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Linea de tiempo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Enfermedad</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;