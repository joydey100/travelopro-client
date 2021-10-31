import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";
import SingleMyList from "./SingleMyList";

const MyOrder = () => {
  // My Data State
  const [myList, setMyList] = useState([]);
  const history = useHistory();

  // get user
  const { user } = useAuth();
  const { email } = user;

  //   get data by user email
  useEffect(() => {
    fetch(`http://localhost:5000/orderlist/${email}`)
      .then((res) => res.json())
      .then((data) => setMyList(data));
  }, [email]);

  return (
    <section>
      <Container>
        {myList.length > 0 && (
          <div className="title-info text-center my-5">
            <p> Explore Orders</p>
            <h2 className="fs-1 fw-bold text-blue mb-4">
              {" "}
              My <span className="text-orange">Orders</span>
            </h2>
          </div>
        )}
        <Row className="g-4">
          {myList.length > 0 ? (
            myList.map((list) => <SingleMyList key={list._id} {...list} />)
          ) : (
            <section className="text-center">
              <h2 className="text-center mt-3 text-blue">
                {" "}
                You Don't have any order
              </h2>
              <Button
                variant="primary"
                onClick={() => history.push("/services")}
                className="mt-3"
              >
                {" "}
                See Packages
              </Button>
            </section>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default MyOrder;
