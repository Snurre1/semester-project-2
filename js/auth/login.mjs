import * as storage from "../api/storage/index.mjs";
import { API_LOGIN_URL } from "../api/constants.mjs";
const method = "post";

export async function login(profile) {
  const body = JSON.stringify(profile);
  const response = await fetch(API_LOGIN_URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });
  const { accessToken, ...user } = await response.json();

  storage.save("token", accessToken);

  storage.save("profile", user);
}
