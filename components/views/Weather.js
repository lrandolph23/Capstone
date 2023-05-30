import html from "html-literal";
export default (state) => html`
<h1>Closest Asteroid:</h1>
<section id="obj" class="container">
<div class="left">
  <fieldset>
<legend>Search by Date</legend>
<label for="date">Date:
  <input id="date" type="date" name="" value="">
</label>
</fieldset>
</div>
<div class="right">
<div class="info">The closest object near ${state.obj.orbiting} is asteroid "${state.obj.name}" </div>
<div class="info">Distance from orbiting body: ${state.obj.miles} miles.</div>
<div class="info">Size: ${state.obj.size} feet in diameter.</div>
<div class="info">Hazardous: ${state.obj.hazard}.</div>
</div>
</section>
`;
