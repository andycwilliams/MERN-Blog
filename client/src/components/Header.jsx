import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="Navbar Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
