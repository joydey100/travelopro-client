import React from "react";
import { Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SingleMyList = (props) => {
  // Destructuring
  const { title, date, img, myDesc, _id, status } = props.list;

  return (
    <Col lg={4} md={6}>
      <div className="shadow-lg h-100">
        <div className="image-box">
          <img src={img} alt="service-img" />
        </div>
        <div className="info-box ms-3 d-flex align-items-center p-2">
          <div>
            <h4 className="my-3 fw-bold text-blue"> {title} </h4>
            <h5 className="mb-4"> {date} </h5>
            <p className="mb-4 fw-bold">
              {" "}
              Status:{" "}
              <span
                className={
                  status === "Pending" ? "text-orange" : "text-success"
                }
              >
                {" "}
                {status}
              </span>{" "}
            </p>
            <p className="mb-4 text-secondary"> {myDesc} </p>
            <Button variant="primary" className="my-3">
              <NavLink
                to="/manage-orders"
                className="text-white text-decoration-none"
              >
                {" "}
                Manage Orders
              </NavLink>
            </Button>
            <Button
              variant="danger"
              className="my-3 ms-3"
              onClick={() => props.handleRemove(_id)}
            >
              {" "}
              Remove{" "}
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleMyList;
