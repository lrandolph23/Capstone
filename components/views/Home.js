import html from "html-literal";
export default (state) => html`
<section id="jumbrotron">
<h1>Welcome</h1>
</section>
<div>
<h3 id="wedder">The weather in ${state.weather.city} is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.</h3>
</div>
`;
