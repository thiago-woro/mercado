const mercadoName = "Bistek";

const { connectToDatabase } = require("./database.js");

async function deleteDuplicateProducts() {
  const client = await connectToDatabase();

  try {
    const db = client.db("products");
    const collection = db.collection("products");

    // Define the query to filter products with mercado "Bistek"
    const query = { mercado: mercadoName };

    // Create an aggregation pipeline to find and delete duplicates
    const pipeline = [
      {
        $match: query,
      },
      {
        $group: {
          _id: "$name",
          duplicates: { $addToSet: "$_id" },
        },
      },
      {
        $match: {
          duplicates: { $gt: 1 },
        },
      },
    ];

    // Get all of the results of the aggregation pipeline into an array
    const duplicateDocs = await collection.aggregate(pipeline).toArray();

    // Iterate over the array of duplicate documents and delete them
    let deletedCount = 0;
    for (const duplicateDoc of duplicateDocs) {
      const deletionResult = await collection.deleteOne({ _id: duplicateDoc._id });
      deletedCount += deletionResult.deletedCount;
    }

    console.log(`Deleted ${deletedCount} duplicate products with mercado: ${mercadoName}`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB Atlas ❌");
  }
}

// Call the function to delete duplicates
deleteDuplicateProducts();

