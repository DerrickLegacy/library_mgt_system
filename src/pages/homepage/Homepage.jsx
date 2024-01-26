import React, { useEffect, useState, useCallback } from "react";
import Header from "../../components/heade_footer/header/Header";
import Footer from "../../components/heade_footer/footer/Footer";
import { Row, Col } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import LeftSideNav from "../../components/NavigationBar/LeftSideNav";
import Hero from "../../components/hero/Hero";

function Homepage() {
  const [currentComponent, setCurrentComponent] = useState("home");
  const setComponent = (data) => {
    setCurrentComponent(data);
  };
  const renderComponent = useCallback(() => {
    switch (currentComponent) {
      case "home":
        return (
          <>
            <Col>
              <LeftSideNav />
            </Col>
            <Col xs={9} className="border ">
              {/* Pass setComponent as componentToggle */}
              <NavigationBar componentToggle={setComponent} />

              <div id="hero" className="hero-component">
                <Hero />
              </div>
            </Col>
          </>
        );
      case "fiction":
        return <div>Home n</div>;
      default:
        return null;
    }
  }, [currentComponent]);
  useEffect(() => {
    renderComponent();
  }, [currentComponent, renderComponent]);

  return (
    <>
      <Row>
        <Header showSearch={true} showHeader={true} />
      </Row>
      <Row>{renderComponent()}</Row>
      <Row>
        <Footer />
      </Row>
    </>
  );
}

export default Homepage;
