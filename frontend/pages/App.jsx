import React, { useState } from 'react';
import ReferenceOutput from '../components/ReferenceOutput';
import BatchUploader from '../components/BatchUploader';
import ExportControls from '../components/ExportControls';

export default function App() {
  const [references, setReferences] = useState([
    `<span style="font-weight: bold;">Smith, J.</span> 2020. <span style="font-style: italic;">Example Book</span>. London: <span style="font-weight: bold;">BigPublisher</span>.`
  ]);

  return (
    <div>
      <h1>Leeds Harvard Reference Generator</h1>
      <BatchUploader />
      <ReferenceOutput references={references} />
      <ExportControls references={references} />
    </div>
  );
}
