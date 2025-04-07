import React from 'react';

export default function ExportControls({ references }) {
  const handleExportPDF = async () => {
    const res = await fetch('http://localhost:3000/api/export-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ references })
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'references.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={handleExportPDF}>Export as PDF</button>
    </div>
  );
}
