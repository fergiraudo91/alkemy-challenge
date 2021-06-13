import React from "react";

export const Spiner = () => {
  return (
    <div className="container pt-5" style={{ width: "100%" }}>
      <div
        className="spinner-border text-warning"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
