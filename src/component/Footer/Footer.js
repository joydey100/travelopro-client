import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mt-5 text-white">
      <Container>
        <Row>
          {/* Footer 1  */}
          <Col lg={4} md={6}>
            <div className="footer-info mt-3 mt-md-0">
              <h4 className="mb-3"> Travelopro </h4>
              <p className="text-light lh-lg">
                {" "}
                We are providing best Travel Service for you. We are provide a
                vast service through Russia, USA, Canada, UAE, Australia,
                Maldives, UK, Iceland, Germany, Japan, Quatar, and so on.
              </p>
            </div>
          </Col>

          {/* Footer 2 - important links */}
          <Col lg={3} md={6}>
            <div className="footer-info mt-3 mt-md-0 ps-lg-3">
              <h4 className="mb-3">Important Links</h4>
              <div className="contact-info">
                <Link
                  to="/"
                  className="d-block text-decoration-none text-white mb-2"
                >
                  Home
                </Link>
                <Link
                  to="/"
                  className="d-block text-decoration-none text-white mb-2"
                >
                  About
                </Link>
                <Link
                  to="/"
                  className="d-block text-decoration-none text-white mb-2"
                >
                  Packages
                </Link>
                <Link
                  to="/"
                  className="d-block text-decoration-none text-white mb-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Col>

          {/* Footer 3 */}
          <Col lg={2} md={6}>
            <div className="footer-info mt-3 mt-md-0">
              <h4 className="mb-3">Social Media</h4>
              <div className="contact-info">
                <Link
                  to="/"
                  className="d-block text-decoration-none text-white mb-2"
                >
                  Facebook
                </Link>
                <Link
                  to="/"
                  className="d-block text-decoration-none text-white mb-2"
                >
                  Twitter
                </Link>
                <Link
                  to="/"
                  className="d-block text-decoration-none text-white mb-2"
                >
                  Instagram
                </Link>
                <Link
                  to="/"
                  className="d-block text-decoration-none text-white mb-2"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </Col>

          {/* Footer 4 */}
          <Col lg={3} md={6}>
            <div className="footer-info mt-3 mt-md-0">
              <h4 className="mb-3"> Contact Information </h4>
              <p className="text-light mb-3">
                {" "}
                You can contact with us through E-mail, Phone and our social
                media site. Also we are available in offline office.
              </p>
              <div className="contact-info">
                <Link
                  to="/"
                  className="d-block text-decoration-none text-white mb-2"
                >
                  {" "}
                  +1-23456-789{" "}
                </Link>
                <Link
                  to="/"
                  className="d-block text-decoration-none text-white mb-2"
                >
                  {" "}
                  travelopro@gmail.com{" "}
                </Link>
                <Link
                  to="/"
                  className="d-block text-decoration-none text-white mb-2"
                >
                  {" "}
                  Sector: 07, Uttara, Dhaka{" "}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright text-center p-3 mt-5">
        &copy; Copyright Reserved by Travelopro
      </div>
    </footer>
  );
};

export default Footer;
