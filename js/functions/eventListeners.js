    
    const returnBtn = document.querySelector(".back-paragraph"); 
    const returnBtnCart = document.querySelector(".back-paragraph"); 


const url = window.location.href;

// Check if the URL includes "cart"
if (url.includes("cart")) {
    // Add a click event listener to an element with the ID "returnBtn"
    returnBtnCart.addEventListener("click", function() {
        // Navigate back in the browser history
        window.history.back();
    });
}

// Check if the URL includes "product-page"
if (url.includes("product-page")) {
    // Add a click event listener to an element with the ID "returnBtnCart"
    returnBtn.addEventListener("click", function() {
        // Navigate back in the browser history
        window.history.back();
    });
}
