import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import orderImg from "../../images/order.svg";

const OrderPlaced = () => {
  return (
    <section>
      <Container>
        <div className="title-info text-center my-5">
          <p> Enjoy our Tour</p>
          <h2 className="fs-1 fw-bold text-blue">
            {" "}
            Place <span className="text-orange">Order</span>{" "}
          </h2>
        </div>
        <Row>
          <Col md={6}>
            <img src={orderImg} alt="order-img" />
          </Col>
          <Col md={6}>
            <Form>
              {/* Name */}
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" readOnly />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" readOnly />
              </Form.Group>

              {/* Package */}
              <Form.Group className="mb-3">
                <Form.Label>Tour Package</Form.Label>
                <Form.Control type="text" placeholder="Package Tour" readOnly />
              </Form.Group>

              {/* Price */}
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Package Price"
                  readOnly
                />
              </Form.Group>

              {/* select Date */}
              <Form.Group className="mb-3">
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  type="date"
                  required
                  placeholder="mm-dd-yyyy"
                  min="1997-01-01"
                  max="2080-12-31"
                />
              </Form.Group>

              {/* Description */}
              <Form.Group className="my-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={4} required />
              </Form.Group>

              {/* Error */}

              {/* <p className="text-danger my-3"> {error} </p> */}

              <button
                type="submit"
                className="main-btn px-4 py-1 text-white border-0 rounded-pill fs-5"
              >
                Place Order
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrderPlaced;
