const puppeteer = require("puppeteer");
const {getDate} = require("./getdate.js");
const {connectToDatabase} = require("./database.js");

const {compareAndSaveToDatabase} = require("./saveToDatabase.js");
const {autoScroll} = require("./autoscroll.js");

//let categoriesURLs = ["https://www.angeloni.com.br/super/c/congelados/_/N-ha9qgj"];  //testing only

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

let extractedProducts = []; // Global variable to store extracted products

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

async function setupBrowser() {
	const browser = await puppeteer.launch({headless: false, slowMo: 0, devtools: false});
	const page = await browser.newPage();

	// Emulate a browser-like environment
	await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36");
	await page.setViewport({width: 1303, height: 980});
	page.setDefaultNavigationTimeout(60000);

	// Add event listeners to log responses and request failures
	page.on("response", (response) => {
		// console.log(`Response URL: ${response.url()}`);
		// console.log(`Response Status: ${response.status()}`);
	});

	page.on("requestfailed", (request) => {
		// console.log(`Request failed: ${request.url()}`);
	});

	return {browser, page};
}

async function removeDuplicates() {
	extractedProducts = extractedProducts.filter((product, index, self) => index === self.findIndex((p) => p.name === product.name));
}

async function scrapeCategory(categoryURL, page) {
	try {
		console.log("\nnavigating...");
		await page.goto(categoryURL, {waitUntil: "domcontentloaded", timeout: 50000});

		console.log("network idle");

		// Define the selector for each product on the page
		const productSelector = "section.vtex-product-summary-2-x-container";

		// Wait for the product selector to become available on the page
		await page.waitForSelector(productSelector);
		console.log("\n found selector...");

		console.log("\nscrolling...");
		await autoScroll(page); // If you need to scroll down to load more products

		const products = await page.$$eval(productSelector, (productElements) => {
			return productElements.map((productElement) => {
				const titleElement = productElement.querySelector(".vtex-product-summary-2-x-productBrand");
				const priceElement = productElement.querySelector(".vtex-product-price-1-x-currencyInteger");
				const fractionElement = productElement.querySelector(".vtex-product-price-1-x-currencyFraction");
				const anchorElement = productElement.querySelector("a");
				const imgElement = productElement.querySelector("img");

				const name = titleElement ? titleElement.textContent.trim() : "N/A";
				const price = priceElement && fractionElement ? `${priceElement.textContent.trim()},${fractionElement.textContent.trim()}` : "N/A";
				const productLink = anchorElement ? anchorElement.getAttribute("href") : "N/A";
				const imageUrl = imgElement ? imgElement.getAttribute("src") : "N/A";

				return {name, price, productLink, imageUrl};
			});
		});

		// Add the products to the extractedProducts array
		extractedProducts.push(...products);

		//console.log("Extracted products:", products);
		console.log("Extracted products:", products.length);

	} catch (error) {
		console.error("Error scraping category:", error);
	}
}

//main function loop
(async () => {
	const {browser, page} = await setupBrowser(); //starts browser

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
	console.log("\nTotal products after removing duplicates: ", extractedProducts.length);

	// Close the browser after all categories have been scraped
	await browser.close();

	// Add the "mercado" property to each product
	extractedProducts = addProductDetails(extractedProducts);
	//console.log(extractedProducts);
	console.log("\n FINISHED SCRAPING OK ✅");

	console.log("\n preparing upload... \n \n");

	// Limit the number of products to be uploaded (13 products) and call compareAndSaveToDatabase
	if (extractedProducts.length > 0) {
		//const productsToUpload = extractedProducts.slice(0, 5000);
		const i = 1;

		const client = await connectToDatabase();
		compareAndSaveToDatabase(extractedProducts, client, "Angeloni", 5000);
		console.log("\n\n FINISHED ✅✅✅ \n \n");

	}
    process.exit(0);

})();
