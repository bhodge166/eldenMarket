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
import gavin from '../assets/images/witch.png';
import gavinBg from '../assets/images/GavinMerch.png';
import kyle from '../assets/images/knightmerch.png';
import peter from '../assets/images/ER_Class_Vagabond.png';
import brad from '../assets/images/ER_Class_Astrologer.png';
import jake from '../assets/images/Elden-Ring-Crucible-Set.png';
import '../css/GavinMerch.css';

const GavinMerch = () => {
  const [searchedItems, setSearchedItems] = useState([]);
 
  const [savedItemIds, setSavedItemIds] = useState(getItemIds());
  const [saveItem] = useMutation(ADD_TO_CART);

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

  const handleSaveItem = async (id) => {
    const itemToSave = searchedItems.find((item) => item.id === id);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
       await saveItem({
        variables: {cart: itemToSave},
      })
      setSavedItemIds([...savedItemIds, itemToSave.id]);
    } catch (err) {
      console.error(err);
    }
  };
  apiCall();
  return (
    <>
      <Jumbotron fluid className="text-light">
        <header>
          <h1 className="header1">Sorceries</h1>
          <div className="miniAvs row" style={{marginTop: -70}} >
                <img src={brad} alt="bradsMerch" height ="90px" width="80px" style={{marginLeft: 40}} />
                <img src={jake} alt="jakesMerch" height ="100px" width="65px" style={{marginTop: -10, marginLeft: 60}}   />
                <img src={kyle} alt="kylesMerch" height ="100px" width="70px" style={{marginTop: -10, marginLeft: 60}} />
                <img src={peter} alt="petersMerch" height ="100px" width="70px" style={{marginTop: -10, marginLeft: 60}}  />
      
                
            </div>
        </header>
      </Jumbotron>
    <div>
      <div style={{position: "relative"}}> 
        
        <img src={gavinBg} className="merchantBg bg-image" alt="Merchant Image" />
            <div className="Witch float-left">
                <img src={gavin} alt="gavinsMerch" height ="600px" width="300px" style={{position: "absolute", marginTop: 200 ,marginLeft: 200}} />   
            </div>
           
          
        <Container className="cardContainer" style={{marginTop: -900, marginLeft: 200}}>
        <h2>
          {searchedItems.length
            ? `Viewing ${searchedItems.length} results:`
            : "Something went wrong"}
        </h2>
        <CardColumns className="searchCard">
          {searchedItems.map((item) => {
            return (
              <Card  key={item.id} border="dark">
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
                    disabled={savedItemIds?.some((savedItemId) => savedItemId === item.id)}
                    className='btn-block btn-info'
                    onClick={() => handleSaveItem(item.id)}>
                    {savedItemIds?.some((savedItemId) => savedItemId === item.id)
                      ? 'This sorcerie has been saved!'
                      : 'Save this sorcerie!'}
                  </Button>
                )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>




      </div>
    </div>

      
      
    </>
  );
};


export default GavinMerch;
