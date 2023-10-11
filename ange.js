const puppeteer = require("puppeteer");
const {getDate} = require("./getdate.js");
const {autoScroll} = require("./autoscroll.js");

let categoriesURLs = [
	"https://www.angeloni.com.br/super/c/congelados/_/N-ha9qgj",
	"https://www.angeloni.com.br/super/c/mercearia/achocolatado-em-po/_/N-1s0nch5",
	" https://www.angeloni.com.br/super/c/mercearia/adocante/_/N-kon4f2",
	"https://www.angeloni.com.br/super/c/mercearia/alimento-infantil/_/N-sacdh",
	"https://www.angeloni.com.br/super/c/mercearia/acucar/_/N-7njsh",
	"https://www.angeloni.com.br/super/c/adega/_/N-1me4i05",
	"https://www.angeloni.com.br/super/c/bebidas/_/N-ncgb5d",
	"https://www.angeloni.com.br/super/c/biscoitos-e-snacks/_/N-1gwgsub",
	"https://www.angeloni.com.br/super/c/mercearia/bomboniere/_/N-kyearp",
	"https://www.angeloni.com.br/super/c/carnes-aves-e-peixes/_/N-281ej9",
	"https://www.angeloni.com.br/super/c/frios/_/N-1x4tm5e",
	"https://www.angeloni.com.br/super/c/hortifruti/_/N-1vhgeps",
	"https://www.angeloni.com.br/super/c/laticinios/_/N-1j7ba6b",
	"https://www.angeloni.com.br/super/c/matinal/_/N-1md1wrv",
	"https://www.angeloni.com.br/super/c/mercearia/_/N-1x2wbkb",
	"https://www.angeloni.com.br/super/c/molhos-e-condimentos/_/N-6p02nb",
	"https://www.angeloni.com.br/super/c/padaria-e-confeitaria/_/N-11wzb81",
	"https://www.angeloni.com.br/super/c/produtos-orientais/_/N-b0vu5m",
	"https://www.angeloni.com.br/super/c/sobremesas/_/N-1s5z6zm",
	"https://www.angeloni.com.br/super/c/automotivo/_/N-1s8a2fx",
	"https://www.angeloni.com.br/super/c/bebe-e-mamae/_/N-1nssb5t",
	"https://www.angeloni.com.br/super/c/beleza/_/N-18ip11w",
	"https://www.angeloni.com.br/super/c/casa-e-bazar/_/N-cn2k4t",
	"https://www.angeloni.com.br/super/c/higiene/_/N-sxtgg6",
	"https://www.angeloni.com.br/super/c/limpeza/_/N-1hq6fe1",
	"https://www.angeloni.com.br/super/c/pet-shop/_/N-1psioer",
	"https://www.angeloni.com.br/super/c/especiais/diet-e-light/_/N-1lfrq03",
	"https://www.angeloni.com.br/super/c/especiais/sem-gluten/_/N-4r218q",
	"https://www.angeloni.com.br/super/c/especiais/sem-lactose/_/N-y82pft",
	"https://www.angeloni.com.br/super/c/especiais/vegano/_/N-13ystv",
	"https://www.angeloni.com.br/super/c/fitness/_/N-1p82dmi",
	"https://www.angeloni.com.br/super/c/bebidas/agua/_/N-1qb58hx",
	"https://www.angeloni.com.br/super/c/bebidas/agua-com-gas/_/N-yssgdj",
	" https://www.angeloni.com.br/super/c/bebidas/agua-de-coco/_/N-ragg1w",
	" https://www.angeloni.com.br/super/c/bebidas/bebida-vegetal/_/N-11i7xgb",
	" https://www.angeloni.com.br/super/c/bebidas/cervejas/_/N-1rjw16r",
	" https://www.angeloni.com.br/super/c/bebidas/cervejas-especiais/_/N-ccfoxw",
	" https://www.angeloni.com.br/super/c/bebidas/cha-pronto/_/N-146d00r",
	" https://www.angeloni.com.br/super/c/bebidas/destilados/_/N-19zlttn",
	" https://www.angeloni.com.br/super/c/bebidas/drinks-prontos/_/N-1fk3s7l",
	" https://www.angeloni.com.br/super/c/bebidas/energetico/_/N-q9x1xq",
	" https://www.angeloni.com.br/super/c/bebidas/isotonicos/_/N-rs3odq",
	" https://www.angeloni.com.br/super/c/bebidas/refrigerante/_/N-1jy2px4",
	" https://www.angeloni.com.br/super/c/bebidas/suco-e-nectar/_/N-qtgd4k",
	" https://www.angeloni.com.br/super/c/bebidas/formulas-para-drinks/_/N-14gmf1",
	"https://www.angeloni.com.br/super/c/bebidas/sidras/_/N-1gz9k45",
	" https://www.angeloni.com.br/super/c/mercearia/arroz/_/N-1f2jr0g",
	" https://www.angeloni.com.br/super/c/mercearia/azeites/_/N-xqkt0l",
	" https://www.angeloni.com.br/super/c/mercearia/barras-de-cereal/_/N-1tc4vb9",
	" https://www.angeloni.com.br/super/c/mercearia/bomboniere/_/N-kyearp",
	"https://www.angeloni.com.br/super/c/mercearia/cafe/_/N-1fsq2mk",
	" https://www.angeloni.com.br/super/c/mercearia/cereais-e-farinaceos/_/N-zbespt",
	" https://www.angeloni.com.br/super/c/mercearia/cestas/_/N-xz8j86",
	" https://www.angeloni.com.br/super/c/mercearia/confeitos/_/N-1kso5v5",
	" https://www.angeloni.com.br/super/c/mercearia/cha/_/N-1nwdewp",
	" https://www.angeloni.com.br/super/c/mercearia/complemento-alimentar/_/N-kos34o",
	" https://www.angeloni.com.br/super/c/mercearia/confeitaria/_/N-1g3m6pm",
	" https://www.angeloni.com.br/super/c/mercearia/conservas/_/N-1fp1y1f",
	" https://www.angeloni.com.br/super/c/mercearia/doces-e-geleias/_/N-14mdnlg",
	" https://www.angeloni.com.br/super/c/mercearia/enlatados-e-saches/_/N-b6g02c",
	"https://www.angeloni.com.br/super/c/mercearia/erva-mate/_/N-u8w1c3",
	" https://www.angeloni.com.br/super/c/mercearia/feijao/_/N-e8azc7",
	"https://www.angeloni.com.br/super/c/mercearia/lentilha/_/N-nsrziy",
	" https://www.angeloni.com.br/super/c/mercearia/leite-em-po/_/N-sl0bpw",
	"https://www.angeloni.com.br/super/c/mercearia/massas/_/N-e4fb2u",
	" https://www.angeloni.com.br/super/c/mercearia/oleos/_/N-mq49xm",
	" https://www.angeloni.com.br/super/c/mercearia/molho-de-pimenta/_/N-4gw78s",
	" https://www.angeloni.com.br/super/c/mercearia/panettone-e-chocottone/_/N-19giql8",
	"https://www.angeloni.com.br/super/c/mercearia/comida-mexicana/_/N-15yhp0c",
	" https://www.angeloni.com.br/super/c/mercearia/sopas-e-cremes/_/N-w52zi8",
	" https://www.angeloni.com.br/super/c/mercearia/granulado/_/N-18jt2v1",
];

