import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import sinfondo from "../assets/img/carlo/sinfondo.png"

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><NavLink to={"/"}><img src={sinfondo} alt='' width={"10%"}/></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to={"/milagros-eucaristicos"}>Milagros Eucaristicos</NavLink></Nav.Link>
            <Nav.Link><NavLink to={"/santos"}>Santos</NavLink></Nav.Link>
            <Nav.Link><NavLink to={"/apariciones-marianas"}>Apariciones Marianas</NavLink></Nav.Link>
            <NavDropdown title="Bibliografia" id="basic-nav-dropdown">
              <NavDropdown.Item><NavLink to={"/vida"}>Vida</NavLink></NavDropdown.Item>
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