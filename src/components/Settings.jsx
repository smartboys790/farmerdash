// src/components/Settings.js
import React, { useState } from 'react';

const Settings = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleAccount = () => {
    setIsActive(!isActive);
    alert(`Account ${isActive ? 'deactivated' : 'activated'}!`);
  };

  return (
    <div>
      <h4>Account Settings</h4>
      <p>Account is currently: <strong>{isActive ? 'Active' : 'Deactivated'}</strong></p>
      <button onClick={toggleAccount} className="btn btn-warning">
        {isActive ? 'Deactivate Account' : 'Activate Account'}
      </button>
    </div>
  );
};

export default Settings;