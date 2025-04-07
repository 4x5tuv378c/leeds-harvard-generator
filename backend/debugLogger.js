const debugLog = [];

function logAPIAttempt(source, outcome) {
  const entry = {
    timestamp: new Date().toISOString(),
    source,
    status: outcome.success ? 'SUCCESS' : 'FAILURE',
    reason: outcome.reason || null,
    fields: outcome.fields || [],
    raw: outcome.raw || null
  };
  debugLog.push(entry);
  if (debugLog.length > 50) debugLog.shift();
}

function getDebugLog() {
  return debugLog.slice().reverse();
}

module.exports = {
  logAPIAttempt,
  getDebugLog
};
