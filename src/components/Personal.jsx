// src/components/Personal.js
import React, { useState } from 'react';

const Personal = () => {
  const [formData, setFormData] = useState({
    fullName: 'Shubh',
    phone: '+1 (555) 123-4567',
    email: 'john@organicfarms.com'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Changes saved!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="button" className="btn btn-secondary">Cancel</button>
      <button type="submit" className="btn btn-success">Save Changes</button>
    </form>
  );
};

export default Personal;