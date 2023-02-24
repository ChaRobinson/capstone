import { Footer, Header, Main, Nav } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
const router = new Navigo("/");

// query selector not seletor

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  router.updatePageLinks();
}

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
