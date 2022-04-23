import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ME, QUERY_PRODUCT } from "../utils/queries";
import InventoryCard from "../components/InventoryCard";
import Bar from "../components/Navbar";

const Inventory = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];
  const products = userData.orders.map((order) => {
    return order.products;
  });
  const productIds = products.map((product) => {
    return product[0]._id;
  });
  console.log(productIds);

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Order History</h1>
        </Container>
      </Jumbotron>
      <Bar />
      <Container>
        <CardColumns>
          {productIds.map((productId) => {
            return <InventoryCard name={productId} />;
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default Inventory;
