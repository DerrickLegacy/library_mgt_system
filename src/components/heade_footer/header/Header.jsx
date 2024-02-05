import React, { useEffect, useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Row, Col, Button, Stack } from "react-bootstrap";
import Search from "../../search/Search";
// import { Col, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import Clock from "../../clock/Clock";
import { Link } from "react-router-dom";
function Header({ showHeader, showSearch }) {
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [iconColumnSize, setIconColumnSize] = useState(8);
  const [books, setBooks] = useState([]);
  var colSize = 9;

  useEffect(() => {
    fetch("http://localhost:3600/api/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching books data via endpoint", error);
      });
  }, []);
  useEffect(() => {
    setShowSearchBar(showSearch);
  }, [showSearch]);
  useEffect(() => {
    setShowProfile(showHeader);
    setIconColumnSize(colSize);
    // console.log(showProfile + " in header");
  }, [showHeader, colSize, showProfile]);
  return (
    <>
      <div
        className="header-page"
        // style={{ background: " rgb(197, 219, 245)" }}
      >
        <Row style={{ margin: "2px 0px 0px 0px" }}>
          <Col md={3}>
            <strong>
              <Clock />
            </strong>
          </Col>
          <Col md={iconColumnSize} className="text-end">
            <div>
              Connect with us :{""}
              <FaFacebook
                size={28}
                style={{ marginRight: "10px", marginLeft: "6px" }}
              />
              <FaTwitter size={28} style={{ marginRight: "10px" }} />
              <FaInstagram size={28} style={{ marginRight: "10px" }} />
              <FaWhatsapp size={28} style={{ marginRight: "10px" }} />
              <FaLinkedin size={28} style={{ marginRight: "5px" }} />
              {showHeader ? (
                <span style={{ marginLeft: "4px", color: "red" }}> |</span>
              ) : null}
            </div>
          </Col>
          {showHeader
            ? (colSize = 8 && (
                <Col md={2} className="text-end">
                  <Stack direction="horizontal">
                    <Col>
                      <span style={{ fontSize: "11px" }}>Profile</span>
                      <FaUser
                        size={28}
                        style={{ marginRight: "3px", color: "#bc2a8d" }}
                      />
                    </Col>
                    <Col>
                      <span>
                        <Link to="/">
                          <Button variant="outline-dark" size="sm">
                            Logout
                          </Button>
                        </Link>
                      </span>
                    </Col>
                  </Stack>
                </Col>
              ))
            : null}
        </Row>
      </div>
      {showSearchBar ? (
        <>
          <Row
            className="border border-secondary p-3 mt-2"
            style={{ backgroundColor: "#11111f" }}
          >
            <Col>
              <img
                src="/images/lms-icon.PNG"
                alt="Library Management System Logo"
                height={70}
              />
            </Col>
            <Col className="col-md-6">
              <Search dataItems={books} showDropDown={true} />
            </Col>
            <Col
              align="center"
              className="cart d-flex align-items-center justify-content-center text-white"
            >
              <BsFillCartPlusFill size={30} /> <span className="p-3">| </span>
              <Button variant="primary">Cart</Button>
            </Col>
          </Row>
          <Row className="border border-secondary "></Row>
          <Row>{/* <Col></div></Col> */}</Row>
        </>
      ) : null}
    </>
  );
}

export default Header;
