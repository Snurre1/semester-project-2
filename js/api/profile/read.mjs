import { API_PROFILE_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

export async function getProfiles() {
  const response = await authFetch(API_PROFILE_URL);
  return await response.json();
}

export async function getProfile(name) {
  if (!name) {
    throw new Error("requires a name");
  }
  const getProfileURL = `${API_PROFILE_URL}/${name}`;
  const response = await authFetch(getProfileURL);

  return await response.json();
}
