import html from "html-literal";
import motherShip from "../../assests/img/mothership.jpg";
export default () => html`
<h1>Contact</h1>
<section id="bio" class="container">
<div class="left">
<img src="${motherShip}" class="mothership" alt="The Mothership">
</div>
<div class="right">
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
