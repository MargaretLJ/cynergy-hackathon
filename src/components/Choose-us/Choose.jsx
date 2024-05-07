/* eslint-disable react/no-unknown-property */
import { Container, Row, Col } from "reactstrap";
import chooseimg from "../../assets/why-choose-us.png";
import "./Choose.css";
import ReactPlayer from "react-player";
import { useState } from "react";
const Choose = () => {
  const [showVideo, setshowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="choose_content">
              <h2>Why Choose us</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="choose_img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=F2YpXC1itEE&pp=ygUMcGVkcm8gcmFjb29u"
                  controls
                  width="100%"
                  height="300px"
                />
              ) : (
                <img src={chooseimg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play_icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setshowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Choose;
