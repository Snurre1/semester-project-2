const credit = document.querySelector(".credits");
const helloUser = document.querySelector(".targetthis");
export async function setGetProfileListener() {
  const user = JSON.parse(localStorage.getItem("profile"));

  helloUser.innerHTML = `Hello ${user.name}! Good luck on your auctions!`;
  credit.innerHTML = `Credits: ${user.credits}`;
}
