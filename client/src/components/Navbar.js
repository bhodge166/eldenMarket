import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import weapon from '../assets/images/sword.png'

import '../css/navbar.css';
import { Navbar, Nav, NavItem, Glyphicon } from "react-bootstrap";
// import { Routes } from "react-router-dom";
import armor from '../assets/images/armor.png'
import spells from '../assets/images/scroll.png'
import items from '../assets/images/potion.png'
import pets from '../assets/images/dragon.png'

import runes from '../assets/images/rune.png'



const bar = () => {
  return (
    <div>
      <Nav className="navBG" activeKey={window.location.pathname}>

        <LinkContainer to="/jakemerch">
          <Nav.Link> <img src={armor} className="icon" alt="armor" /> jakesMerch</Nav.Link>

        </LinkContainer>
        <LinkContainer to="/kylemerch">
          <Nav.Link><img src={weapon} className="icon" alt="weapon" /> kyleMerch</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/petermerch">
          <Nav.Link><img src={spells} className="icon" alt="scrolls" />peterMerch</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/bradmerch">
          <Nav.Link><img src={pets} className="icon" alt="pets" />bradMerch</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/gavinmerch">
          <Nav.Link><img src={items} className="icon" alt="items" />gavinMerch</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/runefarm">
          <Nav.Link><img src={runes} className="icon" alt="runes" />runeFarm</Nav.Link>
        </LinkContainer>
      </Nav>
    </div >
  );
};

export default bar;
