import React from "react";

import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Register() {
  return (
    <>
      <div className="login-bg">
        <div
          className="text-center "
          style={{ width: "30%", margin: "0% auto" }}
        >
          <Row>
            <Col style={{ marginTop: "10px", marginBottom: "10px" }}>
              <Card>
                <Card.Header>
                  <FaUser size={40} className="text-info" />
                  <h3>Register Account</h3>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Form.Group>
                          <FloatingLabel
                            controlId="firstName"
                            label="First Name"
                            className="mb-1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="name@example.com"
                            />
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <FloatingLabel
                            controlId="lastname"
                            label="Last Name"
                            className="mb-1"
                          >
                            <Form.Control type="text" placeholder="Last Name" />
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group
                          className="mb-1"
                          controlId="formGridAddress1"
                        >
                          <FloatingLabel
                            controlId="email"
                            label="Email Address"
                            className="mb-2"
                          >
                            <Form.Control
                              type="email"
                              placeholder="Email Address"
                            />
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Group className="mb-1" controlId="formGridAddress1">
                        <FloatingLabel
                          controlId="password"
                          label="Password"
                          className="mb-2"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </FloatingLabel>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group className="mb-1" controlId="formGridAddress1">
                        <FloatingLabel
                          controlId="confirmpassword"
                          label="Confirm Password"
                          className="mb-2"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                          />
                        </FloatingLabel>
                      </Form.Group>
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Form.Group>
                          <FloatingLabel
                            controlId="security_question"
                            label="Security Question"
                            className="mb-1"
                          >
                            <Form.Select aria-label="security_question">
                              <option value=""></option>
                              <option value="favourite_color">
                                Favourite Colour
                              </option>
                              <option value="country_side">
                                Best Countryside Area
                              </option>
                              <option value="birth_place">Birth Place</option>
                            </Form.Select>
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <FloatingLabel
                            controlId="security_answer"
                            label="Security answer"
                            className="mb-1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Security Answer"
                            />
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Group className="mb-1" controlId="phone_number">
                        <FloatingLabel
                          controlId="phone_number"
                          label="Phone Number"
                          className="mb-2"
                        >
                          <Form.Control
                            type="phone_number"
                            placeholder="Phone Number"
                          />
                        </FloatingLabel>
                      </Form.Group>
                    </Row>
                    <Row className="mb-2">
                      <Col md={4}>
                        <Form.Group>
                          <FloatingLabel
                            controlId="city"
                            label="City"
                            className="mb-1"
                          >
                            <Form.Control type="text" placeholder="City" />
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <FloatingLabel
                            controlId="state"
                            label="State"
                            className="mb-1"
                          >
                            <Form.Select aria-label="State">
                              <option value=""></option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                            </Form.Select>
                          </FloatingLabel>
                        </Form.Group>
                      </Col>

                      <Col md={4}>
                        <Form.Group>
                          <FloatingLabel
                            controlId="zip"
                            label="Zip"
                            className="mb-1"
                          >
                            <Form.Control type="text" placeholder="Zip" />
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="text-center" style={{ textAlign: "left" }}>
                      Have an account ?{" "}
                      <Link to="/" className="anchor-links link-decor links">
                        <strong className="text-primary ">Login</strong>
                      </Link>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
              <div className="mt-2" style={{ textAlign: "center" }}>
                <Button>
                  <h5>Register</h5>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Register;
