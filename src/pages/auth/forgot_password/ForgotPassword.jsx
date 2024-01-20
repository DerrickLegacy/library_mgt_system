import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
// import { Form } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function ForgotPassword() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link className="anchor-links link-decor links text-info">
        <strong variant="primary" onClick={handleShow}>
          Forgot Password ?
        </strong>
      </Link>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="emailaddress">
              <Form.Label className="fw-bold">Email Address</Form.Label>
              <Form.Control placeholder="Enter your email address" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="security_question">
              <Form.Label className="fw-bold">Security Question</Form.Label>
              <Form.Select aria-label="security_question">
                <option value=""></option>
                <option value="favourite_color">Favourite Colour</option>
                <option value="country_side">Best Countryside Area</option>
                <option value="birth_place">Birth Place</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="security_answer">
              <Form.Label className="fw-bold">Securit Answer</Form.Label>
              <Form.Control placeholder="Security Answer" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ForgotPassword;
