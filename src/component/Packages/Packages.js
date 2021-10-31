import React from "react";
import { Container, Row } from "react-bootstrap";
import usePackages from "../../hooks/usePackages";
import SinglePackage from "./SinglePackage";
import "./Package.css";
import Loading from "../Loading/Loading";

const Packages = () => {
  // Get packages from usePackages hook
  const { packages } = usePackages();

  return (
    <section className="pt-5">
      <Container>
        <div className="title-info text-center mb-5">
          <p> Explore Great Places</p>
          <h2 className="fs-1 fw-bold text-blue">
            {" "}
            Popular <span className="text-orange">Packages</span>{" "}
          </h2>
        </div>
        <Row className="g-4">
          {packages?.length > 0 ? (
            packages?.map((singlepackage) => (
              <SinglePackage key={singlepackage._id} {...singlepackage} />
            ))
          ) : (
            <Loading />
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Packages;
