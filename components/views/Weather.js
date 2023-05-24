import html from "html-literal";
export default (state) => html`
<section id="obj">
<h1>The closest object near ${state.obj.orbiting} is asteroid "${state.obj.name}" missing by ${state.obj.miles} miles. Hazardous: ${state.obj.hazard}. </h1>
</section>
`;
