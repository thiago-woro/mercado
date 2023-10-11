

//function to fetch data customized to work with Atacadao market

async function fetchDataFromURL() {
    console.log(`\n\n\n\n\n⭐⭐⭐⭐⭐⭐⭐⭐\n\n`);
    console.log(`1 - fetching from website... ⏳`);
  
    try {
      const response = await axios.get(url);
      
      // Handle the JSON data in the response
      const jsonData = response.data;

         // Access the "results" array containing product information
         newlyScrapedProducts = jsonData.results.map(product => ({
          ...product,
          categoryNumber: categoryNum,
          mercado: "atacadao",
          cityURL: cityURL
        }));
      
       //logger(newlyScrapedProducts)
      //console.log(`2 -  fetched products 📦  ${newlyScrapedProducts.length}`);

      if (newlyScrapedProducts.length > 0) {
         // Now that you have the data, call the function to compare and save to the database
      await compareAndSaveToDatabase(newlyScrapedProducts);
        //console.log(`Saved ${newProducts.length} new products to MongoDB 🔋📦 ☑`);
    } else {
        console.log("Zero products found in this category ", categoryNum);
    }

  
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  
fetchDataFromURL().catch((error) => {
	console.error("Error:", error);
});