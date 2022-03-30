import "./Nav.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../../assest/serviceImages/logo.png";
import Logo2 from "../../assest/serviceImages/logo2.png";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [fixNav, setFixNav] = useState(false);

  const toggleVisible = () => {
    if (document.documentElement.scrollTop >= 66) {
      // console.log("kkk");
      setFixNav(true);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  // useEffect(() => {
  //   if (document.documentElement.scrollTop >= 66) {
  //     console.log("kkk");
  //     setFixNav(true);
  //   }
  // });

  return (
    <>
      <Navbar
        bg={fixNav ? "white" : "transparant"}
        expand="lg"
        className="main-nav"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className={fixNav ? "text-dark" : "text-white"}
          >
            <img width={100} height={100} src={Logo} alt={"logo"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                href="#services"
                className={`text-dark font-weight-bold link`}
              >
                Services
              </Nav.Link>

              <Nav.Link
                href="#contact"
                className="text-dark font-weight-bold link"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="/about"
                className="text-dark font-weight-bold link"
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
