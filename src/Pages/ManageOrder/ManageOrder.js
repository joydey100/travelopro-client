import React, { useEffect, useState } from "react";
import { Container, Row, Table, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

const ManageOrder = () => {
  // Essential States
  const [allOrders, setAllOrders] = useState([]);

  const history = useHistory();

  // Get All Orders
  useEffect(() => {
    fetch("https://howling-treat-27967.herokuapp.com/orderlist")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  // handle Approve
  const handleApprove = (id) => {
    const getOrder = allOrders.find((order) => order._id === id);
    getOrder.status = "Approved";

    // Confirmation for Approve
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Approve this package",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://howling-treat-27967.herokuapp.com/status/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(getOrder),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              window.location.reload();
            }
          });
      }
    });
  };

  // Remove from list
  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://howling-treat-27967.herokuapp.com/lists/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const filterData = allOrders?.filter((order) => order._id !== id);
            setAllOrders(filterData);
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
        {allOrders.length > 0 && (
          <div className="title-info text-center my-5">
            <p> Order Management</p>
            <h2 className="fs-1 fw-bold text-blue">
              {" "}
              Manage <span className="text-orange">Orders</span>{" "}
            </h2>
          </div>
        )}
        <Row>
          {allOrders.length > 0 ? (
            <Table striped bordered hover className="text-center" responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Tour Package</th>
                  <th>Price</th>
                  <th>Status Confirmation</th>
                  <th> Status</th>
                  <th> Remove</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((orders) => (
                  <tr key={orders._id}>
                    <td>{orders.name}</td>
                    <td>{orders.email}</td>
                    <td>{orders.title}</td>
                    <td>{orders.price}</td>
                    <td>{orders.status}</td>
                    <td>
                      {" "}
                      <Button
                        variant="success"
                        className={
                          orders.status === "Approved" ? "disabled" : ""
                        }
                        onClick={(e) => handleApprove(orders._id)}
                      >
                        {" "}
                        Approved
                      </Button>{" "}
                    </td>
                    <td>
                      {" "}
                      <Button
                        variant="danger"
                        onClick={() => handleRemove(orders._id)}
                      >
                        {" "}
                        Remove
                      </Button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <section className="text-center">
              <h2 className="text-center mt-3 text-blue">
                {" "}
                OOps! There is no Booking
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

export default ManageOrder;
