import React, { useState, useRef } from 'react';

const VerificationRequest = () => {
    const [selectedFiles, setSelectedFiles] = useState('No file chosen');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileUpload = (event) => {
        const files = event.target.files;
        setSelectedFiles(files.length > 0 
            ? Array.from(files).map(f => f.name).join(', ')
            : 'No file chosen');
    };

    const submitVerification = async (e) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Submitting verification with notes:', additionalNotes);
            setAdditionalNotes('');
            setSelectedFiles('No file chosen');
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            alert('Verification request submitted successfully!');
        } catch (error) {
            console.error('Failed to submit verification request');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded shadow p-4">
            <h2 className="fs-5 fw-bold text-dark mb-3">Verification Request</h2>
            <form onSubmit={submitVerification}>
                <div className="mb-3">
                    <label className="form-label small fw-medium">Upload Documents</label>
                    <div className="border border-2 border-secondary-subtle rounded p-4 text-center">
                        <svg className="mx-auto mb-2" width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 48 48" style={{ color: '#adb5bd' }}>
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className="small text-secondary">
                            <label className="text-primary fw-medium cursor-pointer">
                                <span>Choose files</span>
                                <input 
                                    type="file" 
                                    className="d-none" 
                                    multiple 
                                    onChange={handleFileUpload}
                                    ref={fileInputRef}
                                />
                            </label>
                        </div>
                        <p className="small text-secondary mt-1">{selectedFiles}</p>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label small fw-medium">Additional Notes</label>
                    <textarea 
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                        placeholder="Enter any additional information..."
                        rows="4"
                        className="form-control"
                    ></textarea>
                </div>

                <div className="d-flex justify-content-end">
                    <button 
                        type="submit" 
                        className="btn text-white"
                        disabled={isSubmitting}
                    >
                        {isSubmitting && (
                            <svg className="spinner" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        Submit Verification Request
                    </button>
                </div>
            </form>
        </div>
    );
};

export default VerificationRequest;