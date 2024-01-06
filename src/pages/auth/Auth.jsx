import React from "react";

import { Row, Col } from "react-bootstrap";

function Auth() {
  return (
    <>
      <Row className="bg-info ">
        <Col md={2} className="text-center">
          <img src="/images/book_shelf_icon.PNG" height="100px" alt="" />
        </Col>
        <Col md={10}>
          <h1 style={{ fontSize: "50px" }}> Library Management System </h1>
          <h6>
            <em>"An entire archive at yoiur finger tips..!"</em>
          </h6>
        </Col>
      </Row>
      <hr />
    </>
  );
}

export default Auth;
