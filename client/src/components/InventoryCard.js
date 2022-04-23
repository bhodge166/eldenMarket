import React from "react";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { Card } from "react-bootstrap";
import { QUERY_PRODUCT } from "../utils/queries";

const InventoryCard = (props) => {
  const { loading, data } = useQuery(QUERY_PRODUCT, {
    variables: { _id: props.name },
  });
  console.log(data);
  const item = data?.product || [];
  console.log(item);
  return (
    <div className="searchCard">
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
          <p className="small priceText">Price: {item.price} Runes</p>

          <Card.Text>{item.drops}</Card.Text>
        </Card.Body>
      </Card>
      );
    </div>
  );
};

export default InventoryCard;
