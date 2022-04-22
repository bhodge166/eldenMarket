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
import { useMutation } from "@apollo/client";
// import { ADD_TO_CART } from "../utils/mutations";
import Auth from "../utils/auth";
import peter from "../assets/images/ER_Class_Vagabond.png";
//navbar stuff
import Navbar from "../components/Navbar";
import logo from "../logo.svg";
import eldenRing from "../assets/images/eldenring_new.png";
import "../css/PeterMerch.css";
import { LinkContainer } from "react-router-bootstrap";
const PeterMerch = () => {
  const [searchedItems, setSearchedItems] = useState([]);
  const [price, setPrice] = useState(0);
  const [savedItemIds, setSavedItemIds] = useState(getItemIds());
  // const [saveItem, { error, data }] = useMutation(ADD_TO_CART);
  function runePrice(min, max) {
    setPrice(console.log(Math.floor(Math.random() * (max - min) + min)));
  }

  useEffect(() => {
    return () => saveItemsIds(savedItemIds);
  });

  const apiCall = async () => {
    try {
      const response = await searchEldenRing("creatures");

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { data } = await response.json();

      const creatureData = data.map((creature) => ({
        id: creature.id,
        drops: creature.drops || ["Nothing to drop"],
        title: creature.name,
        description: creature.description,
        image: creature.image,
      }));

      setSearchedItems(creatureData);
    } catch (err) {
      console.error(err);
    }
  };

  // const handleSaveItem = async (id) => {
  //   const itemToSave = searchedItems.find((item) => item.id === id);

  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const { data } = await saveItem({
  //       variables: { cart: { ...itemToSave } },
  //     });
  //     setSavedItemIds([...savedItemIds, itemToSave.id]);
  //     console.log(data);
  //   } catch (err) {
  //     console.error(JSON.stringify(err));
  //   }
  // };

  apiCall();
  return (
    <>
      <div className="App App-custom bkg ">
        <img src={eldenRing} className="intro" alt="intro" />
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
        </div>
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
          {/* <img
          src={gavinBg}
          className="merchantBg bg-image"
          alt="Merchant Image"
        /> */}
          <div className="PeterPet float-left">
            <img
              src={peter}
              alt="petersMerch"
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
                ? `Peter's ${searchedItems.length} most prized creatures:`
                : "Something went wrong"}
            </h2>
            <div className="searchCard">
              {searchedItems.map((item) => {
                return (
                  <Card className="resultCard" key={item.id} border="dark">
                    {item.image ? (
                      <Card.Img
                        src={item.image}
                        className="cardImg"
                        alt={`The cover for ${item.title}`}
                        variant="top"
                      />
                    ) : null}
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <p className="small">Drops: {item.drops}</p>

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
                          ? "This creature has been saved!"
                          : "Save this creature!"}
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

export default PeterMerch;
