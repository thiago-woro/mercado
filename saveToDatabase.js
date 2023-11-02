const {getDate} = require("./getdate.js");
const {saveToMongoDB} = require("./database.js");

async function compareAndSaveToDatabase(newlyScrapedProducts, client, mercadoName, maxProductsToUpload) {
	console.log("\n starting saveToDatabase.js");
	console.log("\n received ", newlyScrapedProducts.length, " products");


	// Remove duplicates from newlyScrapedProducts using a Set
	const uniqueNewlyScrapedProducts = Array.from(new Set(newlyScrapedProducts));

	console.log("\n new set:  ", uniqueNewlyScrapedProducts.length, " products");


	const db = client.db("products");
	const collection = db.collection("products");

	// Fetch all products from the database, filtered by Mercado
	const allProductsFromDatabase = await collection.find({mercado: mercadoName}).toArray();

	if (allProductsFromDatabase.length === 0) {
		console.log(`${mercadoName} has no products yet. Creating new products.`);
		// You can insert newly scraped products as new products in the database
		await collection.insertMany(
			uniqueNewlyScrapedProducts.map((product) => ({
				...product,
				priceUpdatesCounter: 0, // Set the initial counter to 0 for new products
			}))
		);
		console.log(`${uniqueNewlyScrapedProducts.length} new products created and saved.`);
		return;
	}

	// Create a map of product names to their existing prices and update info for quick comparison
	const existingProductInfo = new Map(allProductsFromDatabase.map((product) => [product.name, {price: product.price, updatedHour: product.updatedHour, updatedDate: product.updatedDate, priceUpdatesCounter: product.priceUpdatesCounter || 0}]));

	// Filter newly scraped products to find products with different prices
	const productsWithDifferentPrices = uniqueNewlyScrapedProducts.filter((product) => {
		const existingInfo = existingProductInfo.get(product.name);
		if (!existingInfo || existingInfo.price !== product.price) {
			// Product not found or price differs, update the updatedHour, updatedDate, and increment the priceUpdatesCounter
			product.updatedHour = getDate().dateHour;
			product.updatedDate = getDate().dateDDMMYY;
			product.priceUpdatesCounter = (existingInfo ? existingInfo.priceUpdatesCounter : 0) + 1;
			return true;
		}
		return false;
	});

	console.log(`Total in db ${allProductsFromDatabase.length}, scraped: ${uniqueNewlyScrapedProducts.length}, products with different prices: ${productsWithDifferentPrices.length}`);

	if (productsWithDifferentPrices.length > 0) {
		// Apply the limit here
		const limitedProductsToUpload = productsWithDifferentPrices.slice(0, maxProductsToUpload);
		await saveToMongoDB(client, limitedProductsToUpload);
		//totalNewProductsSaved += limitedProductsToUpload.length;
		//console.log(`Saved ${limitedProductsToUpload.length} products with different prices`);
	} else {
		console.log("No products with different prices to save to MongoDB");
	}
}

module.exports = {compareAndSaveToDatabase};
