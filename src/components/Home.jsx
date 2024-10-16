// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div data-testid="home-component" style={{ textAlign: 'center' }}>
    <h1 data-testid="nav-heading">Job Portal</h1>
    <Link to="/candidate/registration">
      <button data-testid="registration-btn">Register Candidate</button>
    </Link>
    <Link to="/candidate/list">
      <button data-testid="list-btn">List Candidates</button>
    </Link>
  </div>
);

export default Home;
