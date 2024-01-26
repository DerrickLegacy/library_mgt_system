import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationBar({ componentToggle }) {
  const handleComponentToggle = (componentName) => {
    componentToggle(componentName);
  };

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleComponentToggle("home")}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => handleComponentToggle("fiction")}>
              Fiction
            </Nav.Link>
            <Nav.Link onClick={() => handleComponentToggle("children")}>
              Children
            </Nav.Link>
            <Nav.Link onClick={() => handleComponentToggle("adventure")}>
              {" "}
              Adventure
            </Nav.Link>
            <Nav.Link onClick={() => handleComponentToggle("romance")}>
              Romance
            </Nav.Link>

            <NavDropdown title="More" id="basic-nav-dropdown">
              <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("action")}
                >
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("african_literature")}
                >
                  African Literature
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("christian_literature")}
                >
                  Christian literature
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("crime")}
                >
                  Crime
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleComponentToggle("love")}>
                  Love
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("history")}
                >
                  History
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("theorogy")}
                >
                  Theology
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("theatre")}
                >
                  Theatre
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("environment")}
                >
                  Environment
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("feminism")}
                >
                  Feminism
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("culture")}
                >
                  Culture
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("philosophy")}
                >
                  Philosophy
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("mystery")}
                >
                  Mystery
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("relationships")}
                >
                  Relationships
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("politics")}
                >
                  Politics
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("poetry")}
                >
                  Poetry
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("espionage")}
                >
                  Espionage
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("fantasy")}
                >
                  Fantasy
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("spanish_literature")}
                >
                  Spanish Literature
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("black_female_author")}
                >
                  Black Female Authors
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("travel")}
                >
                  Travel
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("russian_literature")}
                >
                  Russian Literature
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("sports")}
                >
                  Sports
                </NavDropdown.Item>

                <NavDropdown.Item
                  onClick={() => handleComponentToggle("queer")}
                >
                  Queer
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("retellings")}
                >
                  Retellings
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("short_stories")}
                >
                  Short Stories
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleComponentToggle("thriller")}
                >
                  Thriller
                </NavDropdown.Item>
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
