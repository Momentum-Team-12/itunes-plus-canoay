console.log("linked");

let profileDiv = document.querySelector("#profile");
let searchForm = document.querySelector("#sForm");
let searchField = document.querySelector("#input");
let searchAction = document.querySelector("#search");

console.log(searchAction);

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(searchField.value);

  removeAllChildNodes(profileDiv);

  fetch(
    `https://proxy-itunes-api.glitch.me/search?term=${searchField.value}&media=music`,
    {
      method: "GET",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.results.length <= 0) {
        console.log("noResults");
        let noResultsDiv = buildElement("div", "noResults", "No Results Found");
        profileDiv.appendChild(noResultsDiv);
      } else {
        for (let result of data.results) {
          // Stephen's workaround for art quality issue with Itunes API, slices out the max resolutions stated in fetch and adds higher resolution wording to art URL.

          let artDirectLink = result.artworkUrl100.toString();
          let artConvertedLink = artDirectLink.slice(0, -13) + "300x300bb.jpg";

          let cardDiv = buildElement("div", "card", " ");
          profileDiv.appendChild(cardDiv);

          let artDiv = buildElement("img", "art", "");
          artDiv.src = artConvertedLink;
          cardDiv.appendChild(artDiv);

          let previewDiv = buildElement("audio", "preview", "");
          previewDiv.src = result.previewUrl;
          previewDiv.controls = "controls";
          cardDiv.appendChild(previewDiv);

          let songDiv = buildElement("div", "song", result.trackName);
          cardDiv.appendChild(songDiv);

          let nameDiv = buildElement("div", "artist", result.artistName);
          cardDiv.appendChild(nameDiv);

          let dateDiv = buildElement("div", "date", "");
          dateDiv.innerHTML = `Release Date:
      ${moment(result.releaseDate).format("MMM YYYY")}`;
          cardDiv.appendChild(dateDiv);
        }
        searchField.value = "";
      }
    });
});
