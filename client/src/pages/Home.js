import React from "react";
import logo from "../logo.svg";
import intro from "../assets/images/elden-ring-3.png";
import Navbar from "../components/Navbar";
import '../css/homepage.css';
import '../css/navbar.css';
import kyle from '../assets/images/knightmerch.png';
import peter from '../assets/images/ER_Class_Vagabond.png';
import brad from '../assets/images/ER_Class_Astrologer.png';
import gavin from '../assets/images/witch.png';
import jake from '../assets/images/Elden-Ring-Crucible-Set.png';



const Home = () => {
    return (

        <><div className="App App-custom bkg">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <img src={intro} className="banner bg-image" alt="intro" /></header>
            <div>
                <Navbar />
            </div>
        </div>
            <div className="row">
                <div className="column">
                    Jake<img src={jake} alt="kylesMerch" />
                </div>

                <div className="column">
                    Kyle<img src={kyle} className="merchStyle" alt="kylesMerch" />
                </div>

                <div className="column">
                    Peter<img src={peter} className="peterStyle" alt="petersMerch" />
                </div>
                <div className="column">
                    Brad<img src={brad} className="merchStyle" alt="kylesMerch" />
                </div>
                <div className="column">
                    Gavin<img src={gavin} alt="kylesMerch" />
                </div>

            </div>

        </>


    );
};

export default Home;
