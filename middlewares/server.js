const express = require('express')
const app = express()
const port = 5000

app.use(logger)

app.get('/', (req, res) => {
    console.log("Home Page")
    res.send("Home Page")
})

app.get('/users', auth, (req, res) => {
    console.log(`User is admin = ${req.admin}`)
    console.log("Users Page")
    res.send("Users Page")
})

function logger(req, res, next){
    console.log('Log')
    next()
}

function auth(req, res, next){
    if(req.query.admin === 'true'){
        req.admin = true
        next()
    } else{
        res.send('No auth')
    }
}

app.listen(port)