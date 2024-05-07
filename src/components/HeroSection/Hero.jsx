import { Container, Row, Col } from "reactstrap";
import './Hero.css';

export const Hero = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <h2 className="mb-4 hero_title">Anytime anything , learn on your schedule </h2>
                <p className="mb-5"> Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!</p>
                <div className="search">
                  <input type="text" placeholder="Search" />
                  <button className="btn">Search</button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src="img.svg" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
