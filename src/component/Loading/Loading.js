import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Container className="mt-5 pt-5">
      {" "}
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>{" "}
    </Container>
  );
};

export default Loading;
