import { Footer, Header, Main, Nav } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo("/");

// query selector not seletor
function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  // afterRender(); DOM listens after this function is declared later. Will mess up if I use now
  router.updatePageLinks();
}

// Add an event listener here.  After render should be last or nearly last at end of document
router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.page)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://www.mapquestapi.com/staticmap/v5/map?locations=New+York,NY||Buffalo,NY||Rochester,NY&size=@2x&key=${process.env.MAP_API_KEY}`
          )
          .then(response => {
            // document.querySelector("#map").innerHTML;
            // // store.Home.map = {};
            store.Home.map = response.data;
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
