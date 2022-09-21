import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Email",
    detail: "Chughtaimubeen5@gmail.com",
  },
  {
    display: "Phone Number",
    detail: "03022070126",
  },

  {
    display: "Address",
    detail: "Sir syed town, North karachi",
  },
];

const ContactDetail = () => {
  return (
    <Container>
      {categoryData.map((item, index) => (
        //   <Col lg="4" md="4" sm="6" xs="6" className="mb-4" key={index}>
        <Row>
          <div
            className="category__item d-flex align-items-center gap-3"
            style={{ margin: "1rem 0" }}
          >
            <div className="category__img">
              <h3>{item.display}</h3>
            </div>
            <h6>{item.detail}</h6>
          </div>
        </Row>

        //   </Col>
      ))}
    </Container>
  );
};

export default ContactDetail;
