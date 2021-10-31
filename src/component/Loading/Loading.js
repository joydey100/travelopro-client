import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Container>
      {" "}
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>{" "}
    </Container>
  );
};

export default Loading;
