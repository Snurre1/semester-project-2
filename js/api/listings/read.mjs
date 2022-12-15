import { API_LISTINGS_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

export async function getListings() {
  const response = await authFetch(API_LISTINGS_URL);
  return await response.json();
}

export async function getListing(id) {
  if (!id) {
    alert("This requires an ID");
  }
  const API_ID = `${API_LISTINGS_URL}/${id}`;
  const response = await authFetch(API_ID);
  return await response.json();
}
