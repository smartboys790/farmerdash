// src/components/Certificates.js
import React from 'react';

const Certificates = () => {
  return (
    <div>
      <h4>Upload Certificates</h4>
      <input type="file" className="form-control" />
      <button className="btn btn-success mt-2">Upload</button>
      <h4 className="mt-4">Your Certificates</h4>
      {/* Placeholder for displaying certificates */}
      <p>No certificates uploaded yet.</p>
    </div>
  );
};

export default Certificates;