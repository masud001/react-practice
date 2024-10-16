// src/components/CandidateList.js
import React, { useState } from 'react';

const CandidateList = ({ candidates = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCandidates = candidates.filter((candidate) =>
    candidate.skills.some((skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <h1 data-testid="nav-heading">Job Portal</h1>
      <input
        type="text"
        placeholder="Search skills"
        data-testid="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        data-testid="search-all"
        onClick={() => setSearchTerm('')}
      >
        List All
      </button>
      <p data-testid="profiles-found-tag">
        {filteredCandidates.length} profiles found
      </p>
      <div>
        {filteredCandidates.map((candidate, index) => (
          <div key={index} data-testid="profile-card">
            <h2>{candidate.name}</h2>
            <p>{candidate.role}</p>
            <p>{candidate.email}</p>
            <div>
              {candidate.skills.map((skill, idx) => (
                <span key={idx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
