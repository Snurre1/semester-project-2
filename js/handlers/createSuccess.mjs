const btn = document.querySelector(".successbtn");
const successOne = document.querySelector(".successTarget1");
const successTwo = document.querySelector(".successTarget2");
export function setButtonClickListener() {
  btn.addEventListener("click", success);
  function success(event) {
    successOne.hidden = false;
    successTwo.hidden = false;
  }
}
setButtonClickListener();
