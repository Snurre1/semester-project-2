import { API_LISTINGS_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const method = "post";
const url = new URL(location.href);
const id = url.searchParams.get("id");
export async function setMakeBidListener() {
  const form = document.querySelector("#makeBid");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    const NEW_API = `${API_LISTINGS_URL}/${id}/bids?_seller=true&_bids=true`;
    const response = authFetch(NEW_API, {
      method,
      body: JSON.stringify(data),
    });

    console.log(response);
  });
}

setMakeBidListener();
