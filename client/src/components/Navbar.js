import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import weapon from "../assets/images/sword.png";

import "../css/navbar.css";
import {
  Navbar,
  Nav,
  NavItem,
  Glyphicon,
  Container,
  Modal,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Routes } from "react-router-dom";
import armor from "../assets/images/armor.png";
import spells from "../assets/images/scroll.png";
import items from "../assets/images/potion.png";
import pets from "../assets/images/dragon.png";

import runes from "../assets/images/rune.png";

import Auth from "../utils/auth";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Bar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Nav className="navBG" activeKey={window.location.pathname}>
        <LinkContainer to="/jakemerch">
          <Nav.Link>
            {" "}
            <img src={armor} className="icon" alt="armor" /> jakesMerch
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/kylemerch">
          <Nav.Link>
            <img src={weapon} className="icon" alt="weapon" /> kyleMerch
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/petermerch">
          <Nav.Link>
            <img src={spells} className="icon" alt="scrolls" />
            peterMerch
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/bradmerch">
          <Nav.Link>
            <img src={pets} className="icon" alt="pets" />
            bradMerch
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/gavinmerch">
          <Nav.Link>
            <img src={items} className="icon" alt="items" />
            gavinMerch
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/runefarm">
          <Nav.Link>
            <img src={runes} className="icon" alt="runes" />
            runeFarm
          </Nav.Link>
        </LinkContainer>
      </Nav>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Google Books Search
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">
                Search For Books
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/saved">
                    See Your Books
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  Login/Sign Up
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        animation={false}
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </div>
  );
};

export default Bar;
