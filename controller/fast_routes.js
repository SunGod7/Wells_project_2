const express = require('express')
// making a router
const router = express.Router()
// importing Fast model to access database
const Fast = require('../models/fast')




// DELETE - Delete
router.delete('/:id', (req, res) => {
    const fastId = req.params.id
    Fast.findByIdAndRemove(fastId)
        .then(fast => {
            res.redirect('/fasts')
        })
        .catch(err => {
            res.json(err)
        })
})



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
//localhost:3000/fasts/new
router.get('/new', (req, res) => {
    
     res.render('fasts/new')
    // const username = req.session.username//added
    // const loggedIn = req.session.loggedIn
    // res.render('fasts/new', { username, loggedIn })
})
       


//POST
router.post('/', (req, res) => {

    // req.body.owner = req.session.userId

    // console.log(req.body)

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


/////////////////////////////////
// router.get('/mine', (req, res) => {
//     // find the fruits associated with the logged in user
//     // TODO: change the username to Users ._id
    
//     Fast.find({ owner: req.session.userId })
//         .then(fasts => {
//             res.render('fasts/index', { fasts })
//         })
//         .catch(error => {
//             console.log(error)
//             res.json({ error })
//         })
// })







//fast/seed
// router.get('/seed', (req, res) => {
//     //res.render()
//     const startFasts = [  
//     { name: 'Supreme Fast', fastHrs: '21', dietOn: 'water only',  dietOff: 'no meat', frequency: 'daily for life'},
//     { name: 'Power Fast', fastHrs: '48', dietOn: 'water only',  dietOff: 'Eat Whatever You Want', frequency: 'every week'},
//     { name: 'Juice Fast', fastHrs: '48', dietOn: 'Water or Juice',  dietOff: '', frequency: 'Once a month'},
//     { name: 'Fruit Fast', fastHrs: '72', dietOn: '',  dietOff: 'Water and Fruit', frequency: 'daily'},
//     { name: 'Window Fast', fastHrs: '19', dietOn: 'WATER ONLY',  dietOff: 'Eat Whatever You Want', frequency: 'twice a week'},
//     ]
    
     
    
// // console.log('startFasts')
// Fast.deleteMany({})
     
//       .then( ( )=> {
//          Fast.create(startFasts)
//          .then(data => {
//            res.json(data)
    
//        })
//          .catch(console.error)
    
//        })


// })

//SHOW
//fasts/:id
router.get('/:id', (req, res) => {
    //mongoose to find all fruits
    const fastId = req.params.id
    Fast.findById(fastId)
    // return fruits as json
        .then(fast => {
            //res.json(fast)
            res.render('fasts/show', { fast })
            // const userId = req.session.userId
            // const username = req.session.username
            // res.render('fasts/show', { fast, userId, username })

        })
        .catch(err => {
            res.json(err)
        })
})



module.exports = router