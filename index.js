import { Footer, Header, Main, Nav } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

// query selector not selector.  Renders everything in HOME view because that is what im looking at first
function render(state = store.Home) {
  console.log("render");
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  afterRender(state);
  //DOM listens after this function is declared later. Will mess up if I use now.  Doublecheck that's where Im at, afterRender
  router.updatePageLinks();
}

function afterRender(state) {
  console.log("afterRender");
  //after specific state is rendered.  If state view = home, processes mapquest key

  if (state.view === "Individual") {
    L.mapquest.key = process.env.MAP_KEY;

    // 'map' refers to a <div> elements with the ID map
    const map = L.mapquest.map("map", {
      center: [37.7749, -122.4194],
      layers: L.mapquest.tileLayer("map"),
      zoom: 12,
      zoomControl: false
    });

    L.control
      .zoom({
        position: "topright"
      })
      .addTo(map);

    L.mapquest
      .directionsControl({
        routeSummary: {
          enabled: false
        },
        narrativeControl: {
          enabled: true,
          compactResults: false
        }
      })
      .addTo(map);
  }

  if (state.view === "Blog") {
    console.log("Blog is working", state.view);

    const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.GOODNEWS_KEY}`;
    axios
      .get(url)
      .then(response => {
        const data = response.data;
        const articles = data.articles;

        // let articleList = "";
        for (let i = 0; i < articles.length; i++) {
          console.log("Title: " + articles[i]["title"]);
          console.log("Description: " + articles[i]["description"]);
        }
        // const blogArt = document.querySelector("#table-blog");
        // blogArt.innerHTML = articleList;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  if (state.view === "Individual") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const inputList = event.target.elements;
      console.log("Input elements List", inputList);
      store.Individual.zip = inputList.zipCode.value;
      console.log(store.Individual.zip, "ind zip");

      if (store.Individual.zip) {
        console.log("Individual", process.env.BACKEND_SERVER);
        axios
          .get(`${process.env.BACKEND_SERVER}/zip/${store.Individual.zip}`)
          .then(response => {
            console.log(response.data);
            store.Individual.information = response.data;
            console.log((store.Individual.information = response.data));
            router.navigate("/Individual");
          });
      }
    });
  }
}
// Add an event listener here.  After render should be last or nearly last at end of document
router.hooks({
  // view getting switched over.  What is it going to do?  hook an API maybe for example.  'What is going to happen now'?
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    console.log("before", view);
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Blog":
        axios
          .get(
            `https://gnews.io/api/v4/top-headlines?category=health&lang=en&country=us&max=10&apikey=${process.env.GOODNEWS_KEY}`
          )
          .then(response => {
            // Storing retrieved data in state
            console.log(response.data);
            store.Blog.blog[0] = response.data.articles[0].title;
            console.log(store.Blog.blog, "store blog");
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      //whatever switches into the url router or "hooks" into the router then it does the API call in the axios get request
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "About";
    console.log("already");
    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
      console.log(store[view], "router on");
    }
  })
  .resolve();
