import React from "react";
import Header from "../../components/heade_footer/header/Header";
import Footer from "../../components/heade_footer/footer/Footer";
import { Row } from "react-bootstrap";

function Homepage() {
  return (
    <>
      <Row>
        <Header showSearch={true} showHeader={true} />
      </Row>
      <Row>
        <div className="homepage-body"></div>
      </Row>
      <Row>
        <Footer />
      </Row>
    </>
  );
}

export default Homepage;
