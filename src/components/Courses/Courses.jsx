/* eslint-disable react/no-unknown-property */

import { Container, Row, Col } from "reactstrap";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.jpg";
import "./Courses.css";
import CourseCard from "./CourseCard";

const courseData = [
  {
    id: "01",
    title: "Cybersec Bootcamp for beginners -2024",
    lesson: 15,
    students: 15.5,
    ratings: 5.9,
    imgurl: img2,
  },
  {
    id: "02",
    title: "AI/ML Bootcamp for beginners -2024",
    lesson: 15,
    students: 12.5,
    ratings: 5.9,
    imgurl: img3,
  },
  {
    id: "03",
    title: "Web-dev Bootcamp for beginners -2024",
    lesson: 16,
    students: 12.5,
    ratings: 5.9,
    imgurl: img4,
  },
];

const Courses = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="12" className="mb=5">
          <div className="course_top d-flex justify-content-between align-items-center ">
          <div className="course_top_left w-50">
              <h2>Our popular courses</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              
            </div>
            <div className="w-50 text-end">
            <button className="btn">See All</button>
          </div>
          </div>
          
           
          </Col>
          {courseData.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
