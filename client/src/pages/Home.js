import {
    Jumbotron,
    Container,
    Col,
    Form,
    Button,
    Card,
    CardColumns,
} from "react-bootstrap";
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

        <div className="bkg"><div className="App App-custom ">

            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <Navbar />
            </div>
        </div>
            <div className="row ">
                <div className="column ms-5 mx-5" >
                    <img src={banner} className="storebanner" alt="banner" />

                    <div className="position-absolute mx-5"><p className=" star text-center">Come see Jake the Warrior</p>
                        <img src={jake} alt="" /></div>
                    <Container><Card className="star border">Hello.Card<Card.Body className="star border border-danger">Hello.Body<Card.Title className="star border border-success">Hello.Card.Title</Card.Title></Card.Body>
                    </Card></Container>
                </div>

                <div className="column ms-5 mx-5" style={{ position: "relative" }}>
                    <img src={banner} className="storebanner" alt="banner" />
                    <div className="position-absolute mx-5 my-5"><p className=" star text-center">Come see Kyle the Knight</p>
                        <img src={kyle} className="merchStyle" alt="" /></div>
                    <Container><Card className="star border">Hello.Card<Card.Body className="star border border-danger">Hello.Body<Card.Title className="star border border-success">Hello.Card.Title</Card.Title></Card.Body>
                    </Card></Container>
                </div>

                <div className="column ms-5 mx-5" style={{ position: "relative" }}>
                    <img src={banner} className="storebanner" alt="banner" />
                    <div style={{ position: "absolute" }}><p className=" star text-center border ">Come see peters </p>
                        <img src={peter} className="peterStyle" alt="petersMerch" /></div>
                    <Container><Card className="star border">Hello.Card<Card.Body className="star border border-danger">Hello.Body<Card.Title className="star border border-success">Hello.Card.Title</Card.Title></Card.Body>
                    </Card></Container>
                </div>

                <div className="column ms-5 mx-5" style={{ position: "relative" }}>
                    <img src={banner} className="storebanner" alt="banner" />
                    <div style={{ position: "absolute" }}><p className=" star text-center">Purchase your Talismans from Brad the Astrologist!</p>
                        <img src={brad} className="merchStyle" alt="bradMerch" />
                    </div>
                    <Container><Card className="star border">Hello.Card<Card.Body className="border border-danger text-black">Hello.Body<Card.Title className=" border border-success">Hello.Card.Title</Card.Title></Card.Body>
                    </Card></Container>
                </div>

                <div className="column ms-5 mx-5" style={{ position: "relative" }}>
                    <img src={banner} className="storebanner" alt="banner" />
                    <div style={{ position: "absolute" }}><p className=" star text-center">Come see Gavin the Wizard for spells!</p>
                        <img src={gavin} alt="gavinMerch" className="mx-5 mb-5" /></div>
                    <Container><Card className="nobackground "><p className="star cardstyle"> Hello World!</p><Card.Body></Card.Body>
                    </Card></Container>
                </div>

            </div>

        </div>


    );
};

export default Home;
