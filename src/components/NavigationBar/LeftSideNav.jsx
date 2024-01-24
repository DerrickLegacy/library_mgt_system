import React, { useState } from "react";
import { Button, Accordion, Modal, Form } from "react-bootstrap";

function LeftSideNav() {
  const [show, setShow] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = (event) => {
    setButtonClicked(!buttonClicked);
    handleShow(event); // Call handleShow separately
    event.stopPropagation();
  };
  const handleShow = (event) => {
    setShow(true);
    event.stopPropagation();
  };

  const handleClose = (event) => {
    setShow(false);
    event.stopPropagation();
  };
  return (
    <div className="p-2 border  ">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Reading List{" "}
            <Button
              variant="primary"
              className={`rounded-circle btn-sm ms-4 ${
                buttonClicked ? "btn-clicked" : ""
              }`}
              onClick={handleButtonClick}
            >
              +
            </Button>
            {/* Modal */}
            <Modal show={show} onHide={handleClose} backdrop="static">
              <Modal.Header closeButton>
                <Modal.Title>Create New List</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="list-name">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control placeholder="Enter list name..." />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="description">
                    <Form.Label className="fw-bold">Description</Form.Label>
                    <Form.Control placeholder="Description" />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Accordion.Header>
          <Accordion.Body>Accordion Body Content</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default LeftSideNav;
