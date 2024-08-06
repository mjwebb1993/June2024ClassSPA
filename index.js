import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
      ${header(state)}
      ${nav(store.nav)}
      ${main(state)}
      ${footer()}
    `;
  console.log("it's updating");
  router.updatePageLinks();
  console.log("it's updated");
}

// add menu toggle to bars icon in nav bar
// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });

router
  .on({
    "/": () => render(),
    // Use object destructuring assignment to store the data and (query)params from the Navigo match parameter
    // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    // This reduces the number of checks that need to be performed
    ":view": match => {
      // Change the :view data element to camel case and remove any dashes (support for multi-word views)
      const view = match?.data?.view ? camelCase(match.data.view) : "home";
      // Determine if the view name key exists in the store object
      if (view in store) {
        render(store[view]);
      } else {
        render(store.viewNotFound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
