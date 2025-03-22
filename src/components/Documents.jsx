// src/components/Documents.js
import React from 'react';

const Documents = () => {
  return (
    <div>
      <h4>Upload Documents for Verification</h4>
      <input type="file" className="form-control" />
      <button className="btn btn-success mt-2">Upload</button>
      <h4 className="mt-4">Uploaded Documents</h4>
      {/* Placeholder for displaying documents */}
      <p>No documents uploaded yet.</p>
    </div>
  );
};

export default Documents;