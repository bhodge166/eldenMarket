import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import weapon from "../assets/images/swordnshield.png";
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
import armor from "../assets/images/armor1.png";
import spells from "../assets/images/books1.png";
import items from "../assets/images/talisman.png";
import pets from "../assets/images/realdragon.png";
import runes from "../assets/images/rune.png";
import character from "../assets/images/elden-login.png";
import Auth from "../utils/auth";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

const Bar = () => {
  const [showModal, setShowModal] = useState(false);
  const { loading, data } = useQuery(GET_ME);
  const runeCount = data?.me || [];
  return (
    <div>
      <Nav className="navBG customtxt" activeKey={window.location.pathname}>
        <LinkContainer to="/jakemerch">
          <Nav.Link className=" mb-2 ">
            {" "}
            <img src={weapon} className="sns" alt="weapon" />{" "}
            <p className="navglow  ">Weapons</p>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/kylemerch">
          <Nav.Link className=" mb-2 mx-3">
            <img src={armor} className="icon" alt="armor" />{" "}
            <p className="navglow  ">Armor</p>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/petermerch">
          <Nav.Link className=" mt-4 mx-2">
            <img src={pets} className="icon" alt="scrolls" />
            <p className="navglow  ">Pets</p>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/bradmerch">
          <Nav.Link className=" mb-1 mx-3">
            <img src={items} className="icon" alt="pets" />
            <p className="navglow  ">Talismans</p>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/gavinmerch">
          <Nav.Link className=" NavItem mb-1 mx-3">
            <img
              src={spells}
              className="icon "
              alt="items"
              style={{ marginTop: "45px" }}
            />
            <p className="navglow mt-4 ">Spells</p>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/runefarm">
          <Nav.Link className="mb-1 mx-3">
            <img src={runes} className="icon" alt="runes" />
            <p className="navglow">Runes: {runeCount.runes}</p>
          </Nav.Link>
        </LinkContainer>
        <Navbar bg="black" variant="white" expand="lg">
          <Container fluid className="fixed-top">
            <Navbar.Brand as={Link} to="/"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
              <Nav className="ml-auto w-25 custom-login">
                <Nav.Link as={Link} to="/">
                  <img
                    src={character}
                    className="lgnimg "
                    alt="character login"
                  />
                </Nav.Link>
                {/* if user is logged in show saved books and logout */}
                {Auth.loggedIn() ? (
                  <>
                    <Nav.Link as={Link} to="/inventory" className="navbar ">
                      <p className="navglow">Inventory</p>
                    </Nav.Link>
                    <Nav.Link onClick={Auth.logout} className="navbar ">
                      <p className="navglow">Logout</p>
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link
                    className=" navbar mx-.5"
                    onClick={() => setShowModal(true)}
                  >
                    <p className="navglow" style={{ fontSize: "24px" }}>
                      Login/Sign Up
                    </p>
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Nav>
      <Modal
        animation={false}
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
        className="border border-3"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header
            closeButton
            className=" border border-3 border-warning"
            style={{ backgroundColor: "black" }}
          >
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link
                    eventKey="login"
                    className="navglow starA font-weight-bold mt-3"
                  >
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="signup"
                    className="navglow starA font-weight-bold mt-3 mx-3"
                  >
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
                <img
                  src={character}
                  style={{
                    width: "14%",
                    marginLeft: "210px",
                    marginTop: "5px",
                  }}
                  alt="character login"
                />
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="border border-3 border-warning"
            style={{ backgroundColor: "black" }}
          >
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
