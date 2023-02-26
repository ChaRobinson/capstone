import html from "html-literal";

export default links => html`
  <nav>
    <ul class="nav-bar">
      ${links.map(
        el =>
          `<li><a href="/${el.title}" title="${el.title}" data-navigo>${el.text}</a></li>`
      )}
    </ul>
  </nav>
`;
