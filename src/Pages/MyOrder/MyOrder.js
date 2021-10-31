import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";
import SingleMyList from "./SingleMyList";
import Swal from "sweetalert2";

const MyOrder = () => {
  // My Data State
  const [myList, setMyList] = useState([]);
  const history = useHistory();

  // get user
  const { user, setLoading } = useAuth();
  const { email } = user;

  //   get data by user email
  useEffect(() => {
    fetch(`https://howling-treat-27967.herokuapp.com/orderlist/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyList(data);
        setLoading(false);
      });
  }, [email, setLoading]);

  // Remove from list
  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://howling-treat-27967.herokuapp.com/lists/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const filterData = myList?.filter((order) => order._id !== id);
            setMyList(filterData);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          confirmButtonColor: "#FD642F",
        });
      }
    });
  };

  return (
    <section>
      <Container>
        {myList.length > 0 && (
          <div className="title-info text-center my-5">
            <p> Explore Orders</p>
            <h2 className="fs-1 fw-bold text-blue mb-4">
              {" "}
              My <span className="text-orange">Bookings</span>
            </h2>
          </div>
        )}
        <Row className="g-4">
          {myList.length > 0 ? (
            myList.map((list) => (
              <SingleMyList
                key={list._id}
                list={list}
                handleRemove={handleRemove}
              />
            ))
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
