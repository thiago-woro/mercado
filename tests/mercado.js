/* 
//angeloni:  1
// Use the CSS selector to get all elements with the specified class
const priceElements = document.querySelectorAll('.box-produto__preco__valor');

// Iterate over the elements and print their text content
priceElements.forEach((element, index) => {
  console.log(`Price ${index + 1}: ${element.textContent}`);
});



//atacadão:  2   //funciona OK
const productElements = document.querySelectorAll('a[title="Ver detalhes do produto"]');
const products = [];

// Iterate over the product card elements
productElements.forEach((element, index) => {
  // Extract the image URL
 // const imageURL = element.querySelector('.product-box__img img').getAttribute('src');

  // Extract the product name
  const productName = element.querySelector('.product-box__name').textContent.trim();

  // Extract the price
  const price = element.querySelector('.product-box__price--number').textContent.trim();

  // Create an object to store the product information
  const product = {
    //imageURL,
    productName,
    price,
  };

  // Add the product object to the array
  products.push(product);
});

// Output the array of product data
console.log(products);













//Giassi  ok   3
//https://www.giassi.com.br/bebidas-alcoolicas/cervejas

const priceElements3 = document.querySelectorAll('.giassi-apps-custom-0-x-priceUnit');

// Iterate over the elements and print their text content
priceElements3.forEach((element, index) => {
  console.log(`Price ${index + 1}: ${element.textContent}`);
});


//<p class="giassi-apps-custom-0-x-priceUnit">R$&nbsp;3,98</p>




//COOPER  4
//   <span class="product-variation__final-price"> R$ 14,49 </span>
const priceElements3 = document.querySelectorAll('.product-variation__final-price');

// Iterate over the elements and print their text content
priceElements3.forEach((element, index) => {
  console.log(`Price ${index + 1}: ${element.textContent}`);
});



//bistek  5
//  <span class="price">R$&nbsp;30,90</span>
const priceElements3 = document.querySelectorAll('.price');

// Iterate over the elements and print their text content
priceElements3.forEach((element, index) => {
  console.log(`Price ${index + 1}: ${element.textContent}`);
});


//fort atacadista  6
//https://www.deliveryfort.com.br/bebidas/cervejas

// class="shelf-item__best-price
          
const priceElements3 = document.querySelectorAll('.shelf-item__best-price');

// Iterate over the elements and print their text content
priceElements3.forEach((element, index) => {
  console.log(`Price ${index + 1}: ${element.textContent}`);
}); */