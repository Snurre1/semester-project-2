import { API_REGISTER_URL } from "../api/constants.mjs";
const method = "post";

export async function register(profile) {
  const body = JSON.stringify(profile);
  const response = await fetch(API_REGISTER_URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });
  const result = await response.json();
  console.log(result);
}
