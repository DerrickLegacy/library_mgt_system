import React, { useEffect, useState, useCallback } from "react";
import Header from "../../components/heade_footer/header/Header";
import Footer from "../../components/heade_footer/footer/Footer";
import { Row, Col } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import LeftSideNav from "../../components/NavigationBar/LeftSideNav";
import Hero from "../../components/hero/Hero";
import Filter from "../../components/Filter/Filter";
import BookCategoryDetailsDisplay from "../../components/book_category_display/BookCategoryDetailsDisplay";

function Homepage() {
  const [currentComponent, setCurrentComponent] = useState("home");
  const setComponent = (component) => {
    setCurrentComponent(component);
  };
  // const componentToggle = (component) => {
  //   setCurrentComponent(component);
  // }
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
              <NavigationBar componentToggle={setComponent} setMore={true} />

              <div id="hero" className="hero-component">
                <Hero />
              </div>
            </Col>
          </>
        );
      case "Fiction":
        return (
          <div className="mt-1 mb-1">
            <Row>
              <Col>
                <NavigationBar
                  componentToggle={setComponent}
                  currentComponent={currentComponent}
                  setMore={false}
                />
              </Col>{" "}
            </Row>
            <Row>
              <div>
                <h4>
                  Home/ {""}
                  {currentComponent}
                </h4>
              </div>
            </Row>
            <Row>
              <Col xs={3}>
                <Filter currentComponent={currentComponent} />
              </Col>
              <Col xs={9}>
                <BookCategoryDetailsDisplay />
              </Col>
            </Row>
          </div>
        );
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
