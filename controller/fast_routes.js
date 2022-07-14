const express = require('express')
// making a router
const router = express.Router()
// importing Fast model to access database
const Fast = require('../models/fast')




//localhost:3000/fasts



// router.get('/index', (req, res) => {
//     res.render('fasts/index.liquid')
// })

// router.get('/', (req, res) => {
//     // mongoose to find all fruits
//     Fast.find({})
//     // return fruits as json
//         .then(fasts => {
//             //res.json(fast)
//             res.render('fasts/index', { fasts })
//         })
//         .catch(err => {
//             res.json(err)
//         })
//         //res.render('/index')
// })

//show



router.get('/show', (req, res) => {
    res.render('fasts/show.liquid')

})
//fasts/:id
//router.get('/:id', (req, res) => {
    // mongoose to find all fruits
    // const fastId = req.params.id
    // Fast.findById({fastId})
    // // return fruits as json
    //     .then(fast => {
    //         //res.json(fast)
    //         res.render('fasts/show', { fast })
    //     })
    //     .catch(err => {
    //         res.json(err)
    //     })
//})
//fast/seed
router.get('/seed', (req, res) => {
    //res.render()
    const startFasts = [  
    { name: 'will',  goal: 'lose weight', fast: '10', diet: 'water', frequency: 'daily'},
    { name: 'michelle',  goal: 'lose weight', fast: '24', diet: 'juice', frequency: 'weekly'},
    { name: 'victor',  goal: 'build muscle', fast: '10', diet: 'water', frequency: 'daily'},
    ]
    
     
    
// console.log('startFasts')
Fast.deleteMany({})
     
      .then( ( )=> {
         Fast.create(startFasts)
         .then(data => {
           res.json( data)
    
       })
         .catch(console.error)
    
       })




    



})
// GET - Index
// localhost:3000/fruits
// router.get('/', (req, res) => {
//     // mongoose to find all fruits
//     Fruit.find({})
//     // return fruits as json
//         .then(fruits => {
//             // res.json(fruit)
//             res.render('fruits/index', { fruits })
//         })
//         .catch(err => {
//             res.json(err)
//         })
// })



module.exports = router