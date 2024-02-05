import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Image,
  Modal,
  Row,
  Stack,
  Tab,
  Tabs,
} from "react-bootstrap";
import { HiViewList } from "react-icons/hi";
import { CiViewColumn } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function BookCategoryDetailsDisplay() {
  const [showModal, setShowModal] = useState(false);
  const modalShowStatus = () => {
    setShowModal(true);
  };
  const modalCloseStatus = () => {
    setShowModal(false);
  };
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              style={{ height: "160px", objectFit: "cover" }}
              src="/images/will-van-wingerden-dsvJgiBJTOs-unsplash.jpg"
            ></Card.Img>
            <Card.Body>
              <Card.Title>
                <h3>Fiction Books </h3>
              </Card.Title>
              <div>
                <em>Find interesting science expenditions and discoveries</em>
              </div>
              <div>
                <Card.Subtitle>
                  <Stack direction="horizontal" gap={2}>
                    <div>
                      <strong>Showing 1-10</strong>
                    </div>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle variant="none" id="pages_dropdown">
                          <strong>Books per page display</strong>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>12 per pages</Dropdown.Item>
                          <Dropdown.Item>18 per pages</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                          <strong>Sort By:</strong>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>A-Z</Dropdown.Item>
                          <Dropdown.Item>By Id</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div>
                      <span>
                        <strong>View :</strong>
                      </span>
                      <HiViewList size={30} />
                      <CiViewColumn size={30} />
                    </div>
                  </Stack>
                  <hr />
                </Card.Subtitle>
              </div>
              <div>
                <Col xs={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      height={200}
                      key={1}
                      src="/images/yemen.webp"
                    />
                    <Card.Body>
                      <h5>
                        <Row>
                          <Col xs={4}>Title</Col>{" "}
                          <Col xs={8}>: Fictious House</Col>
                        </Row>{" "}
                      </h5>
                      <Row>
                        <Col xs={4}>Author</Col>{" "}
                        <Col xs={8}>: Ahaabwe Derrick</Col>
                      </Row>
                      <Row>
                        <Col xs={4}>ISBN </Col> <Col xs={8}>: 67389bgh2678</Col>
                      </Row>
                      <Row>
                        <Col xs={4}>Book ID </Col> <Col xs={8}>: 67</Col>
                      </Row>
                    </Card.Body>
                    <Card.Footer>
                      <Stack
                        direction="horizontal"
                        gap={2}
                        className="d-flex justify-content-center"
                      >
                        <Button variant="info" onClick={modalShowStatus}>
                          <span>Details </span>
                          <CgDetailsMore size={20} />
                        </Button>
                        <div className="modal">
                          <Modal size="lg" show={showModal} centered>
                            <Modal.Header>
                              <Modal.Title>
                                <h4>Title : Fictious House</h4>
                              </Modal.Title>{" "}
                            </Modal.Header>
                            <Modal.Body>
                              <Row>
                                <Col sm={6} className="mb-1">
                                  <Image
                                    height={250}
                                    alt="book resource image"
                                    src="/images/yemen.webp"
                                  />
                                </Col>
                                <Col sm={6}>
                                  <Tabs>
                                    <Tab
                                      eventKey="author"
                                      title="Author"
                                      style={{ paddingTop: "20px" }}
                                    >
                                      <Row>
                                        <Col xs={4}>Name</Col>
                                        <Col xs={8}>: Dr.Conwel</Col>
                                      </Row>
                                      <Row>
                                        <Col xs={4}>Citizenship </Col>
                                        <Col xs={8}>: Ugandan</Col>
                                      </Row>
                                      <Row>
                                        <Col xs={4}>D.O.B </Col>
                                        <Col xs={8}>: 1960-Ma</Col>
                                      </Row>
                                      <Row>
                                        <Col xs={4}>Email </Col>
                                        <Col xs={8}>: conwel@gmail.com</Col>
                                      </Row>
                                      <Row>
                                        <Col xs={4}>Blog URL </Col>
                                        <Col xs={8}>
                                          : <Link>https//:www.conwel.com</Link>
                                        </Col>
                                      </Row>
                                    </Tab>
                                    <Tab
                                      eventKey="Description"
                                      title="Description"
                                    >
                                      <Row>
                                        <Col>
                                          <div
                                            style={{
                                              maxHeight: "140px",
                                              overflow: "auto",
                                              borderBottom: "1px solid black",
                                            }}
                                          >
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Commodi dolore ex, nihil numquam
                                            accusantium voluptatem cum fuga
                                            alias sit soluta aliquid, doloremque
                                            expedita mollitia blanditiis
                                            assumenda ratione pariatur excepturi
                                            id? Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Perspiciatis harum excepturi omnis,
                                            alias perferendis sit esse iure
                                            corrupti similique, enim odio magni
                                            tempora, dignissimos commodi? Odio
                                            ipsa odit placeat exercitationem!
                                          </div>
                                        </Col>
                                      </Row>
                                      {/* <hr /> */}
                                      <Row>
                                        <Col xs={6}>Edition</Col>
                                        <Col xs={6}>
                                          : 10 <em>th</em>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col xs={6}>Total Copies</Col>
                                        <Col xs={6}>: 400</Col>
                                      </Row>
                                      <Row>
                                        <Col xs={6}>Available Copies</Col>
                                        <Col xs={6}>: 135</Col>
                                      </Row>
                                    </Tab>
                                  </Tabs>
                                </Col>
                              </Row>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="outline-success">
                                Download <FaFileDownload size={20} />
                              </Button>
                              <Button onClick={modalCloseStatus}>Close</Button>
                            </Modal.Footer>
                          </Modal>
                        </div>
                        <Button variant="outline-success">
                          Download <FaFileDownload size={20} />
                        </Button>
                      </Stack>
                    </Card.Footer>
                  </Card>
                </Col>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default BookCategoryDetailsDisplay;
