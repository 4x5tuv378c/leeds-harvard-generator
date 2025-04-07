const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.get('/:source', async (req, res) => {
  const { source } = req.params;
  const { query } = req.query;

  const API_MAP = {
    crossref: {
      url: `https://api.crossref.org/works?query=${query}`,
      headers: {}
    },
    open_library: {
      url: `https://openlibrary.org/search.json?q=${query}`,
      headers: {}
    },
    google_books: {
      url: `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_BOOKS_KEY}`,
      headers: {}
    }
    // Extend with other APIs as needed
  };

  const config = API_MAP[source];
  if (!config) return res.status(400).json({ error: 'Invalid API source' });

  try {
    const response = await axios.get(config.url, { headers: config.headers });
    res.json(response.data);
  } catch (err) {
    const code = err.response?.status || 500;
    res.status(code).json({
      error: 'API proxy failure',
      source,
      reason: err.code || err.message || 'NO_RESPONSE'
    });
  }
});

module.exports = router;
