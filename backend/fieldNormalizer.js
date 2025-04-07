function normalizeDataFields(raw) {
  // Normalize input fields from various APIs to a common shape
  return raw;
}

function injectOnlineInfo(data) {
  // Inject access date, online tag, etc.
  return data;
}

module.exports = {
  normalizeDataFields,
  injectOnlineInfo
};
