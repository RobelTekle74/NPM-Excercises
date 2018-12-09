// access pdfkit
var pdfDocument = require('pdfkit');
// access cat-facts
var catFacts = require('cat-facts');
// define fs
var fs = require('fs');
// assign a random cat fact to the var
var randomFacts = catFacts.random();
// establish a new pdf document
var doc = new pdfDocument;
// output the randome cat fact into the pdf file 
// called output which will be located in the NPM-EXCERCISES directory
doc.pipe(fs.createWriteStream('./output2.pdf'));
// set the font size, and render some text
doc.fontSize(30)
    .text(randomFacts,150,100)
// finalize the file
doc.end();
