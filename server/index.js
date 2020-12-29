const express = require('express')
const ctrl = require('./contoller')

const app = express()

//req=info about request
//res=info about your response that you send back

app.get('/', (reg, res) => {
    res.send('home screen')
})

app.get('/api/test', (req, res) => {
    res.send('is this what you are looking for?')
})

app.get('/api/reject', (req, res) => {
    res.status(400).send('This was a no no')
})

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/user/:id', ctrl.getSingleUser)

app.listen(3456, () => console.log('Listening on port 3456'))