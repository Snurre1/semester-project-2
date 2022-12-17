import * as listeners from "./handlers/index.mjs";
import * as templates from "./api/templates/index.mjs";
import * as listingmethods from "./api/listings/index.mjs";
import { renderListingsTemplates } from "./api/templates/index.mjs";

const path = location.pathname;
if (path === "/html/frontpage/index.html") {
  listeners.setGetListingsListener();
} else if (path === "/html/register/index.html") {
  listeners.setRegisterFormListener();
} else if (path === "/html/login/index.html") {
  listeners.setLoginFormListener();
} else if (path === "/html/validfrontpage/index.html") {
  listeners.setGetProfileListener();
} else if (path === "/html/listings/index.html") {
  async function testTemplate() {
    const listings = await listingmethods.getListings();
    const container = document.querySelector("#listings");
    renderListingsTemplates(listings, container);
  }
  testTemplate();
} else if (path === "/html/listings/listing.html") {
  listeners.setCreateListingListener();
} else if (path === "/html/updateavatar/index.html") {
  listeners.setUpdateProfileListener();
} else if (path === "/html/listings/viewlisting.html") {
  listeners.hello();
}
