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
import eldenRing from "../assets/images/eldenring_new.png";
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
      <div className="App App-custom bkg">
        <img src={eldenRing} className="intro" alt="intro" style={{ width: "900px", marginBottom: "75px" }} />
      <Bar />
      </div>
      
        <Container className="">

        </Container>
     

      <div className="bkg">
        <Container>
          <CardColumns>
            {productIds.map((productId) => {
              return <InventoryCard name={productId} />;
            })}
          </CardColumns>
        </Container>
      </div>
    </>
  );
};

export default Inventory;
