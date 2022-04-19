import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
// import { Navbar } from "react-bootstrap";
import { Routes } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Nav activeKey={window.location.pathname}>
        <LinkContainer to="/jakemerch">
          <Nav.Link>jakemerch</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/kylemerch">
          <Nav.Link>kylemerch</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/petermerch">
          <Nav.Link>petermerch</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/bradmerch">
          <Nav.Link>bradmerch</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/gavinmerch">
          <Nav.Link>gavinmerch</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/runefarm">
          <Nav.Link>runefarm</Nav.Link>
        </LinkContainer>
      </Nav>
    </>
  );
};

export default Navbar;
