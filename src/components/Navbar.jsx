import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ candidateCount }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 id="nav-heading">Job Portal</h1>
      {location.pathname === "/" ? null : (
        <>
          {location.pathname === "/candidate/registration" && (
            <>
              <button id="nav-home-btn" onClick={() => navigate("/")}>Home</button>
              <button id="nav-list-btn" onClick={() => navigate("/candidate/list")}>
                Candidate List ({candidateCount})
              </button>
            </>
          )}
          {location.pathname === "/candidate/list" && (
            <>
              <button id="nav-home-btn" onClick={() => navigate("/")}>Home</button>
              <button id="nav-registration-btn" onClick={() => navigate("/candidate/registration")}>
                Candidate Registration
              </button>
            </>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
