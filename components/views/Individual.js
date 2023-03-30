import html from "html-literal";

export default store => html`
  <div></div>
  <!-- <div class="resize">
    <img
      src="https://i.ibb.co/KyQpmch/best-Friend-Copy.jpg"
      alt="best-Friend-Copy"
      class="thisOne"
    />
  </div> -->
  <div class="container" id="container-home">
    <div id="span-ind">
      <p id="start">
        Getting started is super easy! Simply type in your zip code and hit
        "GO". Afterwards, a listing of current users in your area will be
        available. Go ahead and filter by preference, and you will soon be able
        to meet up with a Mother who has been where you are, and you both can
        get started on your journey to healing.
      </p>
      <form id="formula">
        <label>ZIP CODE</label
        ><input
          name="zipCode"
          type="text"
          pattern="[0-9]{5}"
          title="zipCode"
        /><button type="submit">submit</button>
      </form>
      <div id="tab">
        <table id="table" border="2px">
          <tr>
            <th>preferences</th>
            <th>child Age (months)</th>
            <th>customer</th>
            <th>zip</th>
          </tr>
          ${store.information
            .map(info => {
              return `<tr><td>${info.preferences}</td><td>${info.childAge}</td><td>${info.customer}</td><td>
          ${info.zip}</td>
        <td><a data-id="${info._id}" class="delete-action" href="#">Delete</a></td>
        </tr>`;
            })
            .join("")}
        </table>
      </div>
      <div class="insert-div" id="map"></div>
    </div>
  </div>
`;
