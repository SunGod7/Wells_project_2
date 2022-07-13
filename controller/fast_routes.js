const express = require('express')
// making a router
const router = express.Router()
// importing Fast model to access database
const Fast = require('../models/fast')



// GET - Index
// localhost:3000/fruits
router.get('/', (req, res) => {
    // mongoose to find all fruits
    Fruit.find({})
    // return fruits as json
        .then(fruits => {
            // res.json(fruit)
            res.render('fruits/index', { fruits })
        })
        .catch(err => {
            res.json(err)
        })
})



module.exports = router