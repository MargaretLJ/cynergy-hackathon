import "./Testimonials.css";
import { Container, Row, Col } from "reactstrap";
import img from "../../assets/testimonial01.png";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoPlay: true,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="testimonials_wrapper d-flex justify-content-between">
              <div className="testimonial_img w-50">
                <img src={img} alt="" className="w-100" />
              </div>
              <div className="testimonial_content w-50">
                <h2>Our students Voices</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single_testimonial w-50">
                      <h6>excellent course</h6>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris
                      </p>
                      <div className="student_info">
                        <h6>John Doe</h6>
                        <p>Claifornia,USA</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
