document.addEventListener('DOMContentLoaded', () => {
    let displaySection = document.getElementById('main_content')
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'https://content.viaplay.se/pc-se/serier/samtliga'

    fetch(proxyURL + apiUrl).then(response => {
        response.json().then(seriesResponse => {
            let shows = seriesResponse._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
            shows.forEach(show => {
                let showDiv = document.createElement('div')
                showDiv.className += 'display-show'
                showDiv.innerHTML = `<img src="${show.content.images.landscape.url}">`
                displaySection.appendChild(showDiv)
            })
        })
    })
})