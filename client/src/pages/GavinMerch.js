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
import gavin from "../assets/images/witch.png";
import gavinBg from "../assets/images/GavinMerch.png";
import Navbar from "../components/Navbar";

import peter from "../assets/images/ER_Class_Vagabond.png";
import brad from "../assets/images/ER_Class_Astrologer.png";
import jake from "../assets/images/Elden-Ring-Crucible-Set.png";
import armor from "../assets/images/armor.png";
import spells from "../assets/images/scroll.png";
import items from "../assets/images/astrology.png";
import pets from "../assets/images/dragon.png";
import weapon from "../assets/images/swordnshield.png";
import runes from "../assets/images/rune.png";
import character from "../assets/images/knight.png";
import "../css/GavinMerch.css";
import { LinkContainer } from "react-router-bootstrap";

const GavinMerch = () => {
  const [searchedItems, setSearchedItems] = useState([]);

  const [savedItemIds, setSavedItemIds] = useState(getItemIds());
  // const [saveItem] = useMutation(ADD_TO_CART);

  useEffect(() => {
    return () => saveItemsIds(savedItemIds);
  });

  const apiCall = async () => {
    try {
      const response = await searchEldenRing("sorceries");

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
    <>
      <Navbar />
      <Jumbotron fluid className="text-light">
        <header>
          <h1 className="header1">Sorceries</h1>
          <div
            className="miniAvs row"
            style={{ marginTop: -70, marginLeft: 60 }}
          >
            <div className="kyleAv mx-3">
              <LinkContainer to="/kylemerch">
                <img
                  src={armor}
                  alt="kylesMerch"
                  height="90px"
                  width="70px"
                  // style={{ marginTop: -10, marginLeft: 100 }}
                />
              </LinkContainer>
            </div>
            <div className="bradAv mx-3">
              <LinkContainer to="/bradmerch">
                <img
                  src={weapon}
                  alt="bradsMerch"
                  height="90px"
                  width="80px"
                  // style={{ marginLeft: 40 }}
                />
              </LinkContainer>
            </div>
            <div className="jakeAv mx-3">
              <LinkContainer to="/jakemerch">
                <img
                  src={items}
                  alt="jakesMerch"
                  height="90px"
                  width="90px"
                  // style={{ marginTop: -10, marginLeft: 200 }}
                />
              </LinkContainer>
            </div>
            <div className="peterAv mx-3">
              <LinkContainer to="/petermerch">
                <img
                  src={pets}
                  alt="petersMerch"
                  height="90px"
                  width="85px"
                  // style={{ marginTop: -10, marginLeft: 200 }}
                />
              </LinkContainer>
            </div>
            <div className="gavinAv mx-3">
              <LinkContainer to="/gavinmerch">
                <img
                  src={spells}
                  alt="gavinsMerch"
                  height="90px"
                  width="70px"
                  // style={{ marginTop: -10, marginLeft: 200 }}
                />
              </LinkContainer>
            </div>
          </div>
          <div className="runeAv">
            <LinkContainer to="/runefarm">
              <img
                src={runes}
                alt="runes"
                height="80px"
                width="80px"
                // style={{ marginTop: -10, marginLeft: 200 }}
              />
            </LinkContainer>
          </div>
        </header>
      </Jumbotron>

      <div style={{ position: "relative" }}>
        <img
          src={gavinBg}
          className="merchantBg bg-image"
          alt="Merchant Image"
        />
        <div className="Witch float-left">
          <img
            src={gavin}
            alt="gavinsMerch"
            height="600px"
            width="300px"
            style={{ position: "absolute", marginTop: 100, marginLeft: 150 }}
          />
        </div>

        <Container
          className="cardContainer md-8"
          style={{ position: "absolute", marginTop: -900, marginLeft: 200 }}
        >
          <h2>
            {searchedItems.length
              ? `Viewing ${searchedItems.length} results:`
              : "Something went wrong"}
          </h2>
          <CardColumns className="searchCard">
            {searchedItems.map((item) => {
              return (
                <Card key={item.id} border="dark">
                  {item.image ? (
                    <Card.Img
                      src={item.image}
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
                          ? "This sorcerie has been saved!"
                          : "Save this sorcerie!"}
                      </Button>
                    )} */}
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      </div>
    </>
  );
};

export default GavinMerch;
