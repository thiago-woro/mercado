const {connectToDatabase, saveToMongoDB} = require("./database.js");
const {getDate} = require("./getdate.js");

const axios = require("axios");

let categoryNum = 6;
let cityURL = "SC-Blumenau";
let totalScrapedProducts = 0;
let totalPriceUpdatedProducts = 0;
let totalNewProductsSaved = 0;

let url = `https://algolia.cotabest.com.br/catalogo?category=${categoryNum}&displayFacets=true&commaSeparatedRegionIds=4099,14347,5645,11277,4495,14354,5910,3608,4265,11434,12459,14383,4529,9141,3638,11327,5315,2760,11081,15561,12496,15059,1366,7384,5848,3071,3932,2652,9947,12896,13924,15845,5610,13292,9198,2291,11380,11124,1020,14974,7295&page=0&order_by=-relevance&analyticsTags=UserB2B,UserOut,${cityURL}`;

let categoriesWithProducts = [
	100, 99, 98, 97, 96, 95, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 81, 80, 77, 76, 75, 74, 73, 71, 70, 68, 67, 66, 65, 60, 58, 54, 52, 46, 39, 36, 18, 14, 108, 110, 111, 112, 114, 115, 116, 117, 118, 119, 121, 124, 127, 128, 129, 130, 132, 136, 137, 138, 140, 147, 148, 149, 150, 152, 153, 154,
	156, 157, 158, 159, 161, 162, 163, 164, 165, 166, 167, 168, 169, 172, 173, 174, 175, 176, 177, 178, 184, 185, 186, 189, 190, 191, 195, 196, 197, 198, 199, 300, 301, 380, 381, 382, 383, 384, 387, 388, 389, 390, 392, 393, 394, 395, 396, 397, 398, 400, 401, 402, 403, 404, 406, 407, 408, 409,
	410, 412, 414, 415, 416, 417, 418, 420, 424, 425, 426, 429, 430, 436, 437, 440, 442, 443, 444, 449, 452, 454, 455, 462, 463, 472, 474, 475, 476, 480, 481, 482, 492, 494, 495, 496, 497, 498, 502, 503, 504, 505, 507, 510, 516, 517, 524, 525, 527, 528, 536, 565, 573, 585, 586, 587, 589, 595,
	596, 598, 602, 623, 624, 625, 626, 629, 632, 635, 636, 637, 641, 642, 643, 644, 645, 646, 649, 650, 651, 652, 653, 654, 655, 656, 660, 667, 672, 673, 674, 685, 704, 705, 706, 711, 712, 713, 714, 716, 717, 718, 720, 722, 727, 728, 733, 736, 739, 742, 743, 744, 745, 746, 747, 748, 749, 750,
	751, 756, 757, 758, 760, 766, 768, 769, 770, 772, 775, 778, 779, 784, 785, 797, 798, 812, 814, 826, 832, 839, 850, 861, 863, 864, 877, 879, 886, 905, 918, 934, 937, 946, 949, 954, 955, 956, 957, 958, 959, 961, 962, 978, 983, 984, 985, 998,
];

let newlyScrapedProducts = [];




async function fetchAndCompareProducts(categoryNum, client) {
  let pageNum = 1;
  try {
    const url = `https://algolia.cotabest.com.br/catalogo?category=${categoryNum}&displayFacets=true&page=${pageNum}`;
    const response = await axios.get(url);

    // Handle the JSON data in the response
    const jsonData = response.data;

    const { dateHour, date } = getDate();

    // Access the "results" array containing product information
    newlyScrapedProducts = jsonData.results.map((product) => ({
      ...product,
      categoryNumber: categoryNum,
      mercado: "atacadao",
      cityURL: cityURL,
      dateHour: dateHour,
      date: date,
    }));

    console.log(`Fetched ${newlyScrapedProducts.length} - category ${categoryNum}`);
    totalScrapedProducts += newlyScrapedProducts.length;

    if (newlyScrapedProducts.length > 0) {
      await compareAndSaveToDatabase(newlyScrapedProducts, client, categoryNum);
    } else {
      //console.log(`No products found for Category ${categoryNum}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function scrapeCategoriesLoop() {
  // Establish the MongoDB connection before the loop
  const client = await connectToDatabase();

  // Ensure that the MongoDB client is connected
  if (!client.topology.isConnected()) {
    throw new Error("MongoDB client is not connected.");
  }

  try {
    for (let categoryNum of categoriesWithProducts) {
      await fetchAndCompareProducts(categoryNum, client);
    }

    // After processing all categories, store the totals in the "scrapingResults" collection
    await storeScrapingResultsToDatabase(client, totalScrapedProducts, totalPriceUpdatedProducts, totalNewProductsSaved);
  } finally {
    // Close the MongoDB connection after storing the results
    if (client.topology.isConnected()) {
      await client.close();
      console.log(`Connection to database closed. Finished.`);
    }
  }
}

async function storeScrapingResultsToDatabase(client, totalScraped, totalPriceUpdated, totalNewSaved) {
  try {
    const db = client.db("products");
    const collection = db.collection("scrapingResults");

    // Create a document with the total counts
    const result = await collection.insertOne({
      date: new Date(),
      totalScrapedProducts: totalScraped,
      totalPriceUpdatedProducts: totalPriceUpdated,
      totalNewProductsSaved: totalNewSaved,
    });

    console.log("Scraping results stored in the database.");
  } catch (error) {
    console.error("Error storing scraping results:", error);
  }
}

// Usage example:
scrapeCategoriesLoop().catch((error) => {
	console.error("Error:", error);
});






function logger(products) {
	for (let index = 0; index < products.length; index++) {
		const product = products[index];
		console.log(`Product Details (Index ${index + 1}):`);
		console.log(`- ID: ${product.id}`);
		console.log(`- Name: ${product.name}`);
		console.log(`- Photo: ${product.photo}`);
		console.log(`- Category: ${product.category}`);
		console.log(`- Type: ${product.type}`);
		console.log(`- Brand: ${product.brand}`);
		console.log(`- Weight: ${product.weight}`);
		console.log(`- Packaging: ${product.packaging}`);
		console.log(`- Slug: ${product.slug}`);

		// Access the prices array for the product
		const prices = product.providers[0].prices;

		// Loop through the prices and display them
		console.log("Prices:");
		for (let priceIndex = 0; priceIndex < prices.length; priceIndex++) {
			const price = prices[priceIndex];
			console.log(`- Price (Index ${priceIndex}): ${price.price} ${price.unit}`);
		}

		console.log("-------------------------");
	}
}