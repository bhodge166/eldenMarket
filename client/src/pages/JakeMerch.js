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
import { saveItemsIds, getItemIds } from "../utils/localStorage";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
// import { ADD_TO_CART } from "../utils/mutations";
import Auth from "../utils/auth";
import jake from "../assets/images/Elden-Ring-Crucible-Set.png";
//navbar stuff
import Navbar from "../components/Navbar";
import logo from "../logo.svg";
import eldenRing from "../assets/images/eldenring_new.png";
import "../css/JakeMerch.css";

import { LinkContainer } from "react-router-bootstrap";
const JakeMerch = () => {
  const [searchedItems, setSearchedItems] = useState([]);

  const [savedItemIds, setSavedItemIds] = useState(getItemIds());
  // const [saveItem] = useMutation(ADD_TO_CART);

  useEffect(() => {
    return () => saveItemsIds(savedItemIds);
  });

  const currentCategory = "Weapons";

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const productData = data?.products || [];

  function filterProducts() {
    return productData.filter(
      (product) => product.category.name === currentCategory
    );
  }

  // const handleSaveItem = async (id) => {
  //   const itemToSave = searchedItems.find((item) => item.id === id);

  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     await saveItem({
  //       variables: { cart: itemToSave },
  //     });
  //     setSavedItemIds([...savedItemIds, itemToSave.id]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  return (
    <>
      <div className="App App-custom bkg">
        <img src={eldenRing} className="intro" alt="intro" style={{ width: "900px", marginBottom: "75px" }}/>
        <div>
         
          <Navbar />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div
          className="mainContentKyle"
          style={{
            position: "relative",
            width: "100%",
            height: "1000px",
            marginTop: "10px",
          }}
        >
          {/* <img
          src={gavinBg}
          className="merchantBg bg-image"
          alt="Merchant Image"
        /> */}
          <div className="JakeKnight float-left">
            <img
              src={jake}
              alt="jakesMerch"
              height="600px"
              width="350px"
              style={{ position: "absolute", marginTop: 150, marginLeft: 150 }}
            />
          </div>

          <Container
            className="cardContainer"
            style={{ position: "absolute", top: 100, right: 0, width: "100%" }}
          >
            <h2 className="wood-text">
              {searchedItems.length
                ? `Jake's ${searchedItems.length} most prized weapons`
                : "Something went wrong"}
            </h2>
            <div className="searchCard">
              {filterProducts().map((item) => {
                return (
                  <Card className="resultCard" key={item._id}>
                    {item.image ? (
                      <Card.Img
                        src={item.image}
                        className="cardImg"
                        alt={`The cover for ${item.name}`}
                        variant="top"
                      />
                    ) : null}
                    <Card.Body className="cardBody">
                      <Card.Title className="titleText">{item.name}</Card.Title>
                      <p className="small descText">{item.description}</p>
                      <p className="small priceText">
                        Price: {item.price} Runes
                      </p>

                      <Card.Text>{item.drops}</Card.Text>
                      {/* {Auth.loggedIn() && (
                      <Button
                        disabled={savedItemIds?.some(
                          (savedItemId) => savedItemId === item.id
                        )}
                        className="btn-block btn-info"
                        onClick={() => handleSaveItem(item.id)}
                      >
                        {savedItemIds?.some(
                          (savedItemId) => savedItemId === item.id
                        )
                          ? "This weapon has been saved!"
                          : "Save this weapon!"}
                      </Button>
                    )} */}
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default JakeMerch;
