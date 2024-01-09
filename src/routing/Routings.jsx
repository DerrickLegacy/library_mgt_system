import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import Login from "../pages/auth/login/Login";
import NoPageFoundPage from "../pages/NopageFoundPage/NoPageFoundPage";
// import Register from "../pages/auth/register/Register";
import ServerTest from "../ServerTest";
import Homepage from "../pages/homepage/Homepage";
import Auth from "../pages/auth/Auth";

function Routings({ routeApp }) {
  // const [login, setLogin] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const alterLoginStatus = (data) => {
    setLoginStatus(data)
    routeApp(loginStatus);
 }

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth authRoute={alterLoginStatus} />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/server" element={<ServerTest />} />
        <Route path="*" element={<NoPageFoundPage />} />
      </Routes>
    </>
  );
}

export default Routings;
