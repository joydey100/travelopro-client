import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SinglePackage = ({ _id, img, title, desc, city, price }) => {
  return (
    <Col lg={4} md={6}>
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
          <h4 className="mb-4 text-blue">Price: ${price}</h4>
          <NavLink
            to={`/placeorder/${_id}`}
            className="text-decoration-none main-btn text-white px-4 py-2 rounded-pill mb-3"
          >
            {" "}
            Book Now <i className="fas fa-paper-plane ms-1"></i>
          </NavLink>
        </div>
      </Card>
    </Col>
  );
};

export default SinglePackage;
