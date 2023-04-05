import html from "html-literal";

export default st => html`
  <div class="container" id="container-home">
    <div id="span-home">
      <p>
        Here you will find some invaluable information and resources if you are
        suffering from Postpartum Depression, Anxiety, or any other Perinatal
        Mood Disorder. Perhaps you aren't suffering, but you know of someone who
        is. Then please, get your loved one some information that may be helpful
        to them! Healing first starts with recognizing that there may be a
        problem. But there is a solution! Reach out, get help, and take care of
        yourself!
      </p>
      <img src="https://i.ibb.co/HHxRfTk/Happy-Mother.jpg" alt="Happy-Mother" border="0" id="blog-mommy">
      <p>
        Which state are you in? Choose from the state you reside in to see what
        resources are available to you!
      </p>
<button type="button">go</button>
<label for="places">Select your State</label>
  <option value="Alabama">Alabama</option>
  <option value="Alaska">Alaska</option>
  <option value="Arizona">Arizona</option>
  <option value="Virginia">Virginia</option>
  <option value="Arkansas">Arkansas</option>
  <option value="California">California</option>
  <option value="Colorado">Colorado</option>
  <option value="Connecticut">Connecticut</option>
  <option value="Delaware">Delaware</option>
</select>
<button type="go">go</button>
      <p>
        Ways to start healing from Perinatal Depression There are several ways
        to begin the journey of healing. Several Ways include:
        <ul>
          <li>Psychotherapy</li>
          <li>Antidepressants</li>
          <li>Setting realistic expectations</li>
        </ul>
        </p>
        <p>
            Symptoms include:
          <ul>
            <li>Mood Swings
            </li>
            <li class="container">Anxiety</li>
            <li class="container">Crying Spells</li>
      </p>
      <p>
        It's never too late to get help. If you are suffering, you aren't alone!
        Use our website to find a friend to walk with today!
      </p>
      <div id="tab-blog">
      <table id="table-blog">
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    ${st.Blog &&
      st.Blog.blog
        .map(articles => {
          return `<tr><td>${articles.title}</td><td>${articles.link}</td><td>${articles.description}</td><td><a data-id="${articles._id}" class="delete-action" href="#">Delete</a></td>
        </tr>`;
        })
        .join("")}
  </table>
  </div>
  </div>
  </div>
`;
