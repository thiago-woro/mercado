
//this code gets all the products inside a very specific category
//to work fully, retrieving all products on the website, it woul need to loop through all categories

const puppeteer = require("puppeteer");
const fs = require('fs');
const fileContent = fs.readFileSync('giassicategories.txt', 'utf-8');

// Split the string into an array using '\n' as the delimiter
const urlArrayRead = fileContent.split('\n');

// Remove empty entries (in case there are extra line breaks)
const categoriesURLS = urlArrayRead.filter(url => url.trim() !== '');

console.log(categoriesURLS);



(async () => {

    console.log('Categories: ', categoriesURLS.length);

	const browser = await puppeteer.launch({headless: false, slowMo: 0, devtools: false});

    const page = await browser.newPage();


    page.on('response', async response => {
      if (response.url().startsWith('https://www.giassi.com.br/_v/segment/graphql/v1?workspace=master')) {
        const responseBody = await response.text();
        
        try {
          const parsedResponse = JSON.parse(responseBody);
    
          if (parsedResponse.data && parsedResponse.data.productSearch && parsedResponse.data.productSearch.products.length > 0) {
            console.log('Response:', parsedResponse);
            console.log('Response:', parsedResponse.data.productSearch.products);

          }
        } catch (error) {
          // Handle JSON parsing error if needed
        }
      }
    });
    
    await page.setRequestInterception(true);
    
    page.on('request', interceptedRequest => {
      interceptedRequest.continue();
    });
    
    await page.goto(categoriesURLS[0]);
    await browser.close();
    })();


