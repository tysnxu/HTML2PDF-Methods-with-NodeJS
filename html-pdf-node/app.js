const html_to_pdf = require('html-pdf-node');
const fs = require('fs');

let options = {
  format: 'A4',
  path: "test12.pdf"  // WILL AUTOMATICALLY SAVE THE FILE
};

// PRINT USING A LOCAL FILE
// const fileContent = fs.readFileSync('./sample.html', 'utf-8')
// const fileContent = fs.readFileSync('./business_card/businesscard.html', 'utf-8')
// let file = [{ content: fileContent }]

// html_to_pdf.generatePdfs( file, options).then(output => {
//   console.log("PDF Buffer:-", output[0].buffer);
//   fs.writeFile("test.pdf", output[0].buffer,  "binary",function(err) { console.log(err) });
// });


// PRINT USING A REMOTE URL

let file = [{ url: "http://localhost:8000/businesscard.html", name: 'example.pdf' }];

html_to_pdf.generatePdfs(file, options).then(output => {
  console.log("PDF Buffer:-", output[0].buffer); // PDF Buffer:- [{url: "https://example.com", name: "example.pdf", buffer: <PDF buffer>}]
  // fs.writeFile("test32.pdf", output[0].buffer,  "binary",function(err) { console.log(err) });
});




