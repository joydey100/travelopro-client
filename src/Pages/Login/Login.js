import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  // get firebase hook
  const { googleSignIn, setLoading, setUser, setError, error } = useAuth();

  // history and loaction for redirect
  const history = useHistory();
  const location = useLocation();

  const redirect = location.state?.from || "/";

  // Function for  handleGoogle Sign in and redirect to desired page

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setLoading(false);
        const user = result.user;
        setUser(user);
        history.push(redirect);
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <Card className="p-4 shadow text-center ">
              <h2 className="text-blue fw-bold my-4">Log in & Sign Up</h2>
              <p className="w-75 mx-auto text-secondary mb-4">
                {" "}
                If you are new or existing User, Just click on{" "}
                <span className="text-blue fw-bold">
                  {" "}
                  Continue With Google{" "}
                </span>{" "}
                Button. We will take only your essential information for future
                reference.
              </p>

              <p className="text-danger my-2">{error}</p>

              <button
                className="py-2 rounded-pill mb-4"
                onClick={handleGoogleSignIn}
              >
                {" "}
                <img
                  src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                  className="google-logo me-2"
                  alt="google-logo"
                />{" "}
                <span className="fs-5"> Continue With Google</span>
              </button>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
