import html from "html-literal";
export default state => html`
  <!-- <header></header> -->
  <h1>
    Walk With Us
  </h1>
  <div class="introduction">
    <p class="introduction">
      Are you a mother or a mother to be who may be suffering from a Perinatal
      Mood Disorder?
      <br />
      <br />
      <!-- Insert Picture Here -->
      Come and let us help you start your journey to heal through the power of
      walking.
    </p>
    <p></p>
  </div>
  <div id="map"></div>

  <div>
    <p>
      Find out how many mothers have signed up by inputting your zip code!
    </p>
    <div>
      <!-- put above state an input box and submit button -->
    </div>
    <section class="introduction">
      <p>
        If you or someone you know may be struggling with suicidal thoughts, you
        can call the U.S. National Suicide Prevention Lifeline by dialing 988,
        or calling 800-273-TALK (8255) any time day or night, or chat online.
        Crisis Text Line also provides free, 24/7, confidential support via text
        message to people in crisis when they dial 741741
      </p>
    </section>
  </div>
`;
