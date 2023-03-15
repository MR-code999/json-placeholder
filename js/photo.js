function userPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => displayPhotos(json))
}

function displayPhotos(photos) {
    const divId = document.getElementById('All-photos');
    for (const photo of photos) {
        const div = document.createElement('div');
        div.classList.add('photo')
        div.innerHTML = `
        <p>${photo.albumId}</p>
        <p>${photo.id}</p>
        <h3>${photo.title}</h3>
        <h4>${photo.url}</h4>
        <img src=${photo.thumbnailUrl} alt="">
        `
        divId.appendChild(div)
    }
}