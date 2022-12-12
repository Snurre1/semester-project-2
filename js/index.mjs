import { setGetListingsListener } from "./handlers/frontpage.mjs";
import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { setGetProfileListener } from "./handlers/validfrontpage.mjs";

const path = location.pathname;
if (path === "/html/frontpage/index.html") {
  setGetListingsListener();
} else if (path === "/html/register/index.html") {
  setRegisterFormListener();
} else if (path === "/html/login/index.html") {
  setLoginFormListener();
} else if (path === "/html/validfrontpage/index.html") {
  setGetProfileListener();
}
