import { ServicesData } from "../../assest/ServicesData";
import { Card, Row, Col } from "react-bootstrap";
import "./services.css";
const Services = () => {
  return (
    <>
      <div className="services-main" id="services">
        <h1 className="text-center mb-5 mt-5 font-weight-bold text-dark ">
          Services
        </h1>
        <Row style={{ width: "100%", margin: "0 auto" }} className="mx-auto">
          {ServicesData.map((val) => {
            return (
              <Col
                sm={12}
                md={3}
                style={{ margin: "15px 40px" }}
                className="service-card"
              >
                {/* <Card className="bg-transparent"> */}
                <img
                  src={val.icon}
                  alt="service"
                  width={50}
                  height={50}
                  style={{ marginLeft: "20px", marginTop: "20px" }}
                />
                <Card.Body>
                  <h2 className="text-dark font-weight-bold">{val.title}</h2>
                  <h6 className="text-dark font-weight-bold">{val.text}</h6>
                </Card.Body>
                {/* </Card> */}
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};
export default Services;
