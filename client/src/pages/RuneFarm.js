import React from "react";
import Counter from "../components/Counter";
//navbar stuff
import Navbar from "../components/Navbar";
import logo from "../logo.svg";
import eldenRing from "../assets/images/eldenring_new.png";
const RuneFarm = () => {
  return (
    <>
      <div className="App App-custom ">
        <img src={eldenRing} className="intro" alt="intro" />
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
        </div>
      </div>
      <Counter />
    </>
  );
};

export default RuneFarm;
