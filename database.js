const {MongoClient} = require("mongodb");
let passwordMongoDB = "E0eeRkr6oqWd9Ir9"
const uri = `mongodb+srv://iisacribeiro:${passwordMongoDB}@mercado.nhw95wm.mongodb.net/?retryWrites=true&w=majority`;

async function connectToDatabase() {
	const client = new MongoClient(uri);
	await client.connect();
	console.log("Connected to MongoDB Atlas ✅");
	return client;
}

async function saveToMongoDB(client, data) {
	if (data && client) {
		try {
			const db = client.db("products");
			const collection = db.collection("products");

			const result = await collection.insertMany(data);
			console.log(`${result.insertedCount} products added to MongoDB`);
		} catch (error) {
			console.error("#11 Error saving data to MongoDB, function name saveToMongoDB():\n\n", error);
			console.log(`returning... ❌`);
			return;
		}
	} else {
		console.log(`client or data is empty`);
	}
}

//  connectToDatabase()     uncomment to test connection

module.exports = {
	connectToDatabase,
	saveToMongoDB,
};


