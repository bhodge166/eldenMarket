import React from "react";
import logo from "../logo.svg";
import intro from "../assets/images/eldenring_new.png";
import Navbar from "../components/Navbar";
import "../css/homepage.css";

const Home = () => {
  return (
    <div className="App App-custom">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={intro} alt="intro" />
      </header>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
