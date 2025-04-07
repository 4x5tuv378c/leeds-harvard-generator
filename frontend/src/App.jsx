import React, { useState } from 'react';
import ReferenceOutput from './components/ReferenceOutput';
import BatchUploader from './components/BatchUploader';
import ExportControls from './components/ExportControls';

export default function App() {
  const [references, setReferences] = useState([]);

  return (
    <div>
      <h1>Leeds Harvard Reference Generator</h1>
      <BatchUploader onBatchResult={setReferences} />
      <ReferenceOutput references={references} />
      <ExportControls references={references} />
    </div>
  );
}
