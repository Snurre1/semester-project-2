import { setGetListingsListener } from "./handlers/frontpage.mjs";
import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { setGetProfileListener } from "./handlers/validfrontpage.mjs";
import * as templates from "./api/templates/index.mjs";
import * as listingmethods from "./api/listings/index.mjs";
import { renderListingsTemplates } from "./api/templates/index.mjs";
const path = location.pathname;
if (path === "/html/frontpage/index.html") {
  setGetListingsListener();
} else if (path === "/html/register/index.html") {
  setRegisterFormListener();
} else if (path === "/html/login/index.html") {
  setLoginFormListener();
} else if (path === "/html/validfrontpage/index.html") {
  setGetProfileListener();
} else if (path === "/html/listings/index.html") {
  async function testTemplate() {
    const listings = await listingmethods.getListings();
    const container = document.querySelector("#listings");
    renderListingsTemplates(listings, container);
  }
  testTemplate();
}
