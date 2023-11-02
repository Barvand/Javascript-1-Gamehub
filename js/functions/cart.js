import { fetchApi } from "../fetch.js";


const queryString = document.location.search;

const params = new URLSearchParams(queryString); 
const id = params.get("id")
const url = "https://api.noroff.dev/api/v1/gamehub/" + id; 

const response = await fetch(url);
const details = await response.json(); 

const cartItem = document.querySelector(".Cart-item") 
const totalContainer = document.querySelector(".total-container")


function renderCart() { 
  cartItem.innerHTML = ""; 
  renderHtmlCart();

if (!id) {
  totalContainer.innerHTML = "";  
  cartItem.innerHTML = `<h1> Cart is empty, get back to shopping! </h1> `; 
  
}
}

renderCart()

function renderHtmlCart() {

    const cartImage = document.createElement("img");
    cartImage.classList.add("cart-image")
    cartImage.src = details.image;
    cartImage.alt = details.title;
    cartItem.appendChild(cartImage)
  
    const titleElement = document.createElement("h2")
    titleElement .classList.add("cart-title"); 
    titleElement .innerText = details.title; 
    cartItem.appendChild(titleElement)
 
    const priceElement = document.createElement("p");
    priceElement.classList.add("price-cart"); 
    priceElement.innerText = "$" + details.price;
    cartItem.appendChild(priceElement) 

    const iconDiv = document.createElement("div"); 
    iconDiv.classList.add("quantity");
    cartItem.appendChild(iconDiv); 

    const iconElementMinus = document.createElement("i"); 
    iconElementMinus.classList.add("fa-solid", "fa-minus");
    iconDiv.appendChild(iconElementMinus)

    const inputElement = document.createElement("input");
    inputElement.id = ("product-quantity"); 
    inputElement.type = "tel"; 
    inputElement.value = "1"; 
    inputElement.readOnly = true;
    
    iconDiv.appendChild(inputElement); 

    const iconElementPlus = document.createElement("i"); 
    iconElementPlus.classList.add("fa-solid", "fa-plus");
    iconDiv.appendChild(iconElementPlus)

    const removeIcon = document.createElement("i"); 
    removeIcon.classList.add("fa-solid", "fa-xl", "fa-x");
    cartItem.appendChild(removeIcon)


    
}

const parentContainer = document.querySelector(".container-item-price")

// Select the existing input element by its ID
const inputElement = document.querySelector("#product-quantity");

// Select the "fa-minus" and "fa-plus" elements
const iconElementMinus = document.querySelector(".fa-minus");
const iconElementPlus = document.querySelector(".fa-plus");

let counter = parseInt(inputElement.value); // Parse the initial value as an integer

iconElementMinus.addEventListener("click", () => {
  // Decrement the counter
  counter--;

  // Update the input field's value with the new counter value, including a "-"
  inputElement.value = counter.toString();
});

iconElementPlus.addEventListener("click", () => {
  // Increment the counter
  counter++;

  // Update the input field's value with the new counter value, including a "-"
  inputElement.value = counter.toString();


  if (confirm("This will remove the game from your cart. Are you sure?")) {
    const containerItemPrice = iconElementMinus.closest(".container-item-price");

    containerItemPrice.innerHTML = `<h1 class="empty-cart-h1"> Cart is empty, get back to shopping! </h1> 
                                    <a class="btn cart-shop" href="index.html"> Homepage </a>`

    containerItemPrice.classList.add("empty-cart");

};
})

const removeOnClick = document.querySelector(".fa-xl")

removeOnClick.addEventListener("click", () => {

  if (confirm("This will remove the game from your cart. Are you sure?")) {
    const containerItemPrice = iconElementMinus.closest(".container-item-price");

    containerItemPrice.innerHTML = `<h1 class="empty-cart-h1"> Cart is empty, get back to shopping! </h1> 
                                    <a class="btn cart-shop" href="index.html"> Homepage </a>`

    containerItemPrice.classList.add("empty-cart");

};


})



