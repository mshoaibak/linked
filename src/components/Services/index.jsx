import { ServicesData } from "../../assest/ServicesData";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./services.css";
const Services = () => {
  return (
    <>
      <div className="services-main" id="services">
        <h1 className="text-center mb-5 mt-5 font-weight-bold text-dark ">
          Services
        </h1>
        <Container>
          <Row style={{ width: "100%", margin: "0 auto" }} className="mx-auto">
            {ServicesData.map((val) => {
              return (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  // style={{ margin: "15px 40px" }}
                  className="service-card "
                >
                  <div
                    className="serve mx-auto"
                    style={{
                      width: "90%",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={val.icon}
                      alt="service"
                      width={50}
                      height={50}
                      style={{ marginLeft: "20px", marginTop: "20px" }}
                    />
                    <Card.Body>
                      <h2 className="text-dark font-weight-bold">
                        {val.title}
                      </h2>
                      <h6 className="text-dark font-weight-bold">{val.text}</h6>
                    </Card.Body>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Services;
