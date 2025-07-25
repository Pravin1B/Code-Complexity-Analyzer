import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "C:/Users/pravin/Documents/code-complexity-analyzer/src/Styles/Navbar1.css";

//import {Link} from "react-router-dom";
const MyNavbar: React.FC = () => {
    const navigate = useNavigate();
  return (
    
    <Navbar style={{ backgroundColor: "#001F3F" }} variant="dark" expand="lg">
      <Container>
        {/* Logo + Brand Name */}
        <Navbar.Brand href="https://en.wikipedia.org/wiki/Computational_complexity" target="_blank">
          <img
            src={"Logo.png"}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />

<span className="brand-text">Code Complexity Analyzer</span>
        </Navbar.Brand>
      
        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Navbar Collapse */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>

            {/* Dropdown for About Us */}
            <NavDropdown title="About Us" id="about-dropdown">
              <NavDropdown.Item onClick={() => navigate("/project-overview")}>
                Project Overview
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/how-it-works")}>
                How It Works
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/team-members")}>
                Team Members
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/contact-us")}>
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
