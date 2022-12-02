import { API_LISTINGS_URL } from "./api/constants.mjs";

async function getListings() {
  const response = await fetch(API_LISTINGS_URL);
  const data = await response.json();
  console.log(data);
}
getListings();
