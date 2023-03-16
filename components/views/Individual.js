import html from "html-literal";

export default st => html`
  <div></div>
  <div class="resize">
    <img
      src="https://i.ibb.co/KyQpmch/best-Friend-Copy.jpg"
      alt="best-Friend-Copy"
      class="thisOne"
    />
  </div>
  <div class="header">
    <p id="start">
      Getting started is super easy! Simply type in your zip code and hit "GO".
      Afterwards, a listing of current users in your area will be available. Go
      ahead and filter by preference, and you will soon be able to meet up with
      a Mother who has been where you are, and you both can get started on your
      journey to healing.
    </p>
    <table id="ITable">
      <tr>
        <th>Name</th>
        <th>Options</th>
        <!--Will reference preferences-->
        <th>Child's Age</th>
      </tr>
      ${st.Individual.map(Individual => {
        return `<tr><td>${Individual.preferences}</td><td>${Individual.customer}</td><td>
          ${Individual.childAge}</td><td><a data-id=${Individual._id}" class="delete-action" href="#>
          Delete</a></td></tr>`;
      })}
    </table>
  </div>
`;
