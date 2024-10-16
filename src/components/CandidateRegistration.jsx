// src/components/CandidateRegistration.js
import React, { useState } from 'react';

const CandidateRegistration = ({ onRegister, existingEmails = [] }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const addSkill = () => {
    if (skillInput && skills.length < 5) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setRole('');
    setSkills([]);
    setSkillInput('');
    setStatusMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingEmails.includes(email)) {
      setStatusMessage('Email already exists');
    } else {
      onRegister({ name, email, role, skills });
      setStatusMessage('Candidate profile created');
      resetForm();
    }
  };

  return (
    <form
      data-testid="registration-form"
      onSubmit={handleSubmit}
    >
      <h1 data-testid="nav-heading">Job Portal</h1>
      <input
        data-testid="form-input-name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        data-testid="form-input-email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        data-testid="form-input-role"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        data-testid="form-input-skill"
        placeholder="Add a skill"
        value={skillInput}
        onChange={(e) => setSkillInput(e.target.value)}
      />
      <button
        type="button"
        data-testid="add-btn"
        onClick={addSkill}
        disabled={!skillInput || skills.length >= 5}
      >
        Add Skill
      </button>
      {skills.map((skill, index) => (
        <span key={index} data-testid="skill-tag">
          {skill}
        </span>
      ))}
      <button
        type="reset"
        data-testid="reset-btn"
        onClick={resetForm}
      >
        Reset
      </button>
      <button
        type="submit"
        data-testid="submit-btn"
        disabled={!name || !email || !role || skills.length === 0}
      >
        Submit
      </button>
      {statusMessage && <p data-testid="alertMessage">{statusMessage}</p>}
    </form>
  );
};

export default CandidateRegistration;
