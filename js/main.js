import { fetchApi } from "/js/fetch.js";
import { renderProductPage } from "./functions/games.js";
import { renderHTML } from "/js/functions/index.js";
import { displayContent } from "./functions/product-page.js";
import { randomImage } from "./functions/index.js";


let data = await fetchApi(); 

// render html on index page 




function displayCorrectFunction() {
    const url = window.location.href;

    if (url.includes("index")) {
        renderHTML(data);
        setInterval(() => randomImage(data), 4000)
    } else if (url.includes("games-page")) {
        renderProductPage(data)
    } else if (url.includes("product-page")) {
        displayContent();
    } else {
        console.log("URL doesn't match any condition");
    }
}

displayCorrectFunction(data)


// cart button function
