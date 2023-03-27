const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // /users?name=Kyle
    console.log(req.query.name)
    res.send("User List")
})

router.get('/new', (req, res) => {
    res.render("users/new", { firstName: "Test" })
})

router.post('/', (req, res) => {
    const isValid = true
    if(isValid){
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.lenth - 1}`)
    } else{
        console.log("error")
        res.render('users/new', { firstName: req.body.firstName })
    }
})

// Minden ilyen dimanikus paraméterrel rendelkező kérés a file legalján legyen

router.route('/:id')
.get((req, res) => {
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
})
.put((req, res) => {
    res.send(`Put User With ID ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
})


const users = [{ name: "Kyle" }, { name: "Sally" }]
// Ez akkor fut le ha talál 'id' paramétert az url-ben. Ez egy middleware, a request és a response között fut le.
// Ha nem hívjuk meg a next() paramétert (függvényt), akkor az oldal a végtelenségig tölteni fog az előző sorban leírt okok miatt. 
router.param('id',(req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router