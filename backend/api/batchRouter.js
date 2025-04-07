const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const fetchWithFallback = require('./fetchController');
const formatReference = require('../formatEngine');
const { normalizeDataFields, injectOnlineInfo } = require('../fieldNormalizer');
const { logAPIAttempt } = require('../debugLogger');
const { addReference } = require('../historyTracker');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/batch', upload.single('csv'), async (req, res) => {
  const results = [];
  const filePath = req.file.path;

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => results.push(row))
    .on('end', async () => {
      const formattedRefs = [];

      for (const row of results) {
        const { query, format } = row;
        const apiResult = await fetchWithFallback(format, query);
        const raw = apiResult.attempts.find(a => a.data)?.data || {};
        const normalized = injectOnlineInfo(normalizeDataFields(raw));
        const formatted = formatReference(format, normalized);
        logAPIAttempt(format, {
          success: apiResult.success,
          fields: Object.keys(normalized),
          raw
        });
        addReference(formatted);
        formattedRefs.push(formatted);
      }

      fs.unlinkSync(filePath);
      res.json({ results: formattedRefs });
    });
});

module.exports = router;
