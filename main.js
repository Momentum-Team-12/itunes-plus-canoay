console.log("linked");

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
    let results = data.results;
    for (let result of results) {
      let artDirectLink = result.artworkUrl100.toString();

      let artConvertedLink = artDirectLink.slice(0, -13) + "300x300bb.jpg";

      let cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      profileDiv.appendChild(cardDiv);

      let artDiv = document.createElement("img");
      artDiv.classList.add("art");
      artDiv.src = artConvertedLink;
      cardDiv.appendChild(artDiv);

      let songDiv = document.createElement("div");
      songDiv.classList.add("song");
      songDiv.innerText = result.trackName;
      cardDiv.appendChild(songDiv);

      let nameDiv = document.createElement("div");
      nameDiv.classList.add("artist");
      nameDiv.innerText = result.artistName;
      cardDiv.appendChild(nameDiv);
    }
  });
