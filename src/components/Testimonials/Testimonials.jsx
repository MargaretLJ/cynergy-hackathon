import "./Testimonials.css";
import { Container, Row, Col } from "reactstrap";
import img from "../../assets/testimonial01.png";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoPlay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="testimonials_wrapper d-flex justify-content-between align-items-center">
              <div className="testimonial_img w-50">
                <img src={img} alt="" className="w-100" />
              </div>
              <div className="testimonial_content w-50">
                <h2 className="mb-4">Our students Voices</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single_testimonial w-100">
                      <h6 className="mb-3 fw-bold">Excellent course of materials</h6>
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>
                      <div className="student_info mt-4">
                        <h6 className="fw-bold">John Doe</h6>
                        <p>California,USA</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single_testimonial w-100">
                      <h6 className="mb-3 fw-bold">Excellent course of materials</h6>
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>
                      <div className="student_info mt-4">
                        <h6 className="fw-bold">John Doe</h6>
                        <p>California,USA</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single_testimonial w-100">
                      <h6 className="mb-3 fw-bold">Excellent course of materials</h6>
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>
                      <div className="student_info mt-4">
                        <h6 className="fw-bold">John Doe</h6>
                        <p>California,USA</p>
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
