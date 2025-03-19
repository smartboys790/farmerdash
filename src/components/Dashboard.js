// src/components/Dashboard.js
import React, { useState } from 'react';
import Personal from './Personal';
import Farm from './Farm';
import Certificates from './Certificates';
import Documents from './Documents';
import Settings from './Settings';

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState('');

  const renderTab = () => {
    switch (currentTab) {
      case 'personal':
        return <Personal />;
      case 'farm':
        return <Farm />;
      case 'certificates':
        return <Certificates />;
      case 'documents':
        return <Documents />;
      case 'settings':
        return <Settings />;
      default:
        return <Personal />;
    }
  };

  return (
    <div className="container mt-5">
      <h1>Farmer Dashboard</h1>
      <div className="nav nav-tabs">
        <button className="nav-link active" onClick={() => setCurrentTab('personal')}>Personal</button>
        <button className="nav-link" onClick={() => setCurrentTab('farm')}>Farm</button>
        <button className="nav-link" onClick={() => setCurrentTab('certificates')}>Certificates</button>
        <button className="nav-link" onClick={() => setCurrentTab('documents')}>Documents</button>
        <button className="nav-link" onClick={() => setCurrentTab('settings')}>Settings</button>
      </div>
      <div className="mt-3">
        {renderTab()}
      </div>
    </div>
  );
};

export default Dashboard;