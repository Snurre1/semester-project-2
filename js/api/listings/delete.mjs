import { API_LISTINGS_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const method = "delete";

export async function removeListings(id) {
  if (!id) {
    alert("remove reqiures an ID");
  }
  const deleteThis = `${API_LISTINGS_URL}/${id}`;
  const response = await authFetch(deleteThis, {
    method,
  });
  return await response.json();
}
