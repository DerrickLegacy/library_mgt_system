import React from "react";
import { Route, Routes } from "react-router-dom";
import NoPageFoundPage from "../pages/NopageFoundPage/NoPageFoundPage";
import Homepage from "../pages/homepage/Homepage";
import Auth from "../pages/auth/Auth";
import Footer from "../components/heade_footer/footer/Footer";

function Routings({ routeApp }) {
  const loginAuth = (data) => {
    console.log(data); //incomplete as of
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth loginAuth={loginAuth} />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<NoPageFoundPage />} />
      </Routes>
    </>
  );
}

export default Routings;
