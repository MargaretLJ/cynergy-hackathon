/* eslint-disable react/no-unknown-property */

import { Container, Row, Col } from "reactstrap";
import "./features.css";

const Features = () => {

    const FeatureData=[
        {
            title: 'Quick Learning',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            icon: "ri-draft-line"
        },

        {
            title: 'All time support',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            icon: "ri-discuss-line"
        },
        {
            title: 'Certification',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            icon: "ri-contacts-book-line"
        },
                     
    ]
  return (
    <section>
      <Container>
        <Row>

        {
         FeatureData.map((item,index)=><Col lg="4" md='6' key={index}>
            <div className="single_feature text-center px-4">
              <h2>
                <i class={item.icon}></i>
              </h2>
              <h6>{item.title}</h6>
              <p>
               {item.content}
              </p>
            </div>
          </Col>
)
        }
          
          
        </Row>
      </Container>
    </section>
  );
};

export default Features;
