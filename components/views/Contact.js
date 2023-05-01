import html from "html-literal";
import motherShip from "../../assests/img/mothership.jpg";
export default () => html`
<section id="bio">
<h2>About Me</h2>
<img src="${motherShip}" alt="The Mothership">
</section>
<form action="https://formspree.io/f/moqzypyp" method="POST">
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your transmission:
    <textarea name="message">...</textarea>
  </label>
  <button type="submit">Contact</button>
</form>
`;
