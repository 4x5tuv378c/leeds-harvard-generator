import React, { useState } from 'react';

export default function ManualInput({ onResult }) {
  const [query, setQuery] = useState('');
  const [format, setFormat] = useState('book');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('https://leeds-harvard-backend.onrender.com/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, format })
      });
      const data = await res.json();
      if (data.formatted) onResult(prev => [data.formatted, ...prev]);
    } catch (err) {
      alert('Manual reference generation failed.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
      <h2>Manual Input</h2>
      <input
        type="text"
        placeholder="Enter query..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '60%', marginRight: '0.5rem' }}
      />
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="book">Book</option>
        <option value="journal">Journal</option>
        <option value="website">Website</option>
        <!-- Extend as needed -->
      </select>
      <button type="submit" disabled={loading} style={{ marginLeft: '0.5rem' }}>
        {loading ? 'Loading...' : 'Generate'}
      </button>
    </form>
  );
}
