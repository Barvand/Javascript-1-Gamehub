import { fetchApi } from "../fetch.js";
import { handleClick } from "./games.js";


let productContainer = document.querySelector(".gaming-container");
const queryString = document.location.search;

const params = new URLSearchParams(queryString); 
const id = params.get("id")
const url = "https://api.noroff.dev/api/v1/gamehub/" + id; 

const response = await fetch(url);
const details = await response.json(); 

export async function displayContent() {
   
   
    productContainer.innerHTML = ""; 

        // createProductPage(details)
        createImage(details)
        createTitle(details)
        createDescription(details)
        createPrice(details)
        
        
        
        


     function createImage(details) {
        const imageElement = document.createElement("img");
        imageElement.classList.add("product-image"); 
        imageElement.src = details.image; 
        imageElement.alt = details.title; 
        productContainer.appendChild(imageElement);
        return imageElement; 
      }
    
       function createTitle(details) {
            const element = document.createElement("h1");
            element.classList.add("product-title"); 
            element.innerText = details.title; 
            productContainer.appendChild(element);
            return element; 
        }
    
         function createDescription(details) {
            const element = document.createElement("p");
            element.classList.add("product-description"); 
            element.innerText = details.description; 
            productContainer.appendChild(element);
            return element; 
        }

        function createPrice(details) {
            const elementPrice = document.createElement("p");
            elementPrice.classList.add("product-price"); 
            elementPrice.innerText = details.price; 
            productContainer.appendChild(elementPrice);
            return elementPrice; 
        }

        
        const anchorBtn = document.createElement("a")
         anchorBtn.classList.add("add-to-cart-btn");
         anchorBtn.href = "cart.html"; 
         anchorBtn.innerText = `add to cart`; 
         anchorBtn.setAttribute("data-id", details.id);
         anchorBtn.setAttribute("data-title", details.title);
         anchorBtn.setAttribute("data-image", details.image);  
         anchorBtn.setAttribute("data-price", details.price); 
         productContainer.appendChild(anchorBtn); 

         function cartBtn() { 
            anchorBtn.addEventListener("click", handleClick); 
    
        }
        cartBtn()
        



    }



    

    
