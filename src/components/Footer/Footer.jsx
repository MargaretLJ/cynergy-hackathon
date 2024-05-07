/* eslint-disable react/no-unknown-property */
import { Container, Row, Col, ListGroup,ListGroupItem } from "reactstrap";
import './Footer.css';

const Footer = () => {

    const footerQuickLinks=[
        {
            display: 'Home',
            url: "#"

        },
        {
            display: 'About Us',
            url: "#"

        },
        {
            display: 'Courses',
            url: "#"

        },
        {
            display: 'Pages',
            url: "#"

        },
        {
            display: 'Blog',
            url: "#"

        }
    ];

    const footerInfoLinks=[
        {
            display: 'Privacy Policy',
            url: "#"

        },
        {
            display: 'Membership',
            url: "#"

        },
        {
            display: 'Purchase Guide',
            url: "#"

        },
        {
            display: 'Terms of Service',
            url: "#"

        },
       
    ];
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <h2 className="d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i>Learners
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span className="d-flex align-items-center">
                <a href="https://www.facebook.com/">
                <i class="ri-facebook-fill"></i>
                </a>
              </span>

              <span className="d-flex align-items-center">
                <a href="https://www.instagram.com/">
                <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span className="d-flex align-items-center">
                <a href="https://www.linkedin.com/"><i class="ri-linkedin-box-fill"></i>
                </a>
              </span>

              <span className="d-flex align-items-center">
                <a href="https://twitter.com/?lang=en">
                <i class="ri-twitter-x-fill"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3">
          <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link_list">
                {
                    footerQuickLinks.map((item,index)=>(<ListGroupItem key={index} className="border-0 ps-0 link_item"><a href={item.url}>{item.display}</a></ListGroupItem>))
                }
            </ListGroup>
          </Col>

          <Col lg="3">
          <h6 className="fw-bold">Information</h6>
            <ListGroup className="link_list">
                {
                    footerInfoLinks.map((item,index)=>(<ListGroupItem key={index}  className="border-0 ps-0 link_item"><a href={item.url}>{item.display}</a></ListGroupItem>))
                }
            </ListGroup>
          </Col>

          <Col lg="3">
            <h6 className="fw-bold">Get in Touch</h6>
            <p>Address: Bengaluru,Karnataka</p>
            <p>Phone: +91 9606578010</p>
            <p> Email: margaretlj04@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
