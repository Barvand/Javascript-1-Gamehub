    
    const returnBtn = document.querySelector(".back-paragraph"); 

    returnBtn.addEventListener("click", function() { 
        window.history.back(); 
    }); 


    // let count = 1;

    // function incrementCounter() {
    //     count += 1;
    //     updateCounter();
    // }
    
    // function decrementCounter() {
    //     if (count > 1) {
    //         count -= 1;
    //         updateCounter();
    //     }
    // }
    
    // function updateCounter() {
    //     const quantity = document.querySelector("#product-quantity");
    //     quantity.textContent = count;
    // }
    
    // document.addEventListener("DOMContentLoaded", function () {
    //     const incrementButton = document.getElementById("increment-button");
    //     const decrementButton = document.getElementById("decrement-button");
    
    //     incrementButton.addEventListener("click", incrementCounter);
    //     decrementButton.addEventListener("click", decrementCounter);
    
    //     updateCounter(); // Initialize the display with the initial count (1 in this case)
    // });


