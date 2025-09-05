import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Layout/header.jsx";

import Footer from "./Layout/footer.jsx";
import MainBody from "./MainBody.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <Header />
    <div className="px-4" />
    <MainBody />
    <Footer />
  </div>
  // </React.StrictMode>
);
