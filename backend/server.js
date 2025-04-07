const express = require('express');
const cors = require('cors');
const proxyRouter = require('./api/proxyRouter');
const batchRouter = require('./api/batchRouter');
const exportPDFRouter = require('./api/exportPDFRouter');
const fetchWithFallback = require('./api/fetchController');
const formatReference = require('./formatEngine');
const { normalizeDataFields, injectOnlineInfo } = require('./fieldNormalizer');
const exportToPDF = require('./pdfExporter');
const { logAPIAttempt } = require('./debugLogger');
const { addReference, getReferenceHistory } = require('./historyTracker');

require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'https://leedsharvardreferencer.onrender.com'
}));

app.use(express.json());
app.use('/api/proxy', proxyRouter);
app.use('/api', batchRouter);
app.use('/api', exportPDFRouter);

app.post('/api/generate', async (req, res) => {
  const { query, format } = req.body;
  const results = await fetchWithFallback(format, query);
  const raw = results.attempts.find(a => a.data)?.data || {};
  const normalized = injectOnlineInfo(normalizeDataFields(raw));
  const formatted = formatReference(format, normalized);
  logAPIAttempt(format, {
    success: results.success,
    fields: Object.keys(normalized),
    raw
  });
  addReference(formatted);
  res.json({ formatted, raw, log: results.attempts });
});

app.get('/api/history', (req, res) => {
  res.json(getReferenceHistory());
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
