import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaFax,
} from "react-icons/fa";
import Search from "../../search/Search";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <>
      {" "}
      <div className="text-white">
        <Row
          className="border border-secondary p-3  mt-0 text-white"
          style={{ backgroundColor: "#333345" }}
        >
          <Col xs={7}>Get connected with us on our social network:</Col>
          <Col>
            <div className="d-flex justify-content-end align-items-end">
              <FaFacebook size={28} style={{ marginRight: "10px" }} />
              <FaTwitter size={28} style={{ marginRight: "10px" }} />
              <FaInstagram size={28} style={{ marginRight: "10px" }} />
              <FaWhatsapp size={28} style={{ marginRight: "10px" }} />
              <FaLinkedin size={28} />
            </div>
          </Col>
        </Row>
        <Row className=" p-3" style={{ backgroundColor: "#11111f" }}>
          <Col>
            <h6 className="text-uppercase fw-bold">
              Library Management System
            </h6>
            <hr
              class="mb-2 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                backgroundColor: " #7c4dff",
                height: "2px",
              }}
            />
            <p className="text-center">
              <img
                src="/images/leiada-krozjhen-AbcSYWxnzGo-unsplash.jpg"
                alt="lms icon"
                height={160}
                width={160}
                style={{ borderRadius: "50%" }}
              />
            </p>
            <p>
              <em>
                "Every resource you need for your research need avaialble at
                your finger tips is here!
              </em>
            </p>
          </Col>
          <Col>
            <h6 className=" fw-bold">Search</h6>
            <hr
              class="mb-2 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                backgroundColor: " #7c4dff",
                height: "2px",
              }}
            />
            <p>
              <Search showDropDown={false} />
            </p>
            <h6 className=" fw-bold">Open Hours</h6>
            <hr
              class="mb-2 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                backgroundColor: " #7c4dff",
                height: "2px",
              }}
            />
            <p>
              <table class="table text-center text-white">
                <tbody class="fw-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </Col>
          <Col>
            <h6 className="fw-bold">Category</h6>
            <hr
              class="mb-2 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                backgroundColor: " #7c4dff",
                height: "2px",
              }}
            />
            <ul className="list-unstyled">
              <li>Fiction</li>
              <li>Children</li>
              <li>Adventure</li>
              <li>Technology</li>
              <li>Politics</li>
            </ul>
          </Col>
          <Col>
            <h6 className=" fw-bold">Contact Us</h6>
            <hr
              class="mb-2 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                backgroundColor: " #7c4dff",
                height: "2px",
              }}
            />
            <p>
              <span>
                <FaHome /> Library Hub House
              </span>{" "}
              <br />
              <span>
                <FaEnvelope /> info.@lms.com
              </span>{" "}
              <br />{" "}
              <span>
                <FaPhone /> +256 704665418
              </span>
              <br />{" "}
              <span>
                <FaFax /> +101 2765398092
              </span>
            </p>
          </Col>
        </Row>
        <Row className=" text-center" style={{ backgroundColor: "#2a2a3b" }}>
          <Col>
            &copy; {getCurrentYear()} Your Company Name. All Rights Reserved.
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
