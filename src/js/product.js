import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";


const dataSource = new ProductData("tents");
const productID = getParam("product");

function addProductToCart(product) {
  // Retrieve existing cart from localStorage
  let cart = JSON.parse(localStorage.getItem("so-cart")) || [];

  // Add new product to the cart
  cart.push(product);

  // Save updated cart back to localStorage
  setLocalStorage("so-cart", cart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

const product = new ProductDetails(productID, dataSource);
product.init();


// function addProductToCart(product) {
//   // Retrieve existing cart from localStorage
//   let cart = JSON.parse(localStorage.getItem("so-cart")) || [];

//   // Add new product to the cart
//   cart.push(product);

//   // Save updated cart back to localStorage
//   setLocalStorage("so-cart", cart);
// }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
