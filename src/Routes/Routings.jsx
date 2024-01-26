import React from "react";
import { Route, Routes } from "react-router-dom";
import NoPageFoundPage from "../pages/NopageFoundPage/NoPageFoundPage";
import Homepage from "../pages/homepage/Homepage";
import Auth from "../pages/auth/Auth";
import Hero from "../components/hero/Hero";
import Filter from "../components/Filter/Filter";
import BookCategoryDetailsDisplay from "../components/book_category_display/BookCategoryDetailsDisplay";

function Routings({ routeApp }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth loginAuth={true} />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<Auth loginAuth={false} />} />
        <Route path="*" element={<NoPageFoundPage />} />
        <Route path="/category" element={<BookCategoryDetailsDisplay />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </>
  );
}

export default Routings;
