import { useNavigate } from "react-router-dom";
import React from "react";
import "../styles/header.css";

function Header() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="header-main">
      <div onClick={() => navigateTo("/")}>ArogyaMastu</div>
      <div className="nav-buttons">
        <button className="button" onClick={() => navigateTo("/doctors")}>
          Doctors
        </button>
        <button className="button" onClick={() => navigateTo("/about")}>
          About
        </button>
        <button className="button" onClick={() => navigateTo("/profile")}>
          Profile
        </button>
      </div>
    </div>
  );
}
export default Header;
