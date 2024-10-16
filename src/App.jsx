// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import CandidateRegistration from './components/CandidateRegistration';
import CandidateList from './components/CandidateList';

const App = () => {
  const [candidates, setCandidates] = useState([]);

  const handleRegister = (candidate) => {
    setCandidates([...candidates, candidate]);
  };

  return (
    <Router>
      <nav>
        <Link to="/" data-testid="nav-home-btn">Home</Link>
        <Link to="/candidate/registration" data-testid="nav-registration-btn">Candidate Registration</Link>
        <Link to="/candidate/list" data-testid="nav-list-btn">Candidate List ({candidates.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/candidate/registration"
          element={
            <CandidateRegistration
              onRegister={handleRegister}
              existingEmails={candidates.map((c) => c.email)}
            />
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
