const PDFDocument = require('pdfkit');
const fs = require('fs');
const { JSDOM } = require('jsdom');
const parseHTML = require('htmlparser2').parseDocument;

function exportReferencesToPDF(references = [], filePath = 'output.pdf') {
  const doc = new PDFDocument({ margin: 50 });
  doc.pipe(fs.createWriteStream(filePath));
  doc.font('Times-Roman').fontSize(12);

  references.forEach((refHTML, i) => {
    const refText = convertStyledHTMLtoPDF(doc, refHTML);
    doc.moveDown();
    doc.text(`${i + 1}. ${refText}`, { continued: false });
  });

  doc.end();
  return filePath;
}

function convertStyledHTMLtoPDF(doc, html) {
  const frag = parseHTML(html);
  let output = '';

  function traverse(node) {
    if (!node || !node.type) return;

    if (node.type === 'text') {
      output += node.data;
    } else if (node.name === 'span' && node.attribs?.style) {
      const style = node.attribs.style;
      const isBold = style.includes('font-weight: bold');
      const isItalic = style.includes('font-style: italic');

      if (isBold) doc.font('Times-Bold');
      if (isItalic && !isBold) doc.font('Times-Italic');
      if (!isBold && !isItalic) doc.font('Times-Roman');

      node.children?.forEach(traverse);
    } else {
      node.children?.forEach(traverse);
    }
  }

  frag.children?.forEach(traverse);
  doc.font('Times-Roman');
  return output;
}

module.exports = exportReferencesToPDF;
