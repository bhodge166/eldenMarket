import React from "react";
import logo from "../logo.svg";
import intro from '../assets/images/eldenring_new.png';

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <img src={intro}  alt="intro" />


            </header>
        </div>
    );
};

export default Home;
