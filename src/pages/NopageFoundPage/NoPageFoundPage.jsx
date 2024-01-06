import React from "react";

export default function NoPageFoundPage() {
  return (
    <>
      <div
        className="text-center   no-page-found"
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
    </>
  );
}
