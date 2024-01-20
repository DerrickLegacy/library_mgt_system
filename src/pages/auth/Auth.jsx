import React, { useEffect } from "react";
import { useState } from "react";
import { Row, Col, Stack, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import Header from "../../components/heade_footer/header/Header";

function Auth({ loginAuth }) {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to home when clicking Login
    setLogin(true);
    navigate("/");
  };
  useEffect(() => {
    setLogin(loginAuth);
  }, [loginAuth]);

  const handleRegister = () => {
    setLogin(false);
    navigate("/register");
  };
  return (
    <>
      <Header showSearch={false} />
      <Row className="text-white" style={{ backgroundColor: "#11111f" }}>
        <Col md={2} className="text-center">
          <img src="/images/book_shelf_icon.PNG" height="100px" alt="" />
        </Col>
        <Col md={8}>
          <h1 style={{ fontSize: "50px" }}> Library Management System </h1>
          <h6>
            <em>"An entire archive at yoiur finger tips..!"</em>
          </h6>
        </Col>
        <Col md={2} className="text-center d-flex justify-content-center">
          <Stack direction="horizontal" gap={1} className="">
            <Link to="/">
              <Button variant="dark" onClick={handleLogin}>
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="dark" onClick={handleRegister}>
                Register
              </Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <hr />
      {/* Render Login or Register based on the login state */}
      {login ? <Login /> : <Register />}
    </>
  );
}

export default Auth;
