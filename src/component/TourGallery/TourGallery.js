import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./TourGallery.css";
import data from "./TourData";

const TourGallery = () => {
  return (
    <section className="pt-5">
      <Container>
        <div className="title-info text-center mb-5">
          <p> Tour Gallery</p>
          <h2 className="fs-1 fw-bold text-blue">
            {" "}
            Traveller's <span className="text-orange">Journey</span>{" "}
          </h2>
        </div>
        <Row className="g-3">
          {data.map((singleData) => (
            <Col lg={singleData.id} md={4} key={singleData.key}>
              <div className="img-card">
                <img src={singleData.img} alt="gallery-img" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TourGallery;
