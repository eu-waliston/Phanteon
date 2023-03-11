import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo__section">
          <img
            src={require("../images/LOL-icon.png")}
            alt="logo"
            className="logo"
          />
        </div>

        <div className="navbar__section">
          <ul className="navbar">
            <li className="nav-itens">home</li>
            <li className="nav-itens">biography</li>
            <li className="nav-itens">skins</li>
            <li className="nav-itens">base statistics</li>
          </ul>
        </div>
        <div className="price__section">
          <h2 id="t1">
            <img
              className="logo2"
              src={require("../images/BE_icon.webp")}
              alt="icon"
            />{" "}
            3150
          </h2>
          <h1>/</h1>
          <h2 id="t2">
            <img
              className="logo2"
              src={require("../images/RP_icon.png")}
              alt="icon"
            />{" "}
            790
          </h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
