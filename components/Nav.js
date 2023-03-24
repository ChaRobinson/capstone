import html from "html-literal";

export default links => html`
  <nav class="nav-container">
    <ul class="nav-container-links">
      <li class="nav-container-links" id="nav-title">Walk with Us</li>
      ${links.map(
        el =>
          `<li class="nav-container-links"><a href="/${el.title}" title="${el.title}" data-navigo>${el.text}</a></li>`
      )}
    </ul>
  </nav>
`;
