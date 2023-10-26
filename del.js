const { MongoClient } = require("mongodb");

let passwordMongoDB = "E0eeRkr6oqWd9Ir9";

async function main() {
  try {
    const uri = `mongodb+srv://iisacribeiro:${passwordMongoDB}@mercado.nhw95wm.mongodb.net/?retryWrites=true&w=majority`;

    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB Atlas ✅");

    const databaseName = "products"; // Your database name
    const collectionName = "products"; // Your collection name

    const database = client.db(databaseName);
    const collection = database.collection(collectionName);

    // Define the filter to delete products with mercado equal to "Giassi"
    const filter = { mercado: "Giassi" };

    const result = await collection.deleteMany(filter);
    console.log(`${result.deletedCount} product(s) with mercado "Giassi" deleted`);
  } catch (error) {
    console.error(`Error: ${error}`);
  } finally {
    await client.close();
  }
}

main().catch(console.error);