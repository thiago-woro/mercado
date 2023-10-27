const puppeteer = require("puppeteer");
const {getDate} = require("./getdate.js");
const {compareAndSaveToDatabase} = require("./saveToDatabase.js");
const {autoScroll} = require("./autoscroll.js");

let extractedProducts = []; // Global variable to store extracted products
let baseurl = "https://www.bistek.com.br/";
let categoriesURLs = ["mercearia"];

async function setupBrowser() {
	const browser = await puppeteer.launch({headless: false, slowMo: 0, devtools: false});
	const page = await browser.newPage();
	await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36");
	await page.setViewport({width: 1303, height: 980});
	page.setDefaultNavigationTimeout(600000);
	return {browser, page};
}

async function removeDuplicates() {
	extractedProducts = extractedProducts.filter((product, index, self) => index === self.findIndex((p) => p.name === product.name));
}

async function scrapeCategory(categoryURL, page) {
	try {
		const zipCode = "88036310";
		page.setDefaultNavigationTimeout(360000);
		console.log(`\n\n⏳ loading: ${categoryURL}`);
		// Navigate to the category URL
		await page.goto(baseurl + categoryURL);
		await page.waitForTimeout(100);
		//deal with zipcode
		console.log(`\n\n waiting for zipcode`);
		// Wait for the zip code input field to appear
		await page.waitForSelector("#zipcode-id");
		console.log(`\n found`);
		const typingDelay = 100;
		// Fill the zip code input field with a typing delay
		await page.type("#zipcode-id", "88036", {delay: typingDelay});
		await page.type("#zipcode-id", "310", {delay: typingDelay});
		console.log(`\n digitou o cep corretamente, enviando..`);
		// Click the "OK" button to submit the zip code
		await page.click("#submit-zipcode");
		console.log(`\n waiting......`);
		// Wait for the page to load after submitting the zip code
		await page.waitForTimeout(800); // Adjust the waiting time as needed
		await page.goto("https://www.bistek.com.br/bebidas.html?p=2");
		await page.waitForTimeout(900);

		console.log(`\n scrolling down`);

		await autoScroll(page);

		console.log(`\n waiting for products`);

		// Wait for a specific element to ensure the page is fully loaded
		await page.waitForSelector(".products.list.items.product-items");

		console.log(`Products loaded ok\n\n\n`);

		const extractProductInfo = async () => {
			const products = [];

			// Find all product containers
			const productContainers = await page.$$(".item.product.product-item");
			console.log("got " + productContainers.length + " products");

			// Iterate through each product container and extract information
			for (const productContainer of productContainers) {
				const product = {};

				// Extract product name
				product.name = await productContainer.$eval(".product.name.product-item-name a", (a) => a.textContent.trim());

				// Extract the image URL
				product.imageUrl = await productContainer.$eval("img.product-image-photo", (img) => img.getAttribute("src"));

				// Extract product link
				product.productLink = await productContainer.$eval(".product.name.product-item-name a", (a) => a.getAttribute("href"));

				// Extract prices
				const priceElement = await productContainer.$(".price-final_price .price");

				// Extract product price
				product.price = await page.evaluate((priceElement) => priceElement.textContent, priceElement);

				// Add the product to the array
				products.push(product);
			}

			return products;
		};

		// Call the function to extract product information
		const productsInCategory = await extractProductInfo();

		// Add the products from this category to the global extractedProducts array
		extractedProducts = extractedProducts.concat(productsInCategory);

		// Log the accumulated extracted product information
		console.log("\nTotal products found: ", extractedProducts.length);
	} catch (error) {
		console.error("Error while scraping:", error.message);
		// Continue to the next category URL if there was an error
	}
}

function addProductDetails(products) {
	let updatedHourVar = getDate().dateHour;
	let updatedDateVar = getDate().dateDDMMYY;

	return products.map((product) => ({
		...product,
		mercado: "Bistek",
		updatedHour: updatedHourVar,
		updatedDate: updatedDateVar,
	}));
}

// Main function loop
(async () => {
	const {browser, page} = await setupBrowser(); // Starts the browser

	// Loop through the category URLs and run the scraping function for each URL
	for (const categoryURL of categoriesURLs) {
		console.log("\nlooping: ", categoryURL);
		await scrapeCategory(categoryURL, page);
	}

	// Log the accumulated extracted product information
	console.log("\nTotal found before removing duplicates: ", extractedProducts.length);

	// Remove duplicates from the extractedProducts array
	//await removeDuplicates();  //fix product names

	// Log the accumulated extracted product information after removing duplicates
	console.log(extractedProducts);
	console.log("\nTotal products after removing duplicates: ", extractedProducts.length);

	// Close the browser after all categories have been scraped
	await browser.close();

	// Add the "mercado" property to each product
	extractedProducts = addProductDetails(extractedProducts);
	console.log(extractedProducts);
})();
