import html from "html-literal";

export default () => html`
  <div class="container" id="container-home">
  <div class="insert-div" id="span-home">
        <p>
          Want to contact me? E-mail me at cmrobinson8686@gmail.com I look
          forward to hearing from you!
        </p>
        <form action="https://formspree.io/f/xayzdyrd" method="POST">
          <label>
            Your email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Your message:
            <textarea name="message" maxlength="250"></textarea>
          </label>
          <!-- your other form fields go here -->
          <button type="submit">Send</button>
        </form>
      </span>
    </div>
  </div>
`;
