const btn = document.querySelector(".clickthis");

export function setLogOutClickListener() {
  btn.addEventListener("click", logOut);
  function logOut(event) {
    localStorage.clear();
  }
}
setLogOutClickListener();
