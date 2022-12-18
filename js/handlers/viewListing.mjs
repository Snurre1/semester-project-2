import { authFetch } from "../api/authFetch.mjs";
import { API_LISTINGS_URL } from "../api/constants.mjs";
const container = document.querySelector(".viewListing");
const url = new URL(location.href);
const id = url.searchParams.get("id");
export async function hello() {
  try {
    const API_ID = `${API_LISTINGS_URL}/${id}`;
    const response = await authFetch(API_ID);
    const result = await response.json();
    container.innerHTML += `<div class="row border bg-light border-dark m-5 p-4">
                                <div class="container text-center">
                                  <div class="container"><h4>Title: ${result.title}</h4></div>
                                  <div class="container w-50"><img class="img-thumbnail" src="${result.media}"alt="image from ${result.title}"></img></div>
                                  <div class="container"><p>Description of the item: ${result.description}</p></div>
                                  <div class="container"><p>Amount of bids: ${result._count.bids}</p></div>
                                  <div class="container"><p>Deadline: ${result.endsAt}</p></div>
                                  <div class ="container"><a href="/html/listings/index.html" class="btn btn-primary m-2">Back</a><a href="/html/bids/viewbids.html?id=${result.id}" class="btn btn-primary m-2">View bids</a></div>
                                </div>                     
                              </div>`;
  } catch (error) {
    container.innerHTML = `<div><p>Something went wrong, try again</p></div>`;
  }
}
