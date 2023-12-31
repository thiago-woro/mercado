const puppeteer = require("puppeteer");
const {getDate} = require("./getdate.js");
const {compareAndSaveToDatabase} = require("./saveToDatabase.js");
const {connectToDatabase} = require("./database.js");
const {autoScroll} = require("./autoscroll.js");

let extractedProducts = []; // Global variable to store extracted products
let baseurl = "https://www.minhacooper.com.br/loja/a.verde-bnu/produto/listar/";
let categoriesURLs = [
	1, 222, 525, 420, 75, 1033, 384, 281, 28, 647, 1145, 482, 464, 428, 503, 431, 421, 439, 458, 1134, 446, 451, 455, 1090, 5, 9, 12, 219, 18, 915, 1112, 40, 950, 60, 228, 126, 142, 165, 1100, 47, 197, 2, 96, 894, 236, 278, 63, 311, 321, 302, 323, 308, 1084, 363, 349, 319, 282, 351, 313, 370,
	379, 1076,
];

//   categoriesURLs = [1];   //testar nesta categoria

async function setupBrowser() {
	const browser = await puppeteer.launch({headless: true, slowMo: 0, devtools: false});
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
		await page.goto(baseurl + categoryURL, {waitUntil: "domcontentloaded", timeout: 0});
		//await page.waitForTimeout(900); // Wait for 4.3 seconds (4300 milliseconds)
		console.log("loaded dom");

		await autoScroll(page);

		/* 
		await page.waitForNavigation({
		  waitUntil: 'networkidle0',
		});
		console.log('network idle');
	   */

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

				// Extract fractional description element within the current product container
				const fractionalDescElement = await productContainer.$(".product-variation__fractional-desc");

				if (fractionalDescElement) {
					// Extract the price text within the "span" element
					const priceKg = await fractionalDescElement.$eval("span", (span) => span.textContent.trim());
					product.pricePorQuilo = priceKg;
					//console.log(priceKg);  //Preço por quilo
				}

				// Extract the final price within the current product container
				const finalPriceElement = await productContainer.$(".product-variation__final-price");

				if (finalPriceElement) {
					// Extract the price text within the "span" element
					product.price = await finalPriceElement.evaluate((node) => node.textContent.trim());
					console.log(product.price);
				}

				// Extract the image URL
				product.imageUrl = await productContainer.$eval("img.product-variation__image", (img) => img.getAttribute("src"));

				// Extract product link
				product.productLink = await productContainer.$eval("a.product-variation__image-container", (a) => a.getAttribute("href"));

				/* 
				// Check if cooperPrice exists
				const cooperPriceElement = await priceElement.$(".product-variation__cooper-price");
				if (cooperPriceElement) {
					const cooperPrice = await cooperPriceElement.$eval("span", (span) => span.textContent.trim());
					product.cooperPrice = parseFloat(cooperPrice.replace("R$", "").trim());
				} else {
					product.cooperPrice = null; // Set to null if cooperPrice is not found
				}
 */

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

	// Remove duplicates from the extractedProducts array
	await removeDuplicates(); //fix product names

	// Log the accumulated extracted product information after removing duplicates
	console.log("\nTotal products after removing duplicates: ", extractedProducts.length);

	// Close the browser after all categories have been scraped
	await browser.close();
	console.log("\n Scraping OK \n ");


	// Add the "mercado" property to each product
	extractedProducts = addProductDetails(extractedProducts);
	//console.log(extractedProducts);

	// Limit the number of products to be uploaded (13 products) and call compareAndSaveToDatabase
	if (extractedProducts.length > 0) {
		//const productsToUpload = extractedProducts.slice(0, 5000);
		const i = 1;

		const client = await connectToDatabase();
		compareAndSaveToDatabase(extractedProducts, client, "Cooper Água Verde", 5000);
	}
    process.exit(0);

})();
