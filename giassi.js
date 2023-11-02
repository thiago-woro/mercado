
//scraper file for Giassi market. no puppeteer required so far, just using axios.

const axios = require('axios');
const {connectToDatabase, saveToMongoDB} = require("./database.js");
const {getDate} = require("./getdate.js");
const fs = require('fs');



// Define a global variable array to store the products
let giassiScrapedProducts = [];
let databaseProducts = [];
//const categoriesURLs = require('./helper/giassiCategories.js')

console.log('1 - starting...');

const fileContent = fs.readFileSync('./resource/importantCategories.csv', 'utf-8');

// Split the string into an array using '\n' as the delimiter for rows and remove '\r' characters
const rows = fileContent.split('\n').map(row => row.replace('\r', ''));

// Filter out empty rows and split each row into an array of columns using ','
const precategoriesURLS = rows.filter(row => row.trim() !== '').map(row => row.split(','));

// Flatten the nested arrays and remove empty items
const categoriesURLS = precategoriesURLS.flat().filter(item => item.trim() !== '');

console.log('\n\n\nFound ', categoriesURLS.length, " categories\n\n\n");
//console.log(flattenedArray);




async function fetchData(url) {
  try {
    const response = await axios.get(url);
    const data = response.data;

    // Check if products exist in the data
    if (data?.data?.productSearch?.products) {
      // Extract the desired fields for each product
      const products = data.data.productSearch.products.map(product => ({
        productId: product.productId || null,
        description: product.description || null,
        name: product.productName,
        productReference: product.productReference || null,
        brand: product.brand || null,
        highPrice: product.priceRange?.sellingPrice?.highPrice || null,
        price: product.priceRange?.sellingPrice?.lowPrice || null,
        category: product.categories[2] || null,
        imageUrl: product.items[0]?.images[0]?.imageUrl || null,
        sellerName: product.items[0].sellers[0]?.sellerName || null,
        ean: product.items[0]?.ean || null,
        mercado: 'Giassi',
        updatedHour: getDate().dateHour,
        updatedDate: getDate().dateDDMMYY,
      }));

      // Add the products to the global array
      giassiScrapedProducts = [...giassiScrapedProducts, ...products];

      // Log the filtered product data
      console.log('1) products length:   ' + products.length);

    } else {
      console.error('No products found in the data.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function getDatabaseProducts(client) {
  // Implement this function to retrieve database products
}

async function compareAndSaveProducts(client) {
  const existingProducts = [];
  const newProducts = [];

  giassiScrapedProducts.forEach(scrapedProduct => {
    const matchingProduct = databaseProducts.find(dbProduct => dbProduct.productId === scrapedProduct.productId);

    if (matchingProduct) {
      existingProducts.push(scrapedProduct);
    } else {
      newProducts.push(scrapedProduct);
    }
  });

  // Call the saveToMongoDB function with the new products
  await saveToMongoDB(client, newProducts);

  return existingProducts;
}

// Wrap the code in a for loop to iterate through categoriesURLs
(async () => {
  const client = await connectToDatabase(); // Assuming you have a function to connect to the database

  for (let index = 0; index < categoriesURLS.length; index++) {
    const url = categoriesURLS[index];
    console.log(`nex Scraping loop: #${index+1}\n`);
    await fetchData(url);
  }

  // Fetch database products
  //const databaseProducts = await getDatabaseProducts(client);

  // Compare and save products
  const existingProducts = await compareAndSaveProducts(client);

  console.log("3) Existing Products:", existingProducts.length);
  console.log("\n\nfinished ok ⭐");

  // Close the MongoDB connection
  client.close();
})();
