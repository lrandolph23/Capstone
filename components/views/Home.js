import html from "html-literal";
export default (state) => html`
<section id="jumbrotron">
<h1>Safe place to anonymously share other-wordly experiences!</h1>
<section class="cool">
<h2>Some experiences in history to check out:</h2>
<div>
<a href="https://www.southeastarrow.com/story/2455754.html">Alien: Cape Girardeau Alien Crash 1941</a>
</div>
<div>
<a href="https://www.darnews.com/gallery/35415">Alien: Piedmont, MO UFO sighting of 1973</a>
</div>
<div>
<a href="https://house.mo.gov/billtracking/bills231/hlrbillspdf/2643H.01I.pdf">Alien: House Bill Declaring Piedmont "UFO Captial" of Missouri</a>
</div>
<div>
  <a href="https://www.ozarksalive.com/stories/2iepyyzyl2rk6jkohdpf633ftjaaoc">Alien: Riveting Experience of Buck Nelson from Mountain View, MO</a>
</div>
<div>
  <a href="https://www.lincolnnewsnow.com/entertainment/lincoln-county-urban-legend-mutilated-cows/article_b48230fc-0b35-11eb-ae29-63478c60d23b.html">Alien: Lincoln County, MO Cow Murders</a>
</div>
<div>
  <a href="https://www.onlyinyourstate.com/missouri/port-cape-girardeau-haunted-mo/">Ghost: Ulysses S. Grant's Headquarters during the Civial War turned bar</a>
</div>
<div>
  <a href="https://www.krcu.org/arts-culture/2018-10-30/living-history-and-ghostly-tales-the-glenn-house-is-a-historical-treasure">Ghost: The Glenn House Built in 1883</a>
</div>
<div>
  <a href="https://www.legendsofamerica.com/momo-monster/">Other: Momo, the Missouri Monster</a>
</div>
</section>
</section>
<div>
<h3 id="wedder">The weather in ${state.weather.city} is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.</h3>
</div>
`;
