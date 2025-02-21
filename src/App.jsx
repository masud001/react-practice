// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components01/Home';
import CandidateRegistration from './components01/CandidateRegistration';
import CandidateList from './components/CandidateList';
import Navbar from './components01/Navbar';
import './App.css';
const App = () => {
  const [candidates, setCandidates] = useState([]);

  const handleRegister = (candidate) => {
    setCandidates([...candidates, candidate]);
  };

  return (
    <Router>
      <Navbar candidateCount={candidates.length} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route
          path="/candidate/registration"
          element={
            <CandidateRegistration />
          }
        />
        <Route
          path="/candidate/list"
          element={<CandidateList candidates={candidates} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
