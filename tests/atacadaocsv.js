

// url com produtos https://algolia.cotabest.com.br/catalogo?category=255&displayFacets=true&commaSeparatedRegionIds=4099,4617,14347,3468,5645,11277,3608,15645,9141,11327,15040,3400,11081,15561,12496,13906,7384,3935,12896,5610,9198,6259,11124,13309,3071&page=4


//this is the first attempt to retrieve products data, using CSV and puppeteer

const puppeteer = require("puppeteer");
const fs = require("fs");
const csvParser = require("csv-parser");

let scrapeAnalytics = [];
const mercado = "atacadao";
const categoria = "mercearia";

// Function to append monitoring data to the scrape-analytics.csv file
function appendToScrapeAnalytics(data) {
	const csvHeader = "StartedDate,ItemsFound,NewItemsCreated,ItemsPriceUpdated,ScrapedURL\n";
	const csvData = data.map((entry) => `${entry.startedDate},${entry.itemsFound},${entry.newItemsCreated},${entry.itemsPriceUpdated},"${entry.scrapedURL}"`).join("\n");

	fs.appendFileSync("scrape-analytics.csv", csvHeader + csvData + "\n", "utf-8");
}

let existingData = [];


async function loadCSV() {
  if (fs.existsSync("products.csv")) {
    const readStream = fs.createReadStream("products.csv");
    const csvData = await new Promise((resolve, reject) => {
      const dataChunks = [];
      readStream
        .pipe(csvParser())
        .on("data", (row) => {
          dataChunks.push(row);
        })
        .on("end", () => {
          resolve(dataChunks);
        })
        .on("error", (error) => {
          reject(error);
        });
    });

    existingData = csvData;
    console.log("base csv file has: ", existingData.length, " products 🍟🍟🍟🍟");
  }} 
  loadCSV();

async function scrapeWebsite() {
	console.log("started scraping here ⭐⭐⭐");
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
	console.log(products.length, "products found 👩‍🦰👩‍🦰👩‍🦰👩‍🦰👩‍🦰 \n\n");

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
		scrapedURL: url, // Use the URL variable from this function
	};

	// Merge new data with existing data
	const updatedData = mergeData(existingData, products, existingProductMap); // Pass existingProductMap as an argument

	// Output the array of product data
	console.log(updatedData.length, "updatedData 👩‍🦰👩‍🦰👩‍🦰👩‍🦰👩‍🦰 \n\n");
	//console.log(updatedData, "\n\n\n");

	// Save the updated data to the CSV file
	saveToCSV(updatedData);

	scrapeAnalytics.push(monitoringData);
	appendToScrapeAnalytics([monitoringData]);

	await browser.close();
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

function saveToCSV(data) {
	const csvHeader = "Mercado,Categoria,Produto,Preco,Imagem,CurrentDate,LastDate\n";
	const csvData = data.map((product) => {
		if (!product.productName) {
      console.log("tried to write a undefined product ❌");
			return null;
		}
		return `${product.mercado},${product.categoria},"${product.productName}",${product.price},${product.imageURL},${product.currentDate},${product.lastDate}`;
	}).filter((csvRow) => csvRow !== null).join("\n");

	// Clear the contents of the CSV file by overwriting it with an empty string
	fs.writeFileSync("products.csv", "", "utf-8");

	// Write the new data to the CSV file
	fs.appendFileSync("products.csv", csvHeader + csvData + "\n", "utf-8");

	console.log("Data saved to products.csv");
}

//starts the process
scrapeWebsite();
