const puppeteer = require("puppeteer");
const {getDate} = require("./getdate.js");
const {compareAndSaveToDatabase} = require("./saveToDatabase.js");
const {autoScroll} = require("./autoscroll.js");

let extractedProducts = []; // Global variable to store extracted products
let baseurl = "https://www.minhacooper.com.br/loja/a.verde-bnu/produto/listar/";
let categoriesURLs = [420];

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
		page.setDefaultNavigationTimeout(360000);
		console.log(`\n\n⏳ loading: ${categoryURL}`);

		// Navigate to the category URL
		await page.goto(baseurl + categoryURL);
		await page.waitForTimeout(900); // Wait for 4.3 seconds (4300 milliseconds)

		//await autoScroll(page);

		let loadMoreButtonExists = true;
		while (loadMoreButtonExists) {
			const loadMoreButton = await page.$(".button.button-default.ajax-pagination.see-more");

			if (loadMoreButton) {
				console.log('Clicking "See more" button to load more products.');
				await loadMoreButton.click();
				await page.waitForTimeout(800); // Wait for 3 seconds (adjust as needed)
				await autoScroll(page);
			} else {
				loadMoreButtonExists = false;
			}
		}
		console.log(`finished navigation ok`);

		// Wait for a specific element to ensure the page is fully loaded
		await page.waitForSelector(".col-xs-12.col-sm-6.col-lg-4.product-list-item");

		console.log(`Products loaded ok\n\n\n`);

		const extractProductInfo = async () => {
			const products = [];

			// Find all product containers
			const productContainers = await page.$$(".product-variation");

			// Iterate through each product container and extract information
			for (const productContainer of productContainers) {
				const product = {};

				// Extract product name
				product.name = await productContainer.$eval(".product-variation__name", (a) => a.textContent.trim());

				// Extract the image URL
				product.imageUrl = await productContainer.$eval("img.product-variation__image", (img) => img.getAttribute("src"));

				// Extract product link
				product.productLink = await productContainer.$eval("a.product-variation__image-container", (a) => a.getAttribute("href"));

				// Extract prices
				const priceElement = await productContainer.$(".product-variation__price");

				// Extract product price
				product.price = await productContainer.$eval(".product-variation__final-price", (span) => span.textContent.trim());

				//product.priceCooper = await productContainer.$eval(".product-variation__cooper-price", (span) => span.textContent.trim());


				// Check if cooperPrice exists
				const cooperPriceElement = await priceElement.$(".product-variation__cooper-price");
				if (cooperPriceElement) {
					const cooperPrice = await cooperPriceElement.$eval("span", (span) => span.textContent.trim());
					product.cooperPrice = parseFloat(cooperPrice.replace("R$", "").trim());
				} else {
					product.cooperPrice = null; // Set to null if cooperPrice is not found
				}




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
		mercado: "Cooper Água Verde",
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
