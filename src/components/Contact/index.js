import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./contact.css";
import icon from "../../assest/serviceImages/hh.png";
const Contact = () => {
  return (
    <>
      <div className="contact-main" id="contact">
        <Container>
          <h4 className="font-weight-bold">Contact Us</h4>

          <Row>
            <Col sm={12} md={8}>
              <form>
                <input className="txtbox" type={"text"} placeholder="Name" />
                <input className="txtbox" type={"email"} placeholder="Email" />
                <br />
                <input className="txtbox" type={"phone"} placeholder="Phone" />
                <input
                  className="txtbox"
                  type={"text"}
                  placeholder="Organization"
                />
                <br />
                <textarea className="txtarea" placeholder="Message" />
                <br />
                <input className="chkbox" type={"checkbox"} />
                <label className="font-weight-bold">
                  check here to subscribe for updates
                </label>
                <br />
                <input
                  className="btnn font-weight-bold"
                  type={"button"}
                  value="send"
                />
              </form>
            </Col>
            <Col sm={12} md={4}>
              <div className="contactRight">
                <img alt="contact" width={200} height={100} src={icon} />
                <div>
                  <h5 className="font-weight-bold">Jason Frost</h5>
                  <h6 className="font-weight-bold">Manager</h6>
                  <h6 className="blue font-weight-bold">dummy@gmail.com</h6>
                  <h6 className="blue font-weight-bold">+92 2347612</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
