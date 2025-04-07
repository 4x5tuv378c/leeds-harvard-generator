import React, { useState } from 'react';
import ReferenceOutput from './components/ReferenceOutput';
import BatchUploader from './components/BatchUploader';
import ExportControls from './components/ExportControls';
import ManualInput from './components/ManualInput';

export default function App() {
  const [references, setReferences] = useState([]);

  return (
    <div>
      <h1>Leeds Harvard Reference Generator</h1>
      <ManualInput onResult={setReferences} />
      <BatchUploader onBatchResult={setReferences} />
      <ReferenceOutput references={references} />
      <ExportControls references={references} />
    </div>
  );
}
