const proxyURL = 'https://cors-anywhere.herokuapp.com/'
const apiUrl = 'https://content.viaplay.se/pc-se/serier/samtliga'

const fetchShows = async () => {
    let data = await (await fetch(proxyURL + apiUrl)).json();
    return data;
}

document.addEventListener('DOMContentLoaded', () => {
    let displaySection = document.getElementById('main_content')
    fetchShows().then((data) => {
        let shows = data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
        shows.forEach(show => {
            console.log(show)
            let showDiv = document.createElement('div')
            showDiv.className += 'display-show'
            let html = ''
            if (show.content.imdb) {
                html += `<a href="${show.content.imdb.url}" target="_blank">`
                html += `<img src="${show.content.images.landscape.url}" >`
                html += `</a>`
            } else {
                html += `<img src="${show.content.images.landscape.url}">`
            }

            showDiv.innerHTML = html
            displaySection.appendChild(showDiv)
        })
    })


    // fetch(proxyURL + apiUrl).then(response => {
    //     response.json().then(seriesResponse => {
    //         let shows = seriesResponse._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    //         shows.forEach(show => {
    //             // console.log(show.content.imdb.url)
    //             let showDiv = document.createElement('div')
    //             showDiv.className += 'display-show'
    //             let html = ''
    //             if (show.content.imdb) {
    //                 html +=`<a href="${show.content.imdb.url}" target="_blank">`
    //                 html += `<img src="${show.content.images.landscape.url}" >`
    //                 html += `</a>`
    //             } else {
    //                 html += `<img src="${show.content.images.landscape.url}">`
    //             }

    //             showDiv.innerHTML = html
    //             displaySection.appendChild(showDiv)
    //         })
    //     })
    // })
})