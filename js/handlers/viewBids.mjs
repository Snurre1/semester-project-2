import { authFetch } from "../api/authFetch.mjs";
import { API_LISTINGS_URL } from "../api/constants.mjs";
const container = document.querySelector(".viewBids");
const url = new URL(location.href);
const id = url.searchParams.get("id");
export async function helloBids() {
  try {
    const API_ID = `${API_LISTINGS_URL}/${id}?_seller=true&_bids=true`;
    const response = await authFetch(API_ID);
    const result = await response.json();
    const loopIT = result.bids;
    const newArray = loopIT.sort((a, b) => a.amount - b.amount);
    const reverseArray = newArray.reverse();
    container.innerHTML = `<div class="container text-center">
            <a
              href="/html/listings/index.html?id=${result.id}"
              class="btn btn-primary m-2"
            >
              Back
            </a>
          </div>`;
    for (let i = 0; i < reverseArray.length; i++) {
      container.innerHTML += `<div class="row border bg-light border-dark m-5 p-4">
                                <div class="container text-center">
                                  <div class="container"><h4>bidderName: ${reverseArray[i].bidderName}</h4></div>
                                  <div class="container"><p>Amount of bid:${reverseArray[i].amount}</p></div>
                                  <div class="container"><p>When bid where made: ${reverseArray[i].created}</p></div>
                                  
                                </div>                     
                              </div>`;
    }
  } catch (error) {
    container.innerHTML = `<div><p>Something went wrong, try again</p></div>`;
  }
}
