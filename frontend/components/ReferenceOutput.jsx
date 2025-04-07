import React from 'react';
import '../styles/referenceStyles.css';

export default function ReferenceOutput({ references = [] }) {
  return (
    <div className="reference-output">
      {references.length === 0 ? (
        <p>No references yet.</p>
      ) : (
        references.map((ref, i) => (
          <div key={i} className="reference-entry">
            <span dangerouslySetInnerHTML={{ __html: `${i + 1}. ${ref}` }} />
          </div>
        ))
      )}
    </div>
  );
}
