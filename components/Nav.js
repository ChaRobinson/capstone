import html from "html-literal";

export default links => html`
  <nav class="nav-container">
    <ul class="nav-container-links">
      <li class="nav-container-links" id="nav-title">
        <img
          src="https://i.ibb.co/8jgrQZh/logo.jpg"
          alt="logo"
          border="0"
          id="thumbnail"
        />Walk With Moms
      </li>
      ${links.map(
        el =>
          `<li class="nav-container-links"><a href="/${el.title}" title="${el.title}" data-navigo>${el.text}</a></li>`
      )}
    </ul>
  </nav>
  <div id="nav-space"></div>
`;
