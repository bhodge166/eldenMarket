
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

import React, { useState, useEffect } from "react";
import { saveItemsIds, getItemIds } from "../utils/localStorage";
import armor from '../assets/images/armor.png';
import spells from '../assets/images/scroll.png';
import items from '../assets/images/astrology.png';
import pets from '../assets/images/dragon.png';
import weapon from '../assets/images/swordnshield.png';
import runes from '../assets/images/rune.png';
import character from '../assets/images/knight.png';
import banner from '../assets/images/banner.png';


const Home = () => {

    const [searchedItems, setSearchedItems] = useState([]);

    const [savedItemIds, setSavedItemIds] = useState(getItemIds());
    return (

        <><div className="App App-custom bkg">
            <header className="App-header bkg">
                <img src={intro} className="banner bg-image" alt="intro" /></header>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <Navbar />
            </div>
        </div>
            <div className="row bkg">
                <div className="column ms-5 mx-5" >
                    <img src={banner} className="storebanner" alt="banner" />

                    <div className="position-absolute mx-5">
                        <img src={weapon} className="snshome " alt="weapons" /><img src={jake} alt="" /></div>
                </div>

                <div className="column ms-5 mx-5" style={{ position: "relative" }}>
                    <img src={banner} className="storebanner" alt="banner" />
                    <div style={{ position: "absolute" }}>
                        <img src={armor} className="iconhome " alt="armor" /><img src={kyle} className="merchStyle" alt="" /></div>

                </div>

                <div className="column ms-5 mx-5" style={{ position: "relative" }}>
                    <img src={banner} className="storebanner" alt="banner" />
                    <div style={{ position: "absolute" }}>
                        <img src={pets} className="iconhome " alt="scrolls" /><img src={peter} className="peterStyle" alt="petersMerch" /></div>
                </div>

                <div className="column ms-5 mx-5" style={{ position: "relative" }}>
                    <img src={banner} className="storebanner" alt="banner" />
                    <div style={{ position: "absolute" }}>
                        <img src={items} className="iconhome " alt="pets" /><img src={brad} className="merchStyle" alt="kylesMerch" />
                    </div>
                </div>

                <div className="column ms-5 mx-5" style={{ position: "relative" }}>
                    <img src={banner} className="storebanner" alt="banner" />
                    <div style={{ position: "absolute" }}>
                        <img src={spells} className="iconhome" style={{marginBottom: "50px"}} alt="scrolls" /><img src={gavin} alt="kylesMerch" className="mx-5 mb-5"  /></div>
                </div>

            </div>

        </>


    );
};

export default Home;
