import React, { useState } from 'react';
import './Dashboard.css';
import PersonalDashboard from './PersonalDashboard';
import SocialDashboard from './SocialDashboard';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="dashboard-container">
      <div className="tab-buttons">
        <button 
          className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          Personal Dashboard
        </button>
        <button 
          className={`tab-btn ${activeTab === 'social' ? 'active' : ''}`}
          onClick={() => setActiveTab('social')}
        >
          Social Dashboard
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'personal' ? <PersonalDashboard /> : <SocialDashboard />}
      </div>
    </div>
  );
}

export default Dashboard;