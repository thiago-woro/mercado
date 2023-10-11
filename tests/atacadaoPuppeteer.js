const puppeteer = require("puppeteer");
const { connectToDatabase, saveToMongoDB } = require("../database.js");
let scrapeAnalytics = [];
const mercado = "atacadao";
const categoria = "mercearia";
let existingData = [];

// Import the updateProductPrice function from your database module
const updateProductPrice = require("../database.js").updateProductPrice;



async function scrapeWebsite() {
	console.log("started scraping here ⭐⭐⭐");
	try {
		const client = await connectToDatabase();
		if (!client) {
		  throw new Error("MongoDB client is undefined ✖✖");
		}


	let newItemsCreated = 0;
	let itemsPriceUpdated = 0;

	// Create a map to track existing products by their names
	const existingProductMap = new Map(existingData.map((product) => [product.productName, product]));

	// Launch Puppeteer and open a new browser page
	const browser = await puppeteer.launch({headless: false, slowMo: 0, devtools: false});
	const page = await browser.newPage();
	let url = "https://www.atacadao.com.br/mercearia/";

	await page.setViewport({width: 1520, height: 800});

	// Navigate to the website
	await page.goto(url);

	// Wait for the product card elements to load (you may need to adjust the selector and wait time)
	await page.waitForSelector('a[title="Ver detalhes do produto"]');

  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  await page.waitForSelector('.product-box__img img[src^="https://media.cotabest.com.br/media/sku/"]:not([src$=".svg"])');


	// Extract product information
	const products = await page.evaluate(() => {
		const productElements = document.querySelectorAll('a[title="Ver detalhes do produto"]');
		const productsData = [];

		productElements.forEach((element) => {
			const imageURL = element.querySelector(".product-box__img img").getAttribute("src");
			const productName = element.querySelector(".product-box__name").textContent.trim();
			const rawPrice = element.querySelector(".product-box__price--number").textContent.trim();

			// Replace commas with dots in the price
			const price = rawPrice.replace(",", ".");

			// Get the current date and time
			const currentDate = new Date().toISOString();

			productsData.push({
				productName,
				price,
				imageURL,
				currentDate,
				lastDate: "", // Initialize last date column (empty for now)
			});
		});

		return productsData;
	});

	// Output the array of product data
	console.log(products.length, "products found 📦 \n\n");

// Iterate over the product data with a for loop
for (let i = 0; i < products.length; i++) {
  const newProduct = products[i];
  const existingProduct = existingProductMap.get(newProduct.productName);

  if (existingProduct) {
    // Product already exists, check if the price has been updated
    if (existingProduct.price !== newProduct.price) {
      console.log(`Found a duplicated product 🔵 at index ${i}`);
      itemsPriceUpdated++;
      existingProduct.price = newProduct.price;
      existingProduct.lastDate = newProduct.currentDate;
    }
  } else {
    console.log(`Created a new product 🟢 at index ${i}`);
    // New product, add it to the existing data and initialize the lastDate property
    newProduct.mercado = mercado; // Add mercado property
    newProduct.categoria = categoria;
    existingData.push(newProduct);
    newProduct.lastDate = newProduct.currentDate;
    newItemsCreated++;

    // Update the existingProductMap with the new product
    existingProductMap.set(newProduct.productName, newProduct);
  }
}


	// Scrape monitoring data and append it to scrape-analytics.csv
	const monitoringData = {
		startedDate: new Date().toISOString(),
		itemsFound: products.length,
		newItemsCreated,
		itemsPriceUpdated,
		scrapedURL: url,
	  };
	
	  const monitoringDb = client.db("scrapingMetrics"); // Replace with your database name
	  const monitoringCollection = monitoringDb.collection("metrics"); // Create a new collection for monitoring data
	
	  await monitoringCollection.insertOne(monitoringData);
	

	// Merge new data with existing data
	const updatedData = mergeData(existingData, products, existingProductMap); // Pass existingProductMap as an argument

	// Output the array of product data
	console.log(updatedData.length, "updatedData 🆕 \n\n");
	//console.log(updatedData, "\n\n\n");

	try {
		// Attempt to save data to MongoDB
		console.log("Sent ", updatedData.length, " products to MongoDB");
		 saveToMongoDB(client, updatedData);
		console.log("Data saved to MongoDB successfully");
	  } catch (error) {
		console.error("Error saving data to MongoDB:", error);
		// Handle the error here, or add your error-handling logic
	  }

	scrapeAnalytics.push(monitoringData);
	appendToScrapeAnalytics([monitoringData]);

	await browser.close();

} catch (error) {
    console.error("Error during MongoDB connection:", error);
  }
}

function mergeData(existingData, newData, existingProductMap) {
	console.log("\n\n", "Existing 🔴", existingData.length);
	console.log("🟩 New data: ", newData.length, "\n\n");

	// Merge new data with existing data
	newData.forEach((newProduct) => {
		const existingProduct = existingProductMap.get(newProduct.productName);

		if (existingProduct) {
			// Product already exists, update price and lastDate
			existingProduct.price = newProduct.price;
			existingProduct.lastDate = newProduct.currentDate;
		} else {
			// New product, add it to the existing data and initialize the lastDate property
			existingData.push(newProduct);
			newProduct.lastDate = newProduct.currentDate;
		}
	});

	return existingData;
}


//starts the process
scrapeWebsite();
