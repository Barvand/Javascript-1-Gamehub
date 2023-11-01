import { fetchApi } from "../fetch.js";


const queryString = document.location.search;

const params = new URLSearchParams(queryString); 
const id = params.get("id")
const url = "https://api.noroff.dev/api/v1/gamehub/" + id; 

const response = await fetch(url);
const details = await response.json(); 


const cartItem = document.querySelector(".Cart-item") 

function renderCart() { 
cartItem.innerHTML += ""; 
displayCartItem()
renderTitle()
renderPrice()
renderIconPlusAndMinus()
renderInput()

}

function displayCartItem() { 
const renderGameImg = document.createElement("img"); 
renderGameImg.classList.add("cart-image")
renderGameImg.src = details.image; 
renderGameImg.alt = details.title; 
cartItem.appendChild(renderGameImg);
return renderGameImg
}


function renderTitle() { 
    const renderGameTitle = document.createElement("h2"); 
    renderGameTitle.classList.add("cart-title"); 
    renderGameTitle.innerText = details.title; 
    cartItem.appendChild(renderGameTitle)
    return renderGameTitle
}

function renderPrice() { 
    const renderGamePrice = document.createElement("p"); 
    renderGamePrice.classList.add("price-cart"); 
    renderGamePrice.innerText = "$" + details.price; 
    cartItem.appendChild(renderGamePrice)
    return renderGamePrice
}

function renderIconPlusAndMinus() {
    // Create a div element
    const iconDiv = document.createElement("div");

    // Create the plus icon
    const plusIcon = document.createElement("i");
    plusIcon.classList.add("fa-solid", "fa-plus");
    
    // Create the minus icon
    const minusIcon = document.createElement("i");
    minusIcon.classList.add("fa-solid", "fa-minus");

    // Append both icons to the div
    iconDiv.appendChild(plusIcon);
    iconDiv.appendChild(minusIcon);

    // Append the div to the cartItem
    cartItem.appendChild(iconDiv);

    return iconDiv;
}

function renderInput () { 
    const quantityInput = document.createElement("input"); 
    quantityInput.id = "product-quantity";
    quantityInput.type = "tel";
    quantityInput.value = "1"; 
    quantityInput.innerHTML = "quantity";
    cartItem.appendChild(quantityInput)
    return quantityInput
}



renderCart()

