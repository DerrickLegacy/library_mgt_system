import React from "react";
import Homepage from "../homepage/Homepage";
import Footer from "../../components/heade_footer/footer/Footer";
import Header from "../../components/heade_footer/header/Header";

export default function NoPageFoundPage() {
  return (
    <>
      <Header />
      <div
        className="text-center no-page-found"
        style={{ backgroundColor: "lightgray" }}
      >
        <p>
          <h1 className="text-primary">
            <strong>00ps..404!</strong>
          </h1>
          <h4>
            <em>No page found for this address. </em>
          </h4>
        </p>
      </div>
      <Footer />
    </>
  );
}
