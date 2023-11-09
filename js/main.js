import { fetchApi } from "/js/fetch.js";
import { renderProductPage } from "./functions/games.js";
import { renderHTML } from "/js/functions/index.js";
import { displayContent } from "./functions/product-page.js";
import { randomImage } from "./functions/index.js";
import { updatePrice } from "./functions/cart.js";
import { renderHtmlCart } from "./functions/cart.js";
import { CartReturnButton, ProductPageReturnButton } from "./functions/eventListeners.js";



async function displayCorrectFunction() {
    const data = await fetchApi();
    const url = window.location.href;

    if (!url.includes("games-page") && !url.includes("product-page") && !url.includes("cart")) {
        renderHTML(data);
        randomImage(data);
        setInterval(() => randomImage(data), 4000);
    } else if (url.includes("games-page")) {
        renderProductPage(data);
    } else if (url.includes("product-page")) {
        displayContent();
    } else if (url.includes("cart")) {
        renderHtmlCart(data);
        updatePrice(); 
    }}

displayCorrectFunction()



// return BTN for product page and cart
CartReturnButton()
ProductPageReturnButton()