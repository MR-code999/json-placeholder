function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => displayPost(json))
}

function displayPost(posts) {
    const divContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.id}</h3>
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        `
        divContainer.appendChild(div)


    }
}

document.getElementById('third-page').addEventListener('click', function () {
    window.location.href = 'album.html';
})