import html from "html-literal";
import motherShip from "../../assests/img/mothership.jpg";
export default () => html`
<h1>Contact</h1>
<section id="bio" class="container">
<div class="left">
  <div>
<a href="https://instagram.com/gnomefromspace?igshid=MzNlNGNkZWQ4Mg==" class="insta">Our Instagram</a>
</div>
<img src="${motherShip}" class="mothership" alt="The Mothership">
</div>
<div id="contct" class="right">
<p> Our goal is to create a safe place for people to share their other-worldy experiences. Users can also check the corrilation between sightings and closest asteroids. Cosmonauts can use the stellar weather to check the conditions for travel.</p>
<form action="https://formspree.io/f/moqzypyp" method="POST">
  <div>
    <label>
    Your email:
    <input type="email" name="email">
  </label>
</div>
<div>
  <label>
    Your transmission:
    <textarea name="message">...</textarea>
  </label>
</div>
  <button type="submit">Contact</button>
</form>
</div>
</section>
`;
