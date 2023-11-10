const url = window.location.href;

export function CartReturnButton() {
  if (url.includes("cart")) {
    const returnBtnCart = document.querySelector(".back-paragraph");
    returnBtnCart.addEventListener("click", function () {
      window.history.back();
    });
  }
}

export function ProductPageReturnButton() {
  if (url.includes("product-page")) {
    const returnBtn = document.querySelector(".back-paragraph");
    returnBtn.addEventListener("click", function () {
      window.history.back();
    });
  }
}
