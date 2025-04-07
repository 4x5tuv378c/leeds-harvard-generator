const referenceHistory = [];

function addReference(htmlOutput) {
  referenceHistory.push({
    timestamp: new Date().toISOString(),
    html: htmlOutput
  });
  if (referenceHistory.length > 10) {
    referenceHistory.shift();
  }
}

function getReferenceHistory() {
  return referenceHistory.slice().reverse();
}

module.exports = {
  addReference,
  getReferenceHistory
};
