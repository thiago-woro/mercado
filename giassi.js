
//scraper file for Giassi market. no puppeteer required so far, just using axios.

const axios = require('axios');
const {connectToDatabase, saveToMongoDB} = require("./database.js");
const {getDate} = require("./getdate.js");



const apiUrl = 'https://www.giassi.com.br/_v/segment/graphql/v1?workspace=master&maxAge=short&appsEtag=remove&domain=store&locale=pt-BR&__bindingId=02820f84-cc22-45d2-a290-723c585cca4f&operationName=productSearchV3&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2240b843ca1f7934d20d05d334916220a0c2cae3833d9f17bcb79cdd2185adceac%22%2C%22sender%22%3A%22vtex.store-resources%400.x%22%2C%22provider%22%3A%22vtex.search-graphql%400.x%22%7D%2C%22variables%22%3A%22eyJoaWRlVW5hdmFpbGFibGVJdGVtcyI6ZmFsc2UsInNrdXNGaWx0ZXIiOiJGSVJTVF9BVkFJTEFCTEUiLCJzaW11bGF0aW9uQmVoYXZpb3IiOiJkZWZhdWx0IiwiaW5zdGFsbG1lbnRDcml0ZXJpYSI6Ik1BWF9XSVRIT1VUX0lOVEVSRVNUIiwicHJvZHVjdE9yaWdpblZ0ZXgiOmZhbHNlLCJtYXAiOiJjIiwicXVlcnkiOiJtZXJjZWFyaWEiLCJvcmRlckJ5IjoiT3JkZXJCeVNjb3JlREVTQyIsImZyb20iOjAsInRvIjo0Nywic2VsZWN0ZWRGYWNldHMiOlt7ImtleSI6ImMiLCJ2YWx1ZSI6Im1lcmNlYXJpYSJ9XSwiZmFjZXRzQmVoYXZpb3IiOiJTdGF0aWMiLCJjYXRlZ29yeVRyZWVCZWhhdmlvciI6ImRlZmF1bHQiLCJ3aXRoRmFjZXRzIjpmYWxzZSwidmFyaWFudCI6IiJ9%22%7D';

// Define a global variable array to store the products
let giassiScrapedProducts = [];
let databaseProducts = [];


async function fetchData() {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    // Check if products exist in the data
    if (data?.data?.productSearch?.products) {
      // Extract the desired fields for each product
      const products = data.data.productSearch.products.map(product => ({
        productId: product.productId,
        description: product.description,
        productName: product.productName,
        productReference: product.productReference,
        brand: product.brand,
        highPrice: product.priceRange?.sellingPrice?.highPrice || null,
        lowPrice: product.priceRange?.sellingPrice?.lowPrice || null,
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
      console.log(products);
    } else {
      console.error('No products found in the data.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


async function getDatabaseProducts(client) {

  try {
    const db = client.db("products");
    const collection = db.collection("products");

    // Filter and fetch products from the database with mercado: 'Giassi'
    databaseProducts = await collection.find({ mercado: 'Giassi' }).toArray();

    console.log("Got products", databaseProducts);
    console.log("Fetched ", databaseProducts.length, " products 📦");


    return databaseProducts;
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    return [];
  } finally {
    client.close(); // Close the MongoDB connection
  }
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

const existingProducts = compareAndSaveProducts();
console.log("Existing Products:", existingProducts);


(async () => {
  fetchData();

  const client = await connectToDatabase();

  // Fetch database products
  const databaseProducts = await getDatabaseProducts(client);

  // Compare and save products
  const existingProducts = await compareAndSaveProducts(client);

  //console.log("Existing Products:", existingProducts);
  console.log("Existing Products:", existingProducts.length);


  // Close the MongoDB connection
  client.close();
})();