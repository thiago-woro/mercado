// url da categoria bebidas =  https://www.deliveryfort.com.br/buscapagina?fq=C:/1293/&PS=32&sl=067e6192-faba-4687-b9eb-73ab7ac0848f&cc=32&sm=0&PageNumber=2

// product categories are 1293,1298, etc

//pagina renderizada em html com 
//manter o pageNumber igual e avançar os parâmetros _from e _to


const axios = require('axios');
const { getDate } = require("./getdate.js");
const { connectToDatabase, saveToMongoDB } = require("./database.js");


//1621 carnes, 1298 Mercearia, 1293 Bebidas, 1297 Limpeza, 1635 Hortifruti, 1295 Higiene e beleza, 1294 casa e lazer, 1292 alimentação saudável, 1299 Congelados, 2013 Food service, 1296 Infantil, 1636 Petshop, 1634 Frios e laticineos

let categoriesFort = [1293, 1298, 1621, 1297, 1635, 1295, 1294, 1292, 1299, 2013, 1296, 1636, 1634];
let from = 0;
let to = 49; // Set the initial page size

console.log(`\n\n\n\n\n\n\n Starting new execution ⭐`);

async function scrapeAllCategories() {
    for (const categoryNumberParameter of categoriesFort) {
     // let currentPage = 1;
      let hasProducts = true;
  
      while (hasProducts) {
        const products = await fetchData(categoryNumberParameter, from, to);
        
        if (products.length > 0) {
          console.log(`\n\n\n Got ${products.length} products on category ${categoryNumberParameter}⭐\n`);
          // Log or process the products as needed
          console.log(products);
          //currentPage++;
          from += 50;
          to += 50;
        } else {
          // If no products found on the current page, move to the next category
          console.log(`\n\n\n Got ${products.length} products, moving to NEXT category! ⭐\n`);
          hasProducts = false;
        }
      }
  
      // Reset from and to for the next category
      from = 0;
      to = 49;
    }
  }
  
  async function fetchData(categoryNumberParameter, from, to) {
    let baseURL = `https://www.deliveryfort.com.br/api/catalog_system/pub/products/search?fq=C:/${categoryNumberParameter}/&PS=32&sl=067e6192-faba-4687-b9eb-73ab7ac0848f&cc=32&sm=0&PageNumber=1&_from=${from}&_to=${to}`;
    let bistekScrapedProducts = [];
  
    try {
      const response = await axios.get(baseURL);
      const data = response.data;
  
      // Check if products exist in the data
      if (data && data.length > 0) {
        // Extract the desired fields for each product
        const products = data.map(product => ({
          productName: product.productName,
          productId: product.productId,
          link: product.linkText, //https://www.deliveryfort.com.br/<linkText>>/p
          brand: product.brand,
          ean: product.items[0]?.ean || null,
          mercado: 'Fort',
          updatedHour: getDate().dateHour,
          updatedDate: getDate().dateDDMMYY,
          description: product.description,
          image: product.items[0]?.images[0].imageUrl || null,
        }));
  
        // Concatenate products to the main array
        bistekScrapedProducts = bistekScrapedProducts.concat(products);
      } else {
        console.error(`No products found on page, category ${categoryNumberParameter}.`);
      }
    } catch (error) {
      console.error(`Error fetching data for category ${categoryNumberParameter}`, error);
    }
  
    return bistekScrapedProducts;
  }
  
  // Start scraping for all categories
  scrapeAllCategories();