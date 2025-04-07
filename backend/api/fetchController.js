const axios = require('axios');
const API_CHAINS = require('./apiChains');

async function fetchWithFallback(format, query) {
  const chain = API_CHAINS[format];
  const results = [];
  let success = false;

  for (let source of chain) {
    try {
      const res = await axios.get(`http://localhost:3000/api/proxy/${source}?query=${query}`);
      if (res.data && Object.keys(res.data).length > 0) {
        results.push({ source, data: res.data });
        success = true;
        break;
      }
    } catch (err) {
      results.push({ source, error: err.response?.data?.reason || 'NO_RESPONSE' });
    }
  }

  return { success, attempts: results };
}

module.exports = fetchWithFallback;
