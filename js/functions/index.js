import { fetchApi } from "../fetch.js";

export const data = await fetchApi();

export const gridContainer = document.querySelector(".grid-item8-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

/// functions index page

export function renderHTML(results) {
  gridContainer.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    gridContainer.innerHTML += `<div class="grid-item item-8"> 
                                           <a href="product-page.html?id=${results[i].id}">
                                           <div class="price-grid-item8">
                                           <h4> ${results[i].title} </h4>
                                            <p class="game-price"> $${results[i].price} </p>
                                            <img src="${results[i].image}" alt="${results[i].title}" class="item8-image"> </a>
                                            </div>`;
  }
}

export function randomImage(results) {
  const imageContainer = document.querySelector(".griditem-1");
  const randomIndex = Math.floor(Math.random() * results.length);
  imageContainer.style.backgroundImage = `url(${results[randomIndex].image})`;
}
