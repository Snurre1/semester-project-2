import { API_LISTINGS_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const method = "put";

export async function updateListing(postData) {
  if (!postData.id) {
    alert("Update requres an ID");
  }
  const updateThis = `${API_LISTINGS_URL}/${postData.id}`;
  const response = await authFetch(updateThis, {
    method,
    body: JSON.stringify(postData),
  });
  return await response.json();
}
