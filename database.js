const {MongoClient} = require("mongodb");
//const uri = "mongodb+srv://thiagoworo:L1UnJ7cEqafma96i@zaploop.g3tioql.mongodb.net/";
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
			console.error("Error saving data to MongoDB:", error);
			console.log(`returning... ❌`);
			return;
		}
	} else {
		console.log(`client or data is empty`);
	}
}

module.exports = {
	connectToDatabase,
	saveToMongoDB,
};


