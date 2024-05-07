/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */

import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/img4.jpg";
import courseImg2 from "../../assets/img3.png";
import courseImg3 from "../../assets/img2.png";
import courseImg4 from "../../assets/img1.jpg";

import "./freecourse.css";
import Freecoursecard from "./Freecoursecard";
const Freecourse = () => {
  const freeCourseData = [
    {
      id: "01",
      title: "Basic Web Development Course",
      imgurl: courseImg1,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "02",
      title: "Coding for Junior Basic Course",
      imgurl: courseImg2,
      students: 5.3,
      rating: 1.7,
    },

    {
      id: "03",
      title: "Search Engine Optimization - Basic",
      imgurl: courseImg3,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "04",
      title: "React and Redux",
      imgurl: courseImg4,
      students: 5.3,
      rating: 1.7,
    },
  ];

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5 ">
            <h2 className="fw-bold">Our free courses</h2>
          </Col>
          {freeCourseData.map((item) => (
            <Col lg="3">
              <Freecoursecard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Freecourse;
