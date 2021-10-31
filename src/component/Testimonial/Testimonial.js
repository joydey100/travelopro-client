import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import reviews from "./reviewData";
import "./Testimonial.css";

const Testimonial = () => {
  // index setting
  const [index, setIndex] = useState(0);

  // Destructuring
  const { name, job, img, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const handleChange = (isPlus) => {
    if (isPlus === "plus") {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      });
    } else {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      });
    }
  };

  return (
    <section className="pt-5">
      <Container>
        <div className="title-info text-center mb-5">
          <p> Client Testimonial</p>
          <h2 className="fs-1 fw-bold text-blue">
            {" "}
            What Traveller's <span className="text-orange">Say</span>{" "}
          </h2>
        </div>
        <Row>
          <Col lg={7} md={11} className="mx-auto">
            <Card className="shadow p-5 d-flex align-items-center justify-content-between flex-row">
              <div className="left-icon" onClick={() => handleChange("minus")}>
                <i className="fas fa-chevron-left"></i>
              </div>
              <div className="info text-center">
                <img src={img} alt="reviewer-img" />
                <h4 className="my-3 text-blue fw-bold">{name}</h4>
                <p className="text-orange mb-3">{job}</p>
                <p className="mb-3 text-secondary px-3">{text}</p>
              </div>
              <div className="right-icon" onClick={() => handleChange("plus")}>
                <i className="fas fa-chevron-right"></i>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
