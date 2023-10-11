console.log(`hello`);
//just a test for testing database connection and storage

const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://thiagoworo:L1UnJ7cEqafma96i@zaploop.g3tioql.mongodb.net/";

const client = new MongoClient(uri);

async function main() {
    try {
      await client.connect();
      console.log("Connected to MongoDB Atlas");
  
      const db = client.db("clients"); // Use the database name "clients"
      const collection = db.collection("clients"); // Use the collection name "clients"
  
      // Create a JSON array of clients
      const clientsData = [
        { name: "John", age: 30 },
        { name: "Robert", age: 25 },
        { name: "Mike", age: 35 },
      ];
  
      // Insert the clients data into the "clients" collection
      const result = await collection.insertMany(clientsData);
      console.log(`${result.insertedCount} documents inserted`);
  
  } finally {
    await client.close();
  }
}

main().catch(console.error);
