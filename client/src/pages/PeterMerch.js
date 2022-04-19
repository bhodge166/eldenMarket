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

const PeterMerch = () => {
  // create state for holding returned google api data
  const [searchedItems, setSearchedItems] = useState([]);
  // create state for holding our search field data

  // create state to hold saved bookId values
  const [saveItemsIds, setSaveItemsIds] = useState(getItemIds());
  const [saveItem] = useMutation(ADD_TO_CART);
  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  // useEffect(() => {
  //   return () => saveItemsIds(saveItemsIds);
  // });

  // create method to search for books and set state on form submit
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

  // create function to handle saving a book to our database
  // const handleSaveItem = async (id) => {
  //   // find the book in `searchedBooks` state by the matching id
  //   const itemToSave = searchedItems.find((item) => item.id === id);

  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //      await saveItem({
  //       variables: {input: itemToSave},
  //     })

  //     // if book successfully saves to user's account, save book id to state
  //     setSaveItemsIds([...saveItemsIds, itemToSave.id]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  apiCall();
  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Search for Books!</h1>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedItems.length
            ? `Viewing ${searchedItems.length} results:`
            : "Search for a book to begin"}
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
                  {/* {Auth.loggedIn() && (
                  <Button
                    disabled={saveItemsIds?.some((saveItemsId) => id === item.id)}
                    className='btn-block btn-info'
                    onClick={() => handleSaveItem(item.id)}>
                    {saveItemsIds?.some((savedItemId) => saveItemsId === item.itemId)
                      ? 'This creature has already been saved!'
                      : 'Save this Creature!'}
                  </Button>
                )} */}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default PeterMerch;