categoriesURLs = ["https://www.angeloni.com.br/super/c/congelados/_/N-ha9qgj", "https://www.angeloni.com.br/super/c/mercearia/achocolatado-em-po/_/N-1s0nch5"];

let extractedProducts = []; // Global variable to store extracted products

async function setupBrowser() {
	const browser = await puppeteer.launch({headless: false, slowMo: 0, devtools: false});
	const page = await browser.newPage();

	// Emulate a browser-like environment
	await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36");
	await page.setViewport({width: 1303, height: 980});
  page.setDefaultNavigationTimeout(600000);

  // Add event listeners to log responses and request failures
  page.on('response', (response) => {
    //console.log(`Response URL: ${response.url()}`);
    //console.log(`Response Status: ${response.status()}`);
  });

  page.on('requestfailed', (request) => {
   // console.log(`Request failed: ${request.url()}`);
  });

  return { browser, page };
}

async function removeDuplicates() {
	extractedProducts = extractedProducts.filter((product, index, self) => index === self.findIndex((p) => p.name === product.name));
}

async function scrapeCategory(categoryURL, page) {
	try {
		page.setDefaultNavigationTimeout(360000);

		console.log(` \n\n⏳ loading: ${categoryURL}`);

		// Navigate to the category URL
		await page.goto(categoryURL + "?Nrpp=9");
		//await page.waitForNavigation(); // Wait for the navigation to complete
    console.log(`finished navigation ok`);


		//await page.waitForTimeout(1300);

		// Wait for a specific element to ensure the page is fully loaded
		await page.waitForSelector(".box-produto");
		await page.waitForSelector(".box-produto__desc-prod");

		//await autoScroll(page);

		console.log(`Products loaded ok\n\n\n`);

		//fn to extract product info
		const extractProductInfo = async () => {
			const products = [];

			// Find all product containers
			const productContainers = await page.$$(".box-produto");

			// Iterate through each product container and extract information
			for (const productContainer of productContainers) {
				const product = {};

				// Check if the product description element exists within the container
				const descProdElement = await productContainer.$(".box-produto__desc-prod");

				if (!descProdElement) {
					console.log("Skipping product without '.box-produto__desc-prod'");
					continue; // Skip this product and continue to the next one
				}

				// Extract product name
				product.name = await descProdElement.evaluate((element) => element.textContent.trim());

				// Wait for the image to be present (indicates it's ready for scraping)
				await page.waitForSelector(".box-produto__content-img img[data-src]");
				// Extract the image URL from data-src
				product.imageUrl = await productContainer.$eval(".box-produto__content-img img[data-src]", (img) => img.getAttribute("data-src"));

				// Extract product link
				product.productLink = await productContainer.$eval(".box-produto__content-img.p-relative a", (a) => a.getAttribute("href"));

				// Check if the product is available (contains the "Produto indisponível" message)
				const isAvailable = await productContainer.$(".box-produto__indisponivel i");
				if (isAvailable) {
					console.log(`${product.name} sem estoque`);
					product.price = null; // Set price to null or any other value to indicate unavailability
				} else {
					// Extract price (combine the two parts)
					const priceWholeSelector = ".box-produto__preco";

					try {
						// Extract the price text
						const priceText = await productContainer.$eval(".box-produto__preco", (span) => span.textContent.trim());

						// Extract the numerical part of the price (excluding 'R$' and ',' characters)
						const numericalPrice = parseFloat(priceText.replace("R$", "").replace(",", "."));

						// Combine whole and decimal parts to get the complete price
						product.price = parseFloat(`${numericalPrice}`);
					} catch (error) {
						console.error("Error extracting price:", error.message);
						product.price = null; // Handle the case where the price couldn't be extracted
					}
				}

				// Add the product to the array
				products.push(product);
			}

			return products;
		};

		// Call the function to extract product information
		const productsInCategory = await extractProductInfo();

		// Add the products from this category to the global extractedProducts array
		extractedProducts = extractedProducts.concat(productsInCategory);

		// Log the accumulated extracted product information
		console.log("\nTotal products found: ", extractedProducts.length);
	} catch (error) {
		console.error("Error while scraping:", error.message);
		// Continue to the next category URL if there was an error
	}
}

function addProductDetails(products) {
	let updatedHourVar = getDate().dateHour;
	let updatedDateVar = getDate().dateDDMMYY;

	return products.map((product) => ({
		...product,
		mercado: "Angeloni",
		updatedHour: updatedHourVar,
		updatedDate: updatedDateVar,
	}));
}

//main function loop
(async () => {
  const { browser, page } = await setupBrowser(); //starts browser

  // Loop through the category URLs and run the scraping function for each URL
  for (const categoryURL of categoriesURLs) {
    console.log("\n\nStarting scraping for category: ", categoryURL);
    await scrapeCategory(categoryURL, page);
  }
  // Log the accumulated extracted product information
  console.log("\nTotal found before removing duplicates: ", extractedProducts.length);

  // Remove duplicates from the extractedProducts array
  await removeDuplicates();

  // Log the accumulated extracted product information after removing duplicates
  console.log(extractedProducts);
  console.log("\nTotal products after removing duplicates: ", extractedProducts.length);

  // Close the browser after all categories have been scraped
  await browser.close();

  // Add the "mercado" property to each product
  extractedProducts = addProductDetails(extractedProducts);

})();