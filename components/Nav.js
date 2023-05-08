import html from "html-literal";
export default (links) => html`
  <nav>
  <i class="fa-solid fa-user-astronaut"></i>
    <ul class="nav-links hidden--mobile">
      ${links
        .map(
          (link) =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;
