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
import Navbar from "../components/Navbar";
import '../css/homepage.css';
import '../css/navbar.css';
import kyle from '../assets/images/knightmerch.png';
import peter from '../assets/images/ER_Class_Vagabond.png';
import brad from '../assets/images/ER_Class_Astrologer.png';
import gavin from '../assets/images/witch.png';
import jake from '../assets/images/Elden-Ring-Crucible-Set.png';
import eldenRing from '../assets/images/eldenring_new.png';
import React, { useState, useEffect } from "react";
import { saveItemsIds, getItemIds } from "../utils/localStorage";
import armor from '../assets/images/armor1.png';
import spells from '../assets/images/books2.png';
import items from '../assets/images/talisman.png';
import pets from '../assets/images/realdragon.png';
import weapon from '../assets/images/swordnshield.png';
import store from '../assets/images/midevilhouse.png';
import { LinkContainer } from "react-router-bootstrap";
import runes from '../assets/images/rune.png';
const Home = () => {

    const [searchedItems, setSearchedItems] = useState([]);
    const [savedItemIds, setSavedItemIds] = useState(getItemIds());

    return (

        <div className="bkg"><div className="App App-custom ">
            <a href="/"><img src={eldenRing} className="intro" alt="intro" /></a>
            <div>
                <Navbar />

            </div>
        </div>
            <div className="mb-5" style={{ width: "80%", marginLeft: "150px", border: "3px solid gray", borderRadius: "50px" }} >

            </div>

            <div className="row ">

                {/* JAKES PROFILE */}
                <div className=" column ms-5 mx-5" >
                    <LinkContainer to="/jakeMerch">
                        <h1 className=" navglow text-center font-weight-bold">Come see Jake the Warrior</h1>
                    </LinkContainer>
                    <img src={store} className="merchStyle" alt="" />
                    <div className="position-absolute mx-5">
                        <img src={jake} alt="" /></div>
                    <Card className="bg-dark">
                        <Card.Body className="brd">
                            <h1 className="star"><span className="font-weight-bold underline">Name</span> : Jake The Warrior</h1>
                            <h1 className="star "><span className="font-weight-bold">Goods</span>: Weapons <img src={weapon} className="icon" alt="items" /></h1>
                            <h1 className="star"><span className="font-weight-bold">Class</span> : Warrior</h1>
                        </Card.Body>
                    </Card>
                </div>
                {/* ------------- */}
                {/* KYLES PROFILE */}
                <div className="column ms-5 mx-5" style={{ position: "relative" }}>
                    <LinkContainer to="/kyleMerch">
                        <h1 className="navglow text-center font-weight-bold " >Visit Kyle The Knight's Store</h1>
                    </LinkContainer>
                    <img src={store} className="merchStyle" alt="" />
                    <div className="position-absolute mx-5 my-5">
                        <img src={kyle} className="merchStyle" alt="" /></div>
                    <Card className="bg-dark">
                        <Card.Body className="brd">
                            <h1 className="star"><span className="font-weight-bold underline">Name</span> : Kyle</h1>
                            <h1 className="star "><span className="font-weight-bold">Goods</span>: Armor <img src={armor} className="icon" alt="items" /></h1>
                            <h1 className="star"><span className="font-weight-bold">Class</span> : Knight</h1>
                        </Card.Body>
                    </Card>
                </div>
                {/* ------------- */}
                {/* Peters PROFILE */}
                <div className="column ms-5 mx-5" style={{ position: "relative" }}>
                    <LinkContainer to="/peterMerch">
                        <h1 className=" navglow text-center font-weight-bold "> Checkout Peters Collectable Pets! </h1>
                    </LinkContainer>
                    <img src={store} className="merchStyle" alt="" />
                    <div style={{ position: "absolute" }}>
                        <img src={peter} className="peterStyle" alt="petersMerch" /></div>
                    <Card className="bg-dark">
                        <Card.Body className="brd">
                            <h1 className="star"><span className="font-weight-bold underline">Name</span> : Peter</h1>
                            <h1 className="star "><span className="font-weight-bold">Goods</span>: Pets <img src={pets} className="icon" alt="items" /></h1>
                            <h1 className="star"><span className="font-weight-bold">Class</span> : Pet Collector</h1>
                        </Card.Body>
                    </Card>
                </div>
                {/* ------------- */}
                {/* BRADS PROFILE */}

                <div className="column ms-5 mx-5" style={{ position: "relative" }}>
                    <LinkContainer to="/bradmerch">
                        <h1 className="cursor navglow text-center font-weight-bold">Talismans from Brad the Astrologist!</h1>
                    </LinkContainer>
                    <img src={store} className="merchStyle" alt="" />
                    <div style={{ position: "absolute" }}>
                        <img src={brad} className="merchStyle" alt="bradMerch" />
                    </div>
                    <Card className="bg-dark">
                        <Card.Body className="brd">
                            <h1 className="star"><span className="font-weight-bold underline">Name</span> : Brad</h1>
                            <h1 className="star "><span className="font-weight-bold">Goods</span>: Talismans <img src={items} className="icon" alt="items" /></h1>
                            <h1 className="star"><span className="font-weight-bold">Class</span> : Astrologist</h1>
                        </Card.Body>
                    </Card>
                </div>
                {/* ------------- */}
                {/* GAVINS PROFILE */}
                <div className="column" style={{ position: "relative" }}>
                    <LinkContainer to="/gavinMerch">
                        <h1 className=" navglow text-center font-weight-bold">Stop by Gavin the Wizard for spells!</h1>
                    </LinkContainer>
                    <img src={store} className="merchStyle" alt="" />
                    <div style={{ position: "absolute" }}>
                        <img src={gavin} alt="gavinMerch" className="gavinMerch" /></div>
                    <Card className="bg-dark">
                        <Card.Body className="brd">
                            <h1 className="star"><span className="font-weight-bold underline">Name</span> : Gavin</h1>
                            <h1 className="star "><span className="font-weight-bold">Goods</span>: Spells <img src={spells} className="icon" alt="items" />
                            </h1><h1 className="star"><span className="font-weight-bold">Class</span> : Wizard</h1>
                        </Card.Body>
                    </Card>
                </div>
                {/* ------------- */}
            </div>
            <footer className="star text-center"><img src={pets} className="App-logo" alt="items" />FOOTER<img src={pets} className="App-logo" alt="items" /></footer>
        </div >


    );
};

export default Home;
