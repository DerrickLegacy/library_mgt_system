import React from "react";
import Header from "../../components/heade_footer/header/Header";
import Footer from "../../components/heade_footer/footer/Footer";
import { Row, Col } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import LeftSideNav from "../../components/NavigationBar/LeftSideNav";
import Hero from "../../components/hero/Hero";

function Homepage() {
  return (
    <>
      <Row>
        <Header showSearch={true} showHeader={true} />
      </Row>
      <Row>
        <Col>
          <LeftSideNav />
        </Col>
        <Col xs={9} className="border ">
          <NavigationBar />
          <div id="hero" className="hero-component" >
            <Hero />
          </div>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </>
  );
}

export default Homepage;
