const express = require('express');
const exportToPDF = require('../pdfExporter');
const fs = require('fs');

const router = express.Router();

router.post('/api/export-pdf', async (req, res) => {
  const { references } = req.body;
  const filePath = 'temp_references_output.pdf';
  exportToPDF(references, filePath);

  setTimeout(() => {
    res.download(filePath, 'references.pdf', (err) => {
      if (err) console.error('Download error:', err);
      fs.unlinkSync(filePath);
    });
  }, 1000);
});

module.exports = router;
