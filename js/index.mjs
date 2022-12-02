import { API_LISTINGS_URL } from "./api/constants.mjs";
const container = document.querySelector(".frontpageAPI");
const input = document.getElementById("targetme");

async function getListings() {
  const response = await fetch(API_LISTINGS_URL);
  const data = await response.json();

  input.addEventListener("keyup", handleNameControlInput);
  function handleNameControlInput(event) {
    const inputValue = event.currentTarget.value.toLowerCase();
    const newArray = data.filter((item) => {
      if (item.title.toLowerCase().startsWith(inputValue)) {
        return true;
      }
    });
    container.innerHTML = "";
    for (let i = 0; i < newArray.length; i++) {
      container.innerHTML += `<div class="row border border-dark m-5 p-4">
                            <div class="container bg-light text-center">
                              <div class="container"><h4>Title: ${data[i].title}</h4></div>
                              <div class="container w-50"><img class="img-thumbnail" src="${data[i].media}"alt="image from ${data[i].title}"></img></div>
                              <div class="container"><p>Description of the item: ${data[i].description}</p></div>
                            </div>                           
                              </div>`;
    }

    console.log(newArray);
  }
}
getListings();
