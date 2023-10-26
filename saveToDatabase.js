async function compareAndSaveToDatabase(newlyScrapedProducts, client, i, mercadoName) {
  console.log("Imported file saveToDatabase.js");

  const db = client.db("products");
  const collection = db.collection("products");

  // Filter products with mercado equal to mercadoName / "Giassi"
  const giassiProducts = newlyScrapedProducts.filter((product) => product.mercado === mercadoName);

  if (giassiProducts.length === 0) {
    console.log(`No products with mercado equal to ${mercadoName} found.`);
    return;
  }

  // Fetch all products with mercado "Giassi"/mercadoName from the database
  const filter = { mercado: mercadoName };
  const allProductsFromDatabase = await collection.find(filter).toArray();

  // Create a map of product names to their existing prices and update info for quick comparison
  const existingProductInfo = new Map(allProductsFromDatabase.map((product) => [product.name, { price: product.price, updatedHour: product.updatedHour, updatedDate: product.updatedDate, priceUpdatesCounter: product.priceUpdatesCounter || 0 }]));

  // Filter newly scraped products to find products with different prices
  const productsWithDifferentPrices = giassiProducts.filter((product) => {
    const existingInfo = existingProductInfo.get(product.name);
    if (!existingInfo || existingInfo.price !== product.price) {
      // Product not found or price differs, update the updatedHour, updatedDate, and increment the priceUpdatesCounter
      product.updatedHour = getDate().dateHour;
      product.updatedDate = getDate().dateDDMMYY;
      product.priceUpdatesCounter = (existingInfo ? existingInfo.priceUpdatesCounter : 0) + 1;
      totalPriceUpdatedProducts++;
      return true;
    }
    return false;
  });

  
    console.log(`Total in db ${allProductsFromDatabase.length}, scraped: ${newlyScrapedProducts.length}, products with different prices: ${productsWithDifferentPrices.length}`);
  
    if (productsWithDifferentPrices.length > 0) {
      await saveToMongoDB(client, productsWithDifferentPrices);
      totalNewProductsSaved += productsWithDifferentPrices.length;
      console.log(`Saved ${productsWithDifferentPrices.length} products with different prices - category ${i}`);
    } else {
      console.log("No products with different prices to save to MongoDB");
    }
  }


module.exports = { compareAndSaveToDatabase };


