const express = require('express')
const app = express()

app.set('view engine', 'ejs')


app.use(express.static("public"))
// Ez ahhoz kell, hogy hozzá tudjunk férni a req.body-hoz, ha bármilyen form-ból küldjük az adatokat
app.use(express.urlencoded({ extended: true }))
// Ha JSON adatot kell kezeljünk, akkor erre mindenféleképpen szükségünk van
app.use(express.json())

/*app.get('/', (req, res) => {
    // res.download("server.js") --> For any download
    // res.status(200).json({message: "Error"})
    res.render('index', {text: 'World'})
})*/

const userRouter = require('./routes/users')

app.use('/users', userRouter)

/*
Egyszerű middleware -> a request és a response között fut le

app.use(logger)
function logger (req, res, next) {
    console.log(req.originalUrl)
    next()
}*/

app.listen(5000)
