import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import Routes from './Routes';

export default function App() {
    return (
      <div className="App container">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
              <img src='/ms-icon-70x70.png'
              width="30" height="30"
              alt="Threddit Logo"></img>
              <Link to="/">Threddit</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
              <Nav
              style={{display:"flex", flexDirection:"row",
              margin: '10px'}}
              bsStyle="pills" stacked class="ml-auto">
                <LinkContainer to="/signup" style={{margin:'10px'}}>
                  <NavItem> Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login" style={{margin:'10px'}}>
                  <NavItem >Login</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
}
