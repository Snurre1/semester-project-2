const btn = document.querySelector(".loginbtn");
const successOne = document.querySelector(".loginTarget1");
const successTwo = document.querySelector(".loginTarget2");
export function setButtonClickListener() {
  btn.addEventListener("click", loginSuccess);
  function loginSuccess(event) {
    successOne.hidden = false;
    successTwo.hidden = false;
  }
}
setButtonClickListener();
