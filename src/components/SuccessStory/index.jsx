import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./SuccessStory.css";
import image from "../../assest/serviceImages/hh.png";
import c from "../../assest/c.png";

import icon from "../../assest/serviceImages/icon.png";
import { SuccessData } from "../../assest/SuccessData";

const SuccessStory = () => {
  return (
    <>
      <div className="main">
        <Carousel>
          <Carousel.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Container>
                <Row style={{ height: "70vh" }}>
                  <Col md={4} style={{ height: "70vh" }}>
                    <img
                      width={"100%"}
                      height={"100%"}
                      style={{ objectFit: "cover" }}
                      src={image}
                      alt="First slide"
                    />
                  </Col>
                  <Col
                    md={8}
                    style={{
                      height: "70vh",
                      padding: "20px 20px",
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "column",
                    }}
                  >
                    <hr />

                    <img
                      width={50}
                      height={50}
                      //   className="d-block w-100"
                      src={icon}
                      alt="First slide"
                    />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <hr />
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Container>
                <Row style={{ height: "70vh" }}>
                  <Col md={4} style={{ height: "70vh" }}>
                    <img
                      width={"100%"}
                      height={"100%"}
                      style={{ objectFit: "cover" }}
                      src={image}
                      alt="First slide"
                    />
                  </Col>
                  <Col
                    md={8}
                    style={{
                      height: "70vh",
                      padding: "20px 20px",
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "column",
                    }}
                  >
                    <hr />

                    <img
                      width={50}
                      height={50}
                      //   className="d-block w-100"
                      src={icon}
                      alt="First slide"
                    />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <hr />
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Container>
                <Row style={{ height: "70vh" }}>
                  <Col md={4} style={{ height: "70vh" }}>
                    <img
                      //   width={200}
                      //   height={400}
                      width={"100%"}
                      height={"100%"}
                      style={{ objectFit: "cover" }}
                      src={image}
                      alt="First slide"
                    />
                  </Col>
                  <Col
                    md={8}
                    style={{
                      height: "70vh",
                      padding: "20px 20px",
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "column",
                    }}
                  >
                    <hr />

                    <img
                      width={50}
                      height={50}
                      //   className="d-block w-100"
                      src={icon}
                      alt="First slide"
                    />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <hr />
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default SuccessStory;
