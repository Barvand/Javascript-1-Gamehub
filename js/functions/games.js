import { fetchApi } from "../fetch.js";
import { getExistingGames } from "./utils.js";

const data = await fetchApi();


const resultsContainer = document.querySelector(".container-productpage")

export async function renderProductPage(data) { 
    resultsContainer.innerHTML = ""; 

    for(let i = 0; i <data.length; i++) { 
     const product = data[i];
    

     const elementDiv = document.createElement("div"); 
     elementDiv.classList.add("item-product-page"); 
    //  elementDiv.href = "product-page.html?id=" + product.id; 
     resultsContainer.appendChild(elementDiv);

     const imageElement = document.createElement("img"); 
     imageElement.classList.add("Game-cover-image"); 
     imageElement.src = product.image; 
     imageElement.alt = product.title; 
     elementDiv.appendChild(imageElement);
    
    const element = document.createElement("h3"); 
    element.classList.add("game-title"); 
    element.innerText = product.title;
    elementDiv.appendChild(element);

    const elementP = document.createElement("p"); 
    elementP.classList.add("game-price"); 
    elementP.innerText = product.price;
    elementDiv.appendChild(elementP);

    
    function productOnSale(data) {  
        const oldPrice = Math.round(data[i].discountedPrice + data[i].price);
        const oldPriceSpan = document.createElement("span");
        oldPriceSpan.classList.add("game-old-price");
        oldPriceSpan.innerText = "before $" + oldPrice;

        if (data[i].onSale === true) {
            elementP.innerText = "On Sale: $" + product.price + " ";
            elementP.appendChild(oldPriceSpan)
        } else {
            elementP.innerText = "Price: $" + product.price;
        }
        elementDiv.appendChild(elementP);
    }

    productOnSale(data)
    
    const anchorBtn = document.createElement("a")
    anchorBtn.classList.add("add-to-cart-btn");
    anchorBtn.href = "product-page.html?id=" + product.id; 
    anchorBtn.innerText = `add to cart`; 
    elementDiv.appendChild(anchorBtn); 
    
    const anchorBtnCart = document.createElement("a")
    anchorBtnCart.classList.add("add-to-cart-btn");
    anchorBtnCart.href = "product-page.html?id=" + product.id; 
    anchorBtnCart.innerText = `Product page`; 
    anchorBtnCart.setAttribute("data-id", product.id);
    anchorBtnCart.setAttribute("data-title", product.title); 
    elementDiv.appendChild(anchorBtnCart); 

    function cartBtn() { 
        anchorBtnCart.addEventListener("click", handleClick); 

    }
    cartBtn()
}}


function handleClick() { 
    const id = this.dataset.id;
    const title = this.dataset.title; 
  
    const currentGames = getExistingGames(); 

    const gameExists = currentGames.find(function(game) { 
        return game.id === id; 
    }); 

if (!gameExists) { 
    const game = {id: id, title: title}; 
    currentGames.push(game)
    saveGames(currentGames)
} else { 
    const newGames = currentGames.filter(game => game.id !== id);
    saveGames(newGames); 
}}


function saveGames(games) { 
    localStorage.setItem("games", JSON.stringify(games)); 

}




//     for(let i = 0; i <data.length; i++) {

//         let price = data[i].price;
//         let discountPrice = data[i].discountedPrice; 
//         const oldPrice = (Math.round(data[i].price + data[i].discountedPrice)); 


//     if (data[i].onSale === true) {
//         resultsContainer.innerHTML += `<div><img class="Game-cover-img" src=${data[i].image}><img><p>${data[i].title}</p> <p> <span class="new-price"> Was ${oldPrice} </span> Now ${data[i].price} </p> <a class="add-to-cart-btn" href="product-page.html?id=${data[i].id}"> View product </a> <a class="add-to-cart-btn" href="product-page.html?id=${data[i].id}"> add to cart </a > </div>`;
//     } else {
//     resultsContainer.innerHTML += `<div><img class="Game-cover-img" src=${data[i].image}><img><p>${data[i].title}</p> <p>${data[i].price}</p> <a class="add-to-cart-btn" href="product-page.html?id=${data[i].id}"> View product </a> <a class="add-to-cart-btn" href="product-page.html?id=${data[i].id}"> add to cart </a > </div>`;
//     }

// }}; 
