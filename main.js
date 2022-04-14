let resultDiv = document.querySelector("#resultList");
let searchForm = document.querySelector("#sForm");
let searchField = document.querySelector("#input");
let searchAction = document.querySelector("#search");
let resultAnnouncementDiv = document.querySelector("#resultAnnouncement");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  removeAllChildNodes(resultDiv);

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
        resultDiv.appendChild(noResultsDiv);
      } else {
        for (let result of data.results) {
          // card container to hold info for each result
          let cardDiv = buildElement("div", "card", " ");

          // Stephen's higher res artwork solution

          let artDirectLink = result.artworkUrl100.toString();
          let artConvertedLink = artDirectLink.slice(0, -13) + "300x300bb.jpg";

          //Album image
          let artDiv = buildElement("img", "art", "");
          artDiv.alt = "Album Image of " + result.collectionName;
          artDiv.title = result.collectionName;
          artDiv.src = artConvertedLink;
          artDiv.addEventListener("mouseover", function (event) {
            artDiv.innerHTML = artDiv.getAttribute("title");
          });

          // audio
          let previewDiv = buildElement("audio", "preview", "");
          previewDiv.src = result.previewUrl;
          previewDiv.controls = "controls";

          // Track title
          let songDiv = buildElement("div", "song", result.trackName);

          // Artist Name
          let nameDiv = buildElement("div", "artist", result.artistName);

          // Album
          // let albumDiv = buildElement("div", "album", result.collectionName);

          // Release Date
          let dateDiv = buildElement(
            "div",
            "date",
            `Release Date:${moment(result.releaseDate).format("MMM YYYY")}`
          );

          // Attaching defined variables/elements to main div for results

          resultDiv.appendChild(cardDiv);
          cardDiv.appendChild(artDiv);
          cardDiv.appendChild(previewDiv);
          cardDiv.appendChild(songDiv);
          cardDiv.appendChild(nameDiv);
          // cardDiv.appendChild(albumDiv);
          cardDiv.appendChild(dateDiv);
          searchField.value = "";
        }
      }
    });
});
