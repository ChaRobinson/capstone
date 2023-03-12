import html from "html-literal";

export default () => html`
  <p>
    Here you will find some invaluable information and resources if you are
    suffering from Postpartum Depression, Anxiety, or any other Perinatal Mood
    Disorder. Perhaps you aren't suffering, but you know of someone who is. Then
    please, get your loved one some information that may be helpful to them!
    Healing first starts with recognizing that there may be a problem. But there
    is a solution! Reach out, get help, and take care of yourself!
  </p>
  <div class="place">
    <p>
      Which state are you in? Choose from the state you reside in to see what
      resources are available to you!
    </p>
    <div class="article">
      <article>
        <h1>Ways to start healing from Perinatal Depression</h1>
        <h2>There are several ways to begin the journey of healing.</h2>
        <h3>Several Ways include:</h3>
        <p>
        <ul>
          <li>Psychotherapy</li>
          <li>Antidepressants</li>
          <li>Setting realistic expectations</li>
        </ul>
        </p>
        <p>
          <h3>
            Symptoms include:
          </h3>
          <ul>
            <li>Mood Swings
            </li>
            <li>Anxiety</li>
            <li>Crying Spells</li>
          </ul>
        </p>
<p>It's never too late to get help.  If you are suffering, you aren't alone! Use our website to find a friend to walk with today!</p>
      </article>
    </div>
  </div>
`;
// const menu = document.querySelectorAll(".dropdown");
// const dropdownArr = Array.prototype.slice.call(menu, 0);
// dropdownArr.forEach(function(le) {
//   const button = le.querySelector('a[data-toggle="dropdown]'),
//     menu = le.querySelector(".menu"),
//     arrow = button.querySelector("i.icon-arrow");

//   button.onclick = function(event) {
//     if (!menu.hasClass("show")) {
//       menu.classList.add("show");
//       menu.classList.remove("hide");
//       arrow.classList.add("open");
//       arrow.classList.remove("close");
//       event.preventDefault();
//     } else {
//       menu.classList.remove("show");
//       menu.classList.add("hide");
//       arrow.classList.remove("open");
//       arrow.classLIst.add("close");
//       event.preventDefault();
//     }
//   };
// });
// Element.prototype.hasClass = function(className) {
//   return (
//     this.className &&
//     new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className)
//   );
// };
`
<!--dropdown list with states as the menu choice which will link to the resource. Edit in CSS later-->
<div class="dropdown">
  <h1 class="menu">Which Area do you reside?</h1>
  <ul>
    <li class="menu">
      <a data-toggle="dropdown">West Coast<i class="fas fa-arrow-circle-down"></a>
      <ul class="choices">
        <li>California</li>
        <li>Oregon</li>
        <li>Washington State</li>
        <li>Hawaii</li>
        <li>Alaska</li>
      </ul>
    </li>
    <li class="menu">
      <a data-toggle="dropdown">East Coast<i class="fas fa-arrow-circle-down"></i></a>
      <ul class="choices">
        <li>Virginia</li>
        <li>New York</li>
        <li>North Carolina</li>
        <li>South Carolina</li>
      </ul>
    </li>
  </ul>
</div>
`;
