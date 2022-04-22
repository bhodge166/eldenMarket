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
import jake from "../assets/images/Elden-Ring-Crucible-Set.png";
import Navbar from "../components/Navbar";
import armor from "../assets/images/armor.png";
import spells from "../assets/images/scroll.png";
import items from "../assets/images/astrology.png";
import pets from "../assets/images/dragon.png";
import weapon from "../assets/images/swordnshield.png";
import runes from "../assets/images/rune.png";

import "../css/JakeMerch.css";

import { LinkContainer } from "react-router-bootstrap";
const JakeMerch = () => {
  const [searchedItems, setSearchedItems] = useState([]);

  const [savedItemIds, setSavedItemIds] = useState(getItemIds());
  // const [saveItem] = useMutation(ADD_TO_CART);

  useEffect(() => {
    return () => saveItemsIds(savedItemIds);
  });

  const apiCall = async () => {
    try {
      const response = await searchEldenRing("weapons");

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
  //     await saveItem({
  //       variables: { cart: itemToSave },
  //     });
  //     setSavedItemIds([...savedItemIds, itemToSave.id]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  apiCall();
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <div
        className="mainContentKyle"
        style={{ position: "relative", width: "100%", height: "1000px" }}
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
  );
};

export default JakeMerch;
