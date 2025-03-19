// src/components/Farm.js
import React, { useState } from 'react';

const Farm = () => {
  const [farmDetails, setFarmDetails] = useState({
    address: '',
    crops: ''
  });

  const handleChange = (e) => {
    setFarmDetails({ ...farmDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Farm details saved!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Farm Address</label>
        <input
          type="text"
          name="address"
          value={farmDetails.address}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Crop Types</label>
        <input
          type="text"
          name="crops"
          value={farmDetails.crops}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="button" className="btn btn-secondary">Cancel</button>
      <button type="submit" className="btn btn-success">Save Changes</button>
    </form>
  );
};

export default Farm;