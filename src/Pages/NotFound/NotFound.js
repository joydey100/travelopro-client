import React from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import NotFoundImg from "../../images/error.svg";

const NotFound = () => {
  // History / Back to Home Page
  const history = useHistory();

  //   Back to Home Function
  const backToHome = () => {
    history.push("/");
  };

  return (
    <section className="notfound-page my-5 text-center">
      <Container>
        <img
          src={NotFoundImg}
          alt="not-found-img"
          className="img-fluid w-75 mx-auto d-block mb-3"
        />
        <h2 className="text-main text-center mb-4"> Oops! Page Not Found!</h2>
        <button
          onClick={backToHome}
          className="main-btn px-5 py-3 text-white rounded-pill border-0"
        >
          {" "}
          Back to Home Page{" "}
        </button>
      </Container>
    </section>
  );
};

export default NotFound;
