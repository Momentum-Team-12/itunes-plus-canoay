console.log("linked");

let defaultText = " ";
let searchBox = document.getElementById("search");
searchBox.value = defaultText;

let profileDiv = document.querySelector("#profile");

fetch(
  "https://proxy-itunes-api.glitch.me/search?term=dillinger-escape-plan&media=music",
  {
    method: "GET",
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let result of data.results) {
      // Stephen's workaround for art quality issue with Itunes API, slices out the max resolutions stated in fetch and adds higher resolution wording to art URL.
      let artDirectLink = result.artworkUrl100.toString();

      let artConvertedLink = artDirectLink.slice(0, -13) + "300x300bb.jpg";

      let cardDiv = buildElement("div", "card", " ");
      profileDiv.appendChild(cardDiv);

      let artDiv = buildElement("img", "art", " ");
      artDiv.src = artConvertedLink;
      cardDiv.appendChild(artDiv);

      let songDiv = buildElement("div", "song", result.trackName);
      // document.createElement("div");
      // songDiv.classList.add("song");
      // songDiv.innerText = result.trackName;
      cardDiv.appendChild(songDiv);

      let nameDiv = buildElement("div", "artist", result.artistName);
      // document.createElement("div");
      // nameDiv.classList.add("artist");
      // nameDiv.innerText = result.artistName;
      cardDiv.appendChild(nameDiv);

      let dateDiv = buildElement("div", "date", "");
      dateDiv.innerHTML = `Release Date: 
      ${moment(result.releaseDate).format("MMM Do, YYYY")}`;
      cardDiv.appendChild(dateDiv);
    }
  });
