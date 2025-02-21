import React from "react";
import { useLocation, useNavigate,Link } from "react-router-dom";

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px'
};
const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#525252',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px',
};
const centerHeadingStyle = {
  marginLeft: '625px',
  flex: '1', // Allow it to take up the remaining space
};
const Navbar = ({ candidateCount }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="navbar" style={navbarStyle}>
      <div  style={centerHeadingStyle}>
        <h1 className="header-title" data-testid='header-title'>Job Portal</h1>
      </div>
      {location.pathname === "/" ? null : (
        <>
          {location.pathname === "/candidate/registration" && (
            <>
              <button style={linkStyle} id="nav-home-btn" onClick={() => navigate("/")}>Home</button>
              <button style={linkStyle} id="nav-list-btn" onClick={() => navigate("/candidate/list")}>
                Candidate List ({candidateCount})
              </button>
            </>
          )}
          {location.pathname === "/candidate/list" && (
            <>
              <button style={linkStyle} id="nav-home-btn" onClick={() => navigate("/")}>Home</button>
              <button style={linkStyle} id="nav-registration-btn" onClick={() => navigate("/candidate/registration")}>
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
