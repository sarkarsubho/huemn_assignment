import React from "react";
import "./styles/navbar.scss";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="nav">
      <h2>Recipe app </h2>
      <button
        onClick={() =>
          navigate(location.pathname === "/favorites" ? "/" : "/favorites")
        }
      >
        {location.pathname === "/favorites" ? "View Recipes" : "View Fovorites"}
      </button>
    </div>
  );
};

export default Navbar;
