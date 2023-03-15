function userAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => albumDisplay(json))
}

function albumDisplay(users) {
    const divId = document.getElementById('album-show')
    for (const user of users) {
        const div = document.createElement('div');
        div.classList.add('album');
        div.innerHTML = `
            <h3>${user.userId}</h3>
            <h4>${user.id}</h4>
            <p>${user.title}</p>
                `
        divId.appendChild(div);

    }
}

document.getElementById('four-page').addEventListener('click', function () {
    window.location.href = 'photo.html';
})