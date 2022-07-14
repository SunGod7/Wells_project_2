const express = require('express')
// making a router
const router = express.Router()
// importing Fast model to access database
const Fast = require('../models/fast')



///edit
//

router.get('/:id/edit', (req, res) => {
    const fastId = req.params.id

    Fast.findById(fastId)
    // return fruits as json
        .then(fast => {
            //res.json(fast)
            res.render('fasts/edit',  { fast })
        })
        .catch(err => {
            res.json(err)
        })
    
    
       
})

//PUT - UPDATE
router.put('/:id', (req, res) => {
    const fastId = req.params.id

    Fast.findByIdAndUpdate(fastId, req.body)

       .then(fast =>{
        res.redirect(`/fasts/${fruit_id}`)
       })
       .catch(err => {
        res.json(err)
    })



})

//NEW
//localhost:3000/fruits
router.get('/new', (req, res) => {
    
    res.render('fasts/new')
       
})

//POST
router.post('/', (req, res) => {

    Fast.create(req.body)
         .then(fast => {
           console.log(fast)
           //res.json(fast)
           res.redirect('/fasts')
    
       })
         .catch(err => {
          res.json(err)
    })
    //res.render('fruits/new')
       
})
//INDEX
//localhost:3000/fasts
router.get('/', (req, res) => {
    // mongoose to find all fruits
    Fast.find({})
    // return fruits as json
        .then(fasts => {
            //res.json(fasts)
            res.render('fasts/index', { fasts })
        })
        .catch(err => {
            res.json(err)
        })

        
})







//SHOW
//fasts/:id
router.get('/:id', (req, res) => {
    //mongoose to find all fruits
    const fastId = req.params.id
    Fast.findById(fastId)
    // return fruits as json
        .then(fast => {
            //res.json(fast)
            res.render('fasts/show',  { fast })
        })
        .catch(err => {
            res.json(err)
        })
})
//fast/seed
router.get('/seed', (req, res) => {
    //res.render()
    const startFasts = [  
    { name: 'Supreme Fast', fastHrs: '21', dietOn: 'water only',  dietOff: 'no meat', frequency: 'daily for life'},
    { name: 'Power Fast', fastHrs: '48', dietOn: 'water only',  dietOff: 'Eat Whatever You Want', frequency: 'every week'},
    { name: 'Juice Fast', fastHrs: '48', dietOn: 'Water or Juice',  dietOff: '', frequency: 'Once a month'},
    { name: 'Fruit Fast', fastHrs: '72', dietOn: '',  dietOff: 'Water and Fruit', frequency: 'daily'},
    { name: 'Window Fast', fastHrs: '19', dietOn: 'WATER ONLY',  dietOff: 'Eat Whatever You Want', frequency: 'twice a week'},
    ]
    
     
    
// console.log('startFasts')
Fast.deleteMany({})
     
      .then( ( )=> {
         Fast.create(startFasts)
         .then(data => {
           res.json(data)
    
       })
         .catch(console.error)
    
       })




    



})



module.exports = router