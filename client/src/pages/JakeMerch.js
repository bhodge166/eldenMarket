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
import { ADD_TO_CART } from "../utils/mutations";
import Auth from "../utils/auth";
import Navbar from "../components/Navbar";

const JakeMerch = () => {
  const [searchedItems, setSearchedItems] = useState([]);

  const [savedItemIds, setSavedItemIds] = useState(getItemIds());
  const [saveItem] = useMutation(ADD_TO_CART);

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

  const handleSaveItem = async (id) => {
    const itemToSave = searchedItems.find((item) => item.id === id);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await saveItem({
        variables: { cart: itemToSave },
      });
      setSavedItemIds([...savedItemIds, itemToSave.id]);
    } catch (err) {
      console.error(err);
    }
  };
  apiCall();
  return (
    <>
      <Navbar />
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Weapons</h1>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedItems.length
            ? `Viewing ${searchedItems.length} results:`
            : "Something went wrong"}
        </h2>
        <CardColumns>
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
                  {Auth.loggedIn() && (
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
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default JakeMerch;
