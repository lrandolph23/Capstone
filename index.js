import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  afterRender(state);
  router.updatePageLinks();
}


function afterRender(state) {
  document.querySelector(".fa-user-astronaut").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Map") {
    document.querySelector("form").addEventListener("submit", event => {
      // Prevent the default action AKA redirects to the same URL using POST method
      event.preventDefault();

      const expList = event.target.elements;
      console.log("Experience List", expList);

      const expData = {
        who: expList.exp.value,
        where: expList.where.value,
        what: expList.what.value,
      };
      console.log("request Body", expData);

      axios
        .post(`${process.env.EXPERIENCE_API_URL}/exps`, expData)
        .then(response => {
          store.Map.exps.push(response.data);
          router.navigate("/Map");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });

    // Hidden textbox
    let box = document.getElementById("radio6");

    document.querySelectorAll('input[type="radio"][name="exp"]').forEach(radio => {
      radio.addEventListener("change", event => {
        if (event.target.id === "radio5") {

          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      })
    });
  }

  // app.get("/weather/:city", (request, response) => {
  //   axios
  //     // Get request to retrieve the current weather data using the API key and providing a city name
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=${request.params.city}`
  //     )
  //     .then(weatherData => {
  //       console.log(weatherData);
  //       response.json(weatherData.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // });

//  //Date Search?
  if (state.view === "Weather") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const input = event.target.elements.date.value;
      console.log(input);
        // document.getElementById()
    })
  }

}

router.hooks({
  before: (done, params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=cape%20girardeau`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };

            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        break;

        case "Map":
        axios
          .get(`${process.env.EXPERIENCE_API_URL}/exps`)
          .then(response => {
            console.log("response", response);
            store.Map.exps = response.data;
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
        break;
        done();

        case "Weather":
        axios
        // .get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${input}&end_date=2026-05-25&api_key=${process.env.NASA_API_KEY}`)
        .get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-05-24&end_date=2023-05-25&api_key=${process.env.NASA_API_KEY}`)
        .then(response => {
          const roundUp = doingIt =>
            Math.round(doingIt);
          const minSize = response.data.near_earth_objects["2023-05-24"][0].estimated_diameter.feet.estimated_diameter_min;
          const maxSize = response.data.near_earth_objects["2023-05-24"][0].estimated_diameter.feet.estimated_diameter_max;
          const average = roundUp((minSize + maxSize) / 2);

          store.Weather.obj = {
            name: response.data.near_earth_objects["2023-05-24"][0].name,
            orbiting: response.data.near_earth_objects["2023-05-24"][0].close_approach_data[0].orbiting_body,
            hazard: response.data.near_earth_objects["2023-05-24"][0].is_potentially_hazardous_asteroid,
            miles: roundUp(response.data.near_earth_objects["2023-05-24"][0].close_approach_data[0].miss_distance.miles),
            size: average,
          // Date Picker

            // const roundUp = doingIt =>
            //   Math.round(doingIt);
            // const minSize = response.data.near_earth_objects[`${input}`][0].estimated_diameter.feet.estimated_diameter_min;
            // const maxSize = response.data.near_earth_objects[`${input}`][0].estimated_diameter.feet.estimated_diameter_max;
            // const average = roundUp((minSize + maxSize) / 2);

            // store.Weather.obj = {
            //   name: response.data.near_earth_objects[`${input}`][0].name,
            //   orbiting: response.data.near_earth_objects[`${input}`][0].close_approach_data[0].orbiting_body,
            //   hazard: response.data.near_earth_objects[`${input}`][0].is_potentially_hazardous_asteroid,
            //   miles: roundUp(response.data.near_earth_objects[`${input}`][0].close_approach_data[0].miss_distance.miles),
            //   size: average,

            };
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: (params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": (params) => {
      let view = capitalize(params.data.view);
      if (store.hasOwnProperty(view)) {
        render(store[view]);
      } else {
        console.log(`View ${view} not defined`);
      }
    },
  })
  .resolve();
