import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationBar() {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#fiction">Fiction</Nav.Link>
            <Nav.Link href="#link">Children</Nav.Link>
            <Nav.Link href="#link">Adventure</Nav.Link>
            <Nav.Link href="#link">Romance</Nav.Link>

            <NavDropdown title="More" id="basic-nav-dropdown">
              <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  African Literature
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Christian literature
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Crime</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Love</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Theology</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Theatre</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Environment
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Feminism</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Culture</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Philosophy
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Mystery</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action/3.4">
                  Relationships
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Politics</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Poetry</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Espionage
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Spanish Literature
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Black Female Authors
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Travel</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Russian Literature
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Sports</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Sexuality
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Queer</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Retellings
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Short Stories
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Thriller</NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr style={{ width: "100%" }} />
    </>
  );
}

export default NavigationBar;
