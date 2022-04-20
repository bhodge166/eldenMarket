import React, { useState } from "react";
import "../css/counter.css";
import { ADD_RUNES } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

const Counter = () => {
  const [addRunes, { error, data }] = useMutation(ADD_RUNES);
  if (error) {
    console.log(JSON.stringify(error.message));
  }
  //increase counter
  const handleAddRunes = async () => {
    try {
      const { data } = await addRunes();
      console.log(data);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  return (
    <div className="counter">
      <h1>Rune Counter</h1>
      <h3>
        For thou Tarnished who have yet to discover Mohgwyn's Palace and the
        Lake of Blood, take heed in this blessing.
      </h3>
      <div className="btn__container">
        <button className="control__btn" onClick={() => handleAddRunes()}>
          Farm Runes
        </button>
      </div>
    </div>
  );
};

export default Counter;
