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
import eldenRing from '../assets/images/eldenring_new.png';
import React, { useState, useEffect } from "react";
import { saveItemsIds, getItemIds } from "../utils/localStorage";
import armor from '../assets/images/armor1.png';
import spells from '../assets/images/books2.png';
import items from '../assets/images/talisman.png';
import pets from '../assets/images/realdragon.png';
import weapon from '../assets/images/swordnshield.png';
import runes from '../assets/images/rune.png';

import banner from '../assets/images/banner.png';
import kylestore from '../assets/images/midevilhouse.png';


const Home = () => {

    const [searchedItems, setSearchedItems] = useState([]);

    const [savedItemIds, setSavedItemIds] = useState(getItemIds());
    return (

        <div className="bkg"><div className="App App-custom ">
            <img src={eldenRing} className="intro" alt="intro" />
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <Navbar />
            </div>
        </div>
            <div className="row ">
                <div className="column ms-5 mx-5" ><p className=" star text-center font-weight-bold">Come see Jake the Warrior</p>
                    <img src={kylestore} className="merchStyle" alt="" />


                    <div className="position-absolute mx-5">
                        <img src={jake} alt="" /></div>

                    <h1>Store Name</h1> <Card className="bkg"><Card.Body className="starA "><h1 className="starA"><span className="border">Name </span> : Jake The Warrior</h1><h1 className="starA border">Goods: Weapons <img src={weapon} className="icon" alt="items" /></h1><h1 className="starA ">Class : Warrior</h1></Card.Body>
                    </Card>
                </div>

                <div className="column ms-5 mx-5" style={{ position: "relative" }}>
                    <h1 className="text-center font-weight-bold bg-dark fs-1 rounded brd" style={{marginTop: "55px"}} ><span className="star">Visit Kyle The Knight's Store</span></h1>
                    <img src={kylestore} className="merchStyle" alt="" />
                    <div className="position-absolute mx-5 my-5">
                        <img src={armor} className="w-25 " alt="items" />
                        <img src={kyle} className="merchStyle" alt="" /></div>
                    <h1>Store Name</h1> <Card className="bkg"><Card.Body className="starA "><h1 className="starA"><span className="border">Name </span> : Kyle The Knight</h1><h1 className="starA border">Goods: Spells <img src={armor} className="icon" alt="items" /></h1><h1 className="starA ">Class : Wizard</h1></Card.Body>
                    </Card>
                </div>

                <div className="column ms-5 mx-5" style={{ position: "relative" }}><p className=" starA text-center font-weight-bold ">Peters Collectable Pets! </p>
                    <img src={kylestore} className="merchStyle" alt="" />
                    <div style={{ position: "absolute" }}>

                        <img src={peter} className="peterStyle" alt="petersMerch" /></div>
                    <h1>Store Name</h1> <Card className="bkg"><Card.Body className="starA "><h1 className="starA"><span className="border">Merchant Name </span> : Peter The Collector</h1><h1 className="starA border">Merchant Goods: Pets <img src={pets} className="icon" alt="items" /></h1><h1 className="starA ">Class : Pet Collector</h1></Card.Body>
                    </Card>
                </div>

                <div className="column ms-5 mx-5" style={{ position: "relative" }}><p className=" starA text-center font-weight-bold" >Talismans from Brad the Astrologist!</p>
                    <img src={kylestore} className="merchStyle" alt="" />
                    <div style={{ position: "absolute" }}>
                        <img src={brad} className="merchStyle" alt="bradMerch" />
                    </div>
                    <h1>Store Name</h1> <Card className="bkg"><Card.Body className="starA "><h1 className="starA"><span className="border">Merchant Name </span> : Brad The Astrologist</h1><h1 className="starA border">Merchant Goods: Spells <img src={items} className="icon" alt="items" /></h1><h1 className="starA ">Class : Astrologist</h1></Card.Body>
                    </Card>
                </div>

                <div className="column" style={{ position: "relative" }}><p className=" starA text-center font-weight-bold">Come see Gavin the Wizard for spells!</p>
                    <img src={kylestore} className="merchStyle" alt="" />

                    <div style={{ position: "absolute" }}>
                        <img src={gavin} alt="gavinMerch" className="gavinMerch" /></div>
                    <h1 className="starA">Gavins Shop</h1> <Card className="bg-dark"><Card.Body className=""><h1 className="starA"><span className="">Merchant Name </span> : Gavin The Great!</h1><h1 className="starA">Merchant Goods: Spells <img src={spells} className="icon" alt="items" /></h1><h1 className="starA ">Class : Wizard</h1></Card.Body>
                    </Card>
                </div>

            </div>

        </div >


    );
};

export default Home;
