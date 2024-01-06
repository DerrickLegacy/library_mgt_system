import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import NoPageFoundPage from "../pages/NopageFoundPage/NoPageFoundPage";
import Register from "../pages/auth/register/Register";
import ServerTest from "../ServerTest";
import Homepage from "../pages/homepage/Homepage";

function Routings() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/server" element={<ServerTest />} />
        <Route path="*" element={<NoPageFoundPage />} />
      </Routes>
    </>
  );
}

export default Routings;
