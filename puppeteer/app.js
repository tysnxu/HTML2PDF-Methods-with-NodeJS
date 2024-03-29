const puppeteer = require("puppeteer");

(async () => {
  // Create a browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Website URL to export as pdf
  // const website_url = 'https://www.bannerbear.com/blog/how-to-download-images-from-a-website-using-puppeteer/';
  // const website_url = 'http://localhost:8000/businesscard.html';
  const website_url = "E:\\html_pdf\\new\\business_card\\businesscard.html";

  // Open URL in current page
  await page.goto(website_url, { waitUntil: "networkidle0" });

  //To reflect CSS used for screens instead of print
  // await page.emulateMediaType('screen');

  // Downlaod the PDF
  const pdf = await page.pdf({
    landscape: true,            // BETTER FOR INSPECTION REPORT
    path: "result.pdf",         // SAVE LOCATION
    // width: "3.5in",             // SETS THE SIZE, WILL BE OVERWRITTEN BY FORMAT (E.G. LETTER, A4, etc.)
    // height: "2in",              // SETS THE SIZE, WILL BE OVERWRITTEN BY FORMAT (E.G. LETTER, A4, etc.)
    format: 'A4',               // OVERWRITES WIDTH & HEIGHT
    printBackground: true,
    //   margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
  });

  await browser.close();        // Close the browser instance
})();
