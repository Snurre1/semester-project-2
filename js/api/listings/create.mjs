import { API_LISTINGS_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const method = "post";

export async function createListing(postData) {
  const response = await authFetch(API_LISTINGS_URL, {
    method,
    body: JSON.stringify(postData),
  });
  return await response.json();
}
