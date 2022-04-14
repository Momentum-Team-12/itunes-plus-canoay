// Gerardo's function: minimizes lines of code on main script page by automating create element, class setting and innerText/HTML actions into one function.

function buildElement(elementType, className, text) {
  let element = document.createElement(elementType);
  element.classList.add(className);
  element.innerText = text;
  return element;
}

// Jamie's really great Clear search box function
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// Stephen's solution for art quality issue with Itunes API, slices out the max resolutions stated in fetch and adds higher resolution wording to art URL.

let artDirectLink = result.artworkUrl100.toString();
let artConvertedLink = artDirectLink.slice(0, -13) + "300x300bb.jpg";

//
//
//
//
//
//
//
//
//
//
//
//
// A la carte items to review later!!!
// my revised version to add .src , work in progress

// function buildElement(elementType, className, text) {
//   let element = document.createElement(elementType);
//   element.classList.add(className);
//   if ((elementType = "audio" || "img")) {
//     element.src = text;
//   } else {
//     element.innerText = text;
//   }
//   return element;
// }
// Search Results announcement, WIP
// function Announcement() {
//   searchForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let searchResultsDiv = buildElement(
//       "div",
//       "searchResults",
//       `Results for ${searchField.value}`
//     );
//     resultAnnouncementDiv.appendChild(searchResultsDiv);
//   });
// }
