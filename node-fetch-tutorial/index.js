var fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(json => console.log(json))

// fetch('https://google.com')
// .then(res => res.text())
// .then(text => console.log(text))

var todo = {
    userId: 1,
    title: "loren impsum doloris",
    completed: false
}

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' }
})
.then(res => res.json())
.then(json => console.log(json))