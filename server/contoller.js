let data = require('./data.json')

module.exports = {
    getAllUsers: (req, res) => {
        const {email} = req.query
        if(!email) return res.status(200).send(data)
        const filteredUsers = data.filter(el => el.email.includes(email))
        res.status(200).send(filteredUsers)
    },
    getSingleUser: (req, res) => {
        const {id} = req.params
        // req.body // req.params // req.query
        const user = data.find(el => el.id === +id)
        if(!user) return res.sendStatus(404)
        res.status(200).send(user)
    }
}

//axios.post('http://localhost:3456/users/3?id=3', body)