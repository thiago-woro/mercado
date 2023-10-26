// Import necessary libraries and functions
const axios = require("axios");
const {getDate} = require("./getdate.js");
const {connectToDatabase, saveToMongoDB} = require("./database.js");

// Define an array of category numbers to scrape
let categoriesFort = [1293, 1298, 1621, 1297, 1635, 1295, 1294, 1292, 1299, 2013, 1296, 1636, 1634];

// Set initial 'from' and 'to' values for the pagination
let from = 0;
let to = 49;

// Log the start of the execution
console.log(`\n\n\n\n Starting new execution ⭐`);

// Define the main function for scraping all categories
async function scrapeAllCategories() {
	for (const categoryNumberParameter of categoriesFort) {
		let hasProducts = true;

		while (hasProducts) {
			// Fetch product data for the current category and page range
			const products = await fetchData(categoryNumberParameter, from, to);

			if (products.length > 0) {
				console.log(`\n\n\n Got ${products.length} products on category ${categoryNumberParameter}⭐\n`);
				// Log or process the products as needed
				console.log(products);
				from += 50;
				to += 50;
			} else {
				// If no products found on the current page, move to the next category
				console.log(`\n\n\n Got ${products.length} products, moving to NEXT category! ⭐\n`);
				hasProducts = false;
			}
		}

		// Reset 'from' and 'to' for the next category
		from = 0;
		to = 49;
	}
}

// Define a function to fetch product data for a specific category and page range
async function fetchData(categoryNumberParameter, from, to) {
	// Construct the URL for fetching product data
	let baseURL = `https://www.deliveryfort.com.br/api/catalog_system/pub/products/search?fq=C:/${categoryNumberParameter}/&PS=32&sl=067e6192-faba-4687-b9eb-73ab7ac0848f&cc=32&sm=0&PageNumber=1&_from=${from}&_to=${to}`;

	// Initialize an array to store scraped products
	let bistekScrapedProducts = [];

	try {
		// Send an HTTP GET request to the URL
		const response = await axios.get(baseURL);
		const data = response.data;

		// Check if products exist in the response data
		if (data && data.length > 0) {
			// Extract and structure product information, including price data
			const products = data.map((product) => ({
				name: product.productName,
				productId: product.productId,
				link: product.linkText, // URL to the product
				brand: product.brand,
				ean: product.items[0]?.ean || null,
				mercado: "Fort",
				updatedHour: getDate().dateHour,
				updatedDate: getDate().dateDDMMYY,
				description: product.description,
				image: product.items[0]?.images[0].imageUrl || null,
				// Include price data
				price: product.items[0]?.sellers[0]?.commertialOffer?.Price || null,
				listPrice: product.items[0]?.sellers[0]?.commertialOffer?.ListPrice || null,
				availableQuantity: product.items[0]?.sellers[0]?.commertialOffer?.AvailableQuantity || null,
			}));
			// Concatenate products to the main array
			bistekScrapedProducts = bistekScrapedProducts.concat(products);
		} else {
			console.error(`No products found on page, category ${categoryNumberParameter}.`);
		}
	} catch (error) {
		console.error(`Error fetching data for category ${categoryNumberParameter}`, error);
	}

	return bistekScrapedProducts;
}

// Start scraping for all categories
scrapeAllCategories();
