import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

const AddEvent = () => {
  //   Event / Package info
  const [info, setInfo] = useState({
    img: "",
    price: "",
    title: "",
    desc: "",
    city: "",
  });

  //   history
  const history = useHistory();

  //   handle a  new event function
  const handleNewEvent = (e) => {
    e.preventDefault();

    // Post Data
    fetch("https://howling-treat-27967.herokuapp.com/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Great Job",
          text: "You Created a Package Successfully",
          icon: "success",
          confirmButtonColor: "#FD642F",
        });

        // load after 1 second [for update data after post]
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      });

    //   push to service
    history.push("/services");
  };

  return (
    <section>
      <Container>
        <div className="title-info text-center my-5">
          <p> Add a Event</p>
          <h2 className="fs-1 fw-bold text-blue mb-4">
            {" "}
            Add New <span className="text-orange">Tour Plan</span>
          </h2>
        </div>
        <Form className="mt-5" onSubmit={handleNewEvent}>
          <Row className="g-4">
            {/* left Side */}
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Package Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add Title"
                  onBlur={(e) => setInfo({ ...info, title: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Package Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Add Description"
                  onBlur={(e) => setInfo({ ...info, desc: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>

            <Col lg={6}>
              {/* Add city */}
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City Name"
                  onBlur={(e) => setInfo({ ...info, city: e.target.value })}
                  required
                />
              </Form.Group>

              {/* select Price */}
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Package Price"
                  onBlur={(e) => setInfo({ ...info, price: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Image Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Host a image and give the link Here"
                  onBlur={(e) => setInfo({ ...info, img: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
            <div className="mt-4 d-block">
              <button
                className=" d-block w-100 main-btn fs-5 py-3 text-white border-0"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default AddEvent;
