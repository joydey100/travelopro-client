import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SinglePackage = ({ img, title, desc, city, price }) => {
  return (
    <Col md={4}>
      <Card className="h-100 shadow-lg">
        <div className="package-image">
          <img
            src={img}
            alt="single-package-img"
            className="single-package-img"
          />
          <span className="px-3 py-1 text-white rounded-pill"> {city} </span>
        </div>
        <div className="package-info p-3">
          <h3 className="my-2 fw-bold text-blue"> {title} </h3>
          <p className="mt-1 mb-3"> {desc} </p>
          <h4 className="mb-4">Price: ${price}</h4>
          <NavLink
            to="/"
            className="text-decoration-none main-btn text-white px-4 py-2 rounded-pill mb-3"
          >
            {" "}
            Book Now{" "}
          </NavLink>
        </div>
      </Card>
    </Col>
  );
};

export default SinglePackage;
