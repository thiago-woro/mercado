// Import necessary libraries and functions
//não utiliza o puppeteer para o scraping, o simples fetch na página já pega os produtos
const axios = require("axios");
const {getDate} = require("./getdate.js");
const {compareAndSaveToDatabase} = require("./saveToDatabase.js");
const {connectToDatabase, saveToMongoDB} = require("./database.js");

// Initialize an array to store scraped products
let scrapedProducts = [];

// Define an array of category numbers to scrape
let categoriesFort = [1293, 1298, 1621, 1297, 1635, 1295, 1294, 1292, 1299, 2013, 1296, 1636, 1634];

//categoriesFort = [1293]; //test only

// Set initial 'from' and 'to' values for the pagination
let from = 0;
let to = 49;

// Log the start of the execution
console.log(`\n\n\n\n Starting new execution... ⭐`);

async function scrapeAllCategories() {
    console.log(`\n\n started scraping \n`);
    
    for (const categoryNumberParameter of categoriesFort) {
        let pageCounter = 1;

        while (pageCounter <= 18) { // Limit to 50 pages
            // Reset 'from' and 'to' for each page
            from = (pageCounter - 1) * 50;
            to = pageCounter * 50 - 1;

            // Fetch product data for the current category and page range
            const productsThisRound = await fetchData(categoryNumberParameter, from, to);

            if (productsThisRound.length > 0) {
                console.log(`\n\n${productsThisRound.length} products on category ${categoryNumberParameter} - Page: ${pageCounter}\n`);
                pageCounter++;
            } else {
                // If no products found on the current page, move to the next category
                console.log(`\n\nNo products found on category ${categoryNumberParameter} - Page: ${pageCounter}. Moving to the next category...\n`);
                break; // Exit the loop and move to the next category
            }
        }
    }
    console.log(`\n\n finished scraping OK ⭐⭐⭐⭐\nGot ${scrapedProducts.length} products`);
    sendToUpload();
}




// Define a function to fetch product data for a specific category and page range
async function fetchData(categoryNumberParameter, from, to) {
	// Construct the URL for fetching product data
	let baseURL = `https://www.deliveryfort.com.br/api/catalog_system/pub/products/search?fq=C:/${categoryNumberParameter}/&PS=32&sl=067e6192-faba-4687-b9eb-73ab7ac0848f&cc=32&sm=0&PageNumber=1&_from=${from}&_to=${to}`;

	try {
		// Send an HTTP GET request to the URL
		const response = await axios.get(baseURL);
		const data = response.data;

		// Check if products exist in the response data
		if (data && data.length > 0) {
			// Extract and structure product information, including price data
			const products = data.map((product) => ({
				name: product.productName,
				id: product.productId,
				productLink: product.linkText, // URL to the product
				brand: product.brand,
				ean: product.items[0]?.ean || null,
				mercado: "Fort",
				updatedHour: getDate().dateHour,
				updatedDate: getDate().dateDDMMYY,
				description: product.description,
				imageUrl: product.items[0]?.images[0].imageUrl || null,
				price: product.items[0]?.sellers[0]?.commertialOffer?.Price || null,
				listPrice: product.items[0]?.sellers[0]?.commertialOffer?.ListPrice || null,
				availableQuantity: product.items[0]?.sellers[0]?.commertialOffer?.AvailableQuantity || null,
			}));
			// Concatenate products to the main array
			scrapedProducts.push(...products);

		} else {
			console.error(`No products found, category ${categoryNumberParameter}\nFrom ${from}  to  ${to} .`);
		}
	} catch (error) {
		console.error(`Error fetching data for category ${categoryNumberParameter}`, error);
	}

	return scrapedProducts;
}

async function sendToUpload() {
	console.log("\n 🅱🅱🅱🅱🅱🅱🅱\nsending to upload...  ", scrapedProducts.length, "\n\n");
	const client = await connectToDatabase();
	compareAndSaveToDatabase(scrapedProducts, client, "Fort", 5000);
}

// Start scraping for all categories
scrapeAllCategories();
