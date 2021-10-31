import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const OrderPlaced = () => {
  // state declaration
  const [singlePackage, setSinglePackage] = useState({});
  const dateRef = useRef();
  const descRef = useRef();
  const history = useHistory();

  // get User Info
  const { user } = useAuth();

  // get id from the url
  const { id } = useParams();

  // get package info
  useEffect(() => {
    fetch(`http://localhost:5000/packages/${id}`)
      .then((res) => res.json())
      .then((data) => setSinglePackage(data));
  }, [id]);

  // Function HandleOrder
  const handleOrder = (e) => {
    e.preventDefault();

    const date = dateRef.current.value;
    const desc = descRef.current.value;

    const myOrderObj = {
      name: user.displayName,
      email: user.email,
      title: singlePackage.title,
      price: singlePackage.price,
      date,
      myDesc: desc,
      img: singlePackage.img,
      status: "Pending",
    };

    // post to Database
    fetch("http://localhost:5000/orderlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myOrderObj),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Great Job",
          text: "Your Order is placed successfully",
          icon: "success",
          confirmButtonColor: "#FD642F",
        });
      });

    // clear value
    dateRef.current.value = "";
    descRef.current.value = "";

    // send to my order page
    history.push("/myorder");
  };

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
          <Col md={6} className="d-flex align-items-center">
            <img src={singlePackage.img} alt="order-img" />
          </Col>
          <Col md={6}>
            <Form onSubmit={handleOrder}>
              {/* Name */}
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  value={user.displayName}
                  readOnly
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  readOnly
                />
              </Form.Group>

              {/* Package */}
              <Form.Group className="mb-3">
                <Form.Label>Tour Package</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Package Tour"
                  value={singlePackage.title ? singlePackage.title : ""}
                  readOnly
                />
              </Form.Group>

              {/* Price */}
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Package Price in Dollar"
                  value={singlePackage.price ? singlePackage.price : ""}
                  readOnly
                />
              </Form.Group>

              {/* select Date */}
              <Form.Group className="mb-3">
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  ref={dateRef}
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
                <Form.Control as="textarea" rows={4} required ref={descRef} />
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
