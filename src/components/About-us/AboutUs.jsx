import img1 from "../../assets/img1.jpg";
import "./About.css";
import { Container, Row, Col } from "reactstrap";
import  CountUp  from "react-countup";
import "./About.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about_img">
              <img src={img1} alt="" className="w=100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about_content">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. .
              </p>
              <div className="about_counter">
                <div className="d-flex gap-5 align-items-center">
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter_title">Completed Projects</p>
                  </div>
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="K" />
                    </span>

                    <p className="counter_title">Patient around the world</p>
                  </div>
                </div>
                <div className="d-flex gap-5 align-items-center">
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter_title">Completed Projects</p>
                  </div>
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter_title">Patient around the world</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;


