var PDFDocument = require('pdfkit');
var fs = require('fs');

var pdfDoc = new PDFDocument;
pdfDoc.pipe(fs.createWriteStream('SampleDocument4.pdf'));
// pdfDoc.text("My Sample PDF Document");

// pdfDoc.text("This text is left aligned", { align: 'left'});
// pdfDoc.text("This text is at the center", { align: 'center'});
// pdfDoc.text("This text is right aligned", { align: 'right'});
// pdfDoc.text("This text is justified", { align: 'justify'});

// pdfDoc.fillColor('blue').text("This is a link", { link: 'https://pdfkit.org/docs/guide.pdf', underline: true });
// pdfDoc.fillColor('black').text("This text is underlined", { underline: true });
// pdfDoc.text("This text is italicized", { oblique: true });
// pdfDoc.text("This text is striked-through", { strike: true });

var myArrayOfItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

pdfDoc.list(myArrayOfItems);

// pdfDoc.image('sample-image.jpg', 100, 100, { width: 300, height: 300 })

// pdfDoc.text("My Sample PDF Document positioned at ()", 100, 100);
pdfDoc.end();
