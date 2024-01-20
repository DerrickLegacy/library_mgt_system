import React from "react";
import { Route, Routes } from "react-router-dom";
import NoPageFoundPage from "../pages/NopageFoundPage/NoPageFoundPage";
import Homepage from "../pages/homepage/Homepage";
import Auth from "../pages/auth/Auth";

function Routings({ routeApp }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth loginAuth={true} />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<Auth loginAuth={false} />} />
        <Route path="*" element={<NoPageFoundPage />} />
      </Routes>
    </>
  );
}

export default Routings;
