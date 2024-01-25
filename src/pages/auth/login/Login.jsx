import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import * as yup from "yup";
import { useFormik } from "formik";
import { FaUser } from "react-icons/fa";
import ForgotPassword from "../forgot_password/ForgotPassword";

const initialValues = {
  username: "",
  password: "",
};
const validationSchema = yup.object().shape({
  username: yup
    .string()
    .email("Please enter valid email.")
    .required("Required Input"),
  password: yup
    .string()
    .min(5, "Minimum length of 5 characters")
    .required("Password is required!"),
});

function Login() {
  let navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [formInput, setFormInput] = useState({});
  const [invalid, setInvalid] = useState(false);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setFormInput(values);
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
    const result = members.filter(
      (member) => member.username === formInput.username
    );
    if (result.length > 1) {
      navigate("/home");
    } else {
      setInvalid(true);
      console.log("Invalid input ");
    }
  };

  useEffect(() => {
    fetch("http://localhost:3600/api/members")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMembers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    isSubmitting,
    touched,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  const validateEntryCredentials = async () => {
    const isValidMember = members.filter((member) => {
      return (
        member.username === values.username &&
        member.password === values.password
      );
    });
    if (isValidMember.length > 0) {
      navigate("/home");
    } else {
      setInvalid(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      resetForm();
    }
  };

  return (
    <div>
      <div className="login-bg">
        <div
          className="text-center "
          style={{
            width: "30%",
            height: "",
            margin: "auto",
          }}
        >
          <Row>
            <Col style={{ marginTop: "25px", marginBottom: "22px" }}>
              <Form onSubmit={handleSubmit}>
                <Card>
                  <Card.Header>
                    <FaUser size={38} className="text-info" />
                    <h4>Sign In</h4>
                    {invalid ? (
                      <h6 style={{ color: "red" }}>
                        <em>Invalid Credentials !</em>
                      </h6>
                    ) : null}
                  </Card.Header>
                  <Card.Body>
                    <Form.Group>
                      <FloatingLabel
                        controlId="username"
                        label="Email Address"
                        className="mb-2"
                      >
                        <Form.Control
                          value={values.username}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="custom-input"
                          type="email"
                          placeholder="Email Address"
                        />
                        {touched.username && errors.username ? (
                          <div className="input-error ">
                            <em>{errors.username}</em>
                          </div>
                        ) : (
                          ""
                        )}
                      </FloatingLabel>
                    </Form.Group>

                    <Form.Group>
                      <FloatingLabel
                        controlId="password"
                        className="mb-2"
                        label="Password"
                      >
                        <Form.Control
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="custom-input"
                          type="password"
                          placeholder="Password"
                        ></Form.Control>
                        {touched.password && errors.username ? (
                          <div className="input-error ">
                            <em>{errors.password}</em>
                          </div>
                        ) : (
                          ""
                        )}
                      </FloatingLabel>
                    </Form.Group>
                    <div style={{ textAlign: "left" }}>
                      <Form.Check
                        type="checkbox"
                        label="Always Remember Me"
                      ></Form.Check>
                    </div>
                    <div
                      className="text-primary text-center text-info"
                      style={{ textAlign: "left" }}
                    >
                      <ForgotPassword />

                      <br />
                      <Link
                        to="/register"
                        className="anchor-links link-decor links text-info"
                      >
                        <strong className="ml-10">Register for Account</strong>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
                <div className="mt-1" style={{ textAlign: "center" }}>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    onClick={validateEntryCredentials}
                  >
                    <h5>Login</h5>
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Login;
