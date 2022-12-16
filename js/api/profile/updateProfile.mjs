import { API_PROFILE_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const method = "put";

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }

  const updateProfileURL = `${API_PROFILE_URL}/${profileData.name}/media`;
  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });
  return await response.json();
}
