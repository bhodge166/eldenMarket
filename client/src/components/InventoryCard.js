import React from "react";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { Card } from "react-bootstrap";
import { QUERY_PRODUCT } from "../utils/queries";
import Navbar from "../components/Navbar";
import eldenRing from "../assets/images/eldenring_new.png"
import {

  Nav,
  NavItem,
  Glyphicon,
  Container,
  Modal,
  Tab,
} from "react-bootstrap";
import brad from "../assets/images/ER_Class_Astrologer.png";
import { searchEldenRing } from "../utils/API";



import "../css/GavinMerch.css";


const InventoryCard = (props) => {
  const { loading, data } = useQuery(QUERY_PRODUCT, {
    variables: { _id: props.name },
  });
  console.log(data);
  const item = data?.product || [];
  console.log(item);
  return (
    <>
      <div className="App App-custom bkg">


        <div style={{ width: "100%" }} className="">
          <div
            className=""
            style={{
              position: "relative",
              width: "100%",
              height: "1000px",
              marginTop: "10px",
            }}
          >



            <div className="">
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
                  <p className="small priceText">Pruchased: {item.price} Runes</p>

                  <Card.Text>{item.drops}</Card.Text>
                </Card.Body>
              </Card>
            </div>
            );
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryCard;
