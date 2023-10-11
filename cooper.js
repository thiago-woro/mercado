const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Emulate a browser-like environment
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36');
  await page.setViewport({ width: 1920, height: 1080 });

  // Navigate to the page
  await page.goto('https://www.minhacooper.com.br/store/');

  // Simulate an AJAX request via JavaScript on the page
  const response = await page.evaluate(async () => {
    // Make an AJAX request on the page
    const response = await fetch('https://www.minhacooper.com.br/store/api/v1/product-list', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        // Add any other necessary headers here
      },
    });

    return response.json();
  });

  console.log(response); // Print the response content

  await browser.close();
})();
