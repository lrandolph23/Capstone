import html from "html-literal";
import alien from "../../assests/img/alienister.png";
export default () => html`
<section id="bio">
<h2>About Me</h2>
<p>My name is Lacy Randolph. I've spent the last 5 years as a cook in high volume environments being a part of teams and taking on heavy work loads. My curiosity and interest in JavaScript has brought me to the IT field. I'm currently attending Savvy Coders Full Stack Web Development bootcamp which facilitates a scrum environment running in two week sprints. I hope to dive deep into backend development and understand more about software engineering.</P>
<img src=${alien} class="me" alt=me>
</section>
`;
