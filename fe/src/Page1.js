import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page1.css'; // Assuming you'll add styles here

function Page1() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(Products); // Navigate to the specified path
  };

  return (
    <div>
      <header className="dashboard-header">
        <h1>Welcome to Cinder</h1>
        <p>Click on an option to get started</p>
      </header>
      <div className="dashboard-grid">
        <div
          className="grid-item"
          onClick={() => handleNavigation('/small-loan')}
        >
          <img
            src="/images/small-loan.jpg" // Replace with the actual image path
            alt="Small Loan"
            className="grid-image"
          />
          <p className="grid-label">I want a Small Loan</p>
        </div>
        <div
          className="grid-item"
          onClick={() => handleNavigation('/mortgage')}
        >
          <img
            src="/images/mortgage.jpg" // Replace with the actual image path
            alt="Mortgage"
            className="grid-image"
          />
          <p className="grid-label">I want a Mortgage</p>
        </div>
        <div
          className="grid-item"
          onClick={() => handleNavigation('/insurance')}
        >
          <img
            src="/images/insurance.jpg" // Replace with the actual image path
            alt="Insurance"
            className="grid-image"
          />
          <p className="grid-label">I want Insurance</p>
        </div>
        <div
          className="grid-item"
          onClick={() => handleNavigation('/surprise')}
        >
          <img
            src="/images/surprise.jpg" // Replace with the actual image path
            alt="Surprise Me"
            className="grid-image"
          />
          <p className="grid-label">Surprise me!</p>
        </div>
      </div>
    </div>
  );
}

export default Page1;