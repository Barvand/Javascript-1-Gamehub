import { data } from "./index.js";
import { getExistingGames } from "./utils.js";


const games = getExistingGames();

export const cartContainer = document.querySelector(".container-item-price");

export function renderHtmlCart() {
  
  
  cartContainer.innerHTML = ""; 
  const totalContainer = document.querySelector(".total-container");


  if (games.length === 0) {
    totalContainer.innerHTML = "";
    cartContainer.innerHTML = "<h1> Cart is empty, get back to shopping!</h1>";
  } else {
    games.forEach((game) => {
      rendercartItem(game);
      
    });
  }

  function rendercartItem(game) { 

  const cartItem = document.createElement("div");
  cartItem.classList.add("Cart-item");

  const cartImage = document.createElement("img");
  cartImage.classList.add("cart-image");
  cartImage.src = game.image;
  cartImage.alt = game.title;
  cartItem.appendChild(cartImage);

  const titleElement = document.createElement("h2");
  titleElement.classList.add("cart-title");
  titleElement.innerText = game.title;
  cartItem.appendChild(titleElement);

  const priceElement = document.createElement("p");
  priceElement.classList.add("price-cart");
  priceElement.innerText = "$" + game.price;
  cartItem.appendChild(priceElement);

  const iconDiv = document.createElement("div");
  iconDiv.classList.add("quantity");
  cartItem.appendChild(iconDiv);

  const iconElementMinus = document.createElement("i");
  iconElementMinus.classList.add("fa-solid", "fa-minus");
  iconDiv.appendChild(iconElementMinus);

  const inputElement = document.createElement("input");
  inputElement.id = ("product-quantity");
  inputElement.type = "tel";
  inputElement.value = "1";
  inputElement.readOnly = true;
  iconDiv.appendChild(inputElement);

  const iconElementPlus = document.createElement("i");
  iconElementPlus.classList.add("fa-solid", "fa-plus");
  iconDiv.appendChild(iconElementPlus);

  const removeIcon = document.createElement("i");
  removeIcon.classList.add("fa-solid", "fa-xl", "fa-x");
  cartItem.appendChild(removeIcon);

  cartContainer.appendChild(cartItem);

  
  removeIcon.addEventListener("click", () => {
    const clickedItem = event.target.closest(".Cart-item"); 

    if (clickedItem) { 
    const itemId = game.id;
    clickedItem.remove(); // Remove the div element from the DOM
    
  
    // Remove the item from localStorage
    const cartItems = JSON.parse(localStorage.getItem("games")) || [];
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("games", JSON.stringify(updatedCart));

    if (updatedCart.length === 0) {
      // The cart is empty, so you can update the page, e.g., display a message or show a "Continue Shopping" button.
      totalContainer.innerHTML = ""; 
      cartContainer.innerHTML = "<h1>Your cart is empty. Continue shopping</h1>";
    }
  }}
  ); 
}} 




export function updatePrice() { 
  const shippingPrice = document.querySelector(".shipping-price");
  const cartPrice = document.querySelector(".update-price");
  const totalPriceContainer = document.querySelector(".update-total-price");
  const games = JSON.parse(localStorage.getItem("games"));

  // Initialize total price
  let totalCartPrice = 0;

  for (let i = 0; i < games.length; i++) { 
    const price = parseFloat(games[i].price);

    // Append individual prices to cartPrice
    cartPrice.innerHTML += `$${price.toFixed(2)}<br>`; // Display each price with 2 decimal places

    // Calculate the total price
    totalCartPrice += price;
  }

  // Calculate the shipping price
  if (totalCartPrice > 50) {
    shippingPrice.innerHTML = "Free";
  } else {
    shippingPrice.innerHTML = "$5"; // You may want to set an appropriate shipping price here.
  }

  // Calculate the total price and convert it to a string for display
  const totalPrice = totalCartPrice + (shippingPrice.innerHTML === "Free" ? 0 : 5); // Adjust the shipping price as needed

  // Display the total price
  totalPriceContainer.innerHTML = `$${totalPrice.toFixed(2)}`; // Display the total price with 2 decimal places
}




