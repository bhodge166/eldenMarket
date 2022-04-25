import { searchEldenRing } from "../utils/API";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS, QUERY_PRODUCT } from "../utils/queries";
import { ADD_TO_CART } from "../utils/mutations";
import Auth from "../utils/auth";
import peter from "../assets/images/ER_Class_Vagabond.png";
//navbar stuff
import Navbar from "../components/Navbar";
import logo from "../logo.svg";
import eldenRing from "../assets/images/eldenring_new.png";
import "../css/PeterMerch.css";
import { LinkContainer } from "react-router-bootstrap";
const PeterMerch = () => {
  const [purchaseItem, { error, data2 }] = useMutation(ADD_TO_CART);

  const currentCategory = "Creatures";

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const productData = data?.products || [];

  function filterProducts() {
    return productData.filter(
      (product) => product.category.name === currentCategory
    );
  }

  const handlePurchaseItem = async (id) => {
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data2 } = await purchaseItem({
        variables: { products: id },
      });
      console.log(data2);
    } catch (err) {
      console.error(JSON.stringify(err));
    }
  };

  return (
    <>
      <div className="App App-custom bkg ">
        <img
          src={eldenRing}
          className="intro"
          alt="intro"
          style={{ width: "900px", marginBottom: "50px" }}
        />
        <div>
          <Navbar />
          <div
            className="mb-5"
            style={{
              width: "80%",
              marginLeft: "150px",
              border: "3px solid gray",
              borderRadius: "50px",
            }}
          ></div>
        </div>

        <div style={{ width: "100%" }}>
          <div
            className="mainContentPeter"
            style={{
              position: "relative",
              width: "100%",
              height: "1000px",
              marginTop: "10px",
            }}
          >
            <div className="PeterPet float-left">
              <img
                src={peter}
                alt="petersMerch"
                height="600px"
                width="350px"
                style={{
                  position: "absolute",
                  marginTop: 150,
                  marginLeft: 150,
                }}
              />
            </div>

            <Container
              className="cardContainer"
              style={{
                position: "absolute",
                top: 100,
                right: 0,
                width: "100%",
              }}
            >
              <h2 className="wood-text">
                {filterProducts().length
                  ? `Peter's ${filterProducts().length} most prized creatures:`
                  : "Something went wrong"}
              </h2>
              <div className="searchCard row">
                {filterProducts().map((item) => {
                  return (
                    <Card className="resultCard col-sm-4" key={item._id}>
                      {item.image ? (
                        <Card.Img
                          src={item.image}
                          className="cardImg w-100"
                          alt={`The cover for ${item.name}`}
                          variant="top"
                        />
                      ) : null}
                      <Card.Body className="cardBody">
                        <Card.Title className="titleText">
                          {item.name}
                        </Card.Title>
                        <p className="small descText">{item.description}</p>
                        <p className="small priceText">
                          Price: {item.price} Runes
                        </p>

                        <Card.Text>{item.drops}</Card.Text>
                        {Auth.loggedIn() && (
                          <Button
                            className="btn-block btn-info"
                            onClick={() => handlePurchaseItem(item._id)}
                          >
                            {" "}
                            Purchase
                          </Button>
                        )}
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeterMerch;
