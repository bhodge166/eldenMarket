import React, { useState } from "react";
import "../css/counter.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1000);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="counter">
      <h1>Rune Counter</h1>
      <h3>
        For thou Tarnished who have yet to discover Mohgwyn's Palace and the
        Lake of Blood, take heed in this blessing.
      </h3>
      <span className="counter__output">Runes: {counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>
          +
        </button>
        <button className="control__btn" onClick={decrease}>
          -
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
