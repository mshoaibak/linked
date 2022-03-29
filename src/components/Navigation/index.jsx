import "./Nav.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../../assest/serviceImages/logo.png";
import Logo2 from "../../assest/serviceImages/logo2.png";

const Navigation = () => {
  return (
    <>
      <Navbar bg="transparent" expand="lg" className="main-nav">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            <img width={100} height={100} src={Logo} alt={"logo"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                href="#services"
                className="text-white font-weight-bold link"
              >
                Services
              </Nav.Link>

              <Nav.Link
                href="#contact"
                className="text-white font-weight-bold link"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="/about"
                className="text-white font-weight-bold link"
              >
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
