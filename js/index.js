document.getElementById('second-page').addEventListener('click', function () {
    window.location.href = 'post.html'
})
function oneloadUser() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function tenLoadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayUser(json))
}

function displayUser(users) {
    const ul = document.getElementById('users');
    for (const user of users) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `${user.name} == ${user.email}  ${user.id} == ${user.address.city}`;
        ul.appendChild(li);
    }

}
