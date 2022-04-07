console.log('linked')

let profileDiv = document.querySelector('#profile')


 fetch ('https://itunes.apple.com/lookup?id=2987400&entity=song', {
    method: 'GET',
})
 .then(function (response) {
        return response.json()
})
.then (function (data) {
    // for (let artist of data) {
        // console.log('artists')
        // let nameDiv = document.createElement('p')
        // nameDiv.classList.add('artist')
        // // nameDiv.innerHTML = '<a href="' + i.html_url + '">' + i.artistName + "</a>" 
        //   nameDiv.innerText = artist.artistName  
        // profileDiv.appendChild(nameDiv)
        console.log(data.results)
    //  let nameDiv = document.createElement('p')  
    //  nameDiv.classList.add('artist')
    //  nameDiv.innerText = results.artistName 
    //  profileDiv.appendChild(nameDiv)
    // }

    let results = data.results.slice(1)
    for (let result of results) {
    let nameDiv = document.createElement('p')  
     nameDiv.classList.add('artist')
     nameDiv.innerText = result.artistName 
     profileDiv.appendChild(nameDiv)

    let songDiv = document.createElement('p')  
     songDiv.classList.add('song')
     songDiv.innerText = result.trackName 
     profileDiv.appendChild(songDiv)
    
    let artDiv = document.createElement('img')  
     artDiv.classList.add('song')
     artDiv.src = result.artworkUrl100 
     profileDiv.appendChild(artDiv)
    }
})
