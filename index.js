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
  afterRender(state); //DOM listens after this function is declared later. Will mess up if I use now
  router.updatePageLinks();
}

function afterRender(state) {
  if (state.view === "Home") {
    L.mapquest.key = process.env.MAP_KEY;

    // 'map' refers to a <div> element with the ID map
    const map = L.mapquest.map("map", {
      center: [37.7749, -122.4194],
      layers: L.mapquest.tileLayer("map"),
      zoom: 12
    });

    var directions = L.mapquest.directions();

    directions.route({
      start: "Redlands, CA",
      end: "San Bernardino, CA"
    });

    L.marker([34.1064, -117.3703], {
      icon: L.mapquest.icons.marker({
        primaryColor: "#22407F",
        secondaryColor: "#3B5998",
        shadow: true,
        size: "md",
        symbol: "C"
      })
    }).addTo(map);
    map.addControl(L.mapquest.control());
  }
}

// Add an event listener here.  After render should be last or nearly last at end of document
router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "About";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // case "home":
      // axios.get().then(response => { done(); })
      // }

      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "About";
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
