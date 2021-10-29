import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import bannerImg from "../../images/banner.png";

const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <div className="banner-info">
              <h2 className="fw-bold">
                {" "}
                Travel Around World{" "}
                <span className="d-block">
                  {" "}
                  With <span className="text-orange"> TraveloPro </span>{" "}
                </span>{" "}
              </h2>
              <p className="my-3 text-secondary">
                We are providing best Travel Service for you. You can visit your
                favourite country with a optimum budget. We are provide a vast
                service through Nepal, Russia, USA, Canada, UAE, Australia,
                Maldives, RSA, UK, Norway, Iceland, Germany, Japan, China,
                Turkey, Quatar, and so on.
              </p>
              <button className="main-btn px-5 py-2 rounded-pill border-0 text-white fs-5">
                {" "}
                <i class="far fa-calendar me-2"></i>
                See Packages
              </button>
            </div>
          </Col>
          <Col md={6}>
            <img src={bannerImg} alt="bannerImg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
