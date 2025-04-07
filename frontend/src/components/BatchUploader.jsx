import React from 'react';

export default function BatchUploader({ onBatchResult }) {
  const handleCSVUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('csv', file);

    try {
      const res = await fetch('https://leeds-harvard-backend.onrender.com/api/batch', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      if (Array.isArray(data.results)) {
        onBatchResult(data.results);
      }
    } catch (err) {
      console.error('Batch upload failed', err);
      alert('Failed to process CSV. Check backend or file format.');
    }
  };

  return (
    <div>
      <h2>Batch Upload (CSV)</h2>
      <input type="file" accept=".csv" onChange={handleCSVUpload} />
    </div>
  );
}
