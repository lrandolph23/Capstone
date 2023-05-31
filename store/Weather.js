// let start = new Date();
// start = start.toJSON();
// start = start.substring(0,10);
export default {
  header: "Stellar Weather",
  view: "Weather",
  start: new Date().toJSON().substring(0,10),
  weather: {}
};
