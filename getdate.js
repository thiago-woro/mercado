function getDate() {
	const currentDate = new Date();
	const dateHourLocal = currentDate.toLocaleString("pt-BR", {timeZoneName: "short"});
	const timeWithTimeZone = dateHourLocal.split(' ')[1]; // Extracts the time with timezone
	const date = currentDate.toLocaleDateString("pt-BR");

	return {
		dateHour: timeWithTimeZone,
		dateDDMMYY: date,
	};
}

module.exports = { getDate };






///not being used
async function updateProductPrice(client, product) {
	const db = client.db("mercado");
	const collection = db.collection("products");

	// Check if a product with the same identifier exists
	const existingProduct = await collection.findOne({productName: product.productName});

	if (existingProduct) {
		// Product already exists, compare prices
		if (existingProduct.price !== product.price) {
			// Price has changed, update the price
			await collection.updateOne({productName: product.productName}, {$set: {price: product.price}});
			console.log(`Updated price for ${product.productName}`);
		}
	} else {
		// Product does not exist, insert it
		await collection.insertOne(product);
		console.log(`Added new product: ${product.productName}`);
	}
}