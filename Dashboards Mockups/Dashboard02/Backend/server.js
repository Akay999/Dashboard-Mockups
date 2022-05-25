const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json())

var posts = [
    {
        username : 'Akay',
        Title : 'Post1'
    },
    {
        username : 'Akshat',
        Title : 'Post2'
    },
    {
        username : 'Person 1',
        Title : "Post 3"
    }

]

app.get('/posts', (req, res) => {
    res.json(posts);
})

app.post('/login', (req, res) => {
    // Authenticate user
    const username = req.body.username;
    const user = { name : username}


})

app.listen(3000);