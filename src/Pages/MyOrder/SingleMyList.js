import React from "react";
import { Col, Button } from "react-bootstrap";

const SingleMyList = ({ title, date, img, myDesc, _id }) => {
  // remove pakcage
  const removePackage = (id) => {};

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
            <p className="mb-5 text-secondary"> {myDesc} </p>
            <Button
              variant="danger"
              className="my-3"
              onClick={() => removePackage(_id)}
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
