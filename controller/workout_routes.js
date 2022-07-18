const express = require('express')
const Workout = require('../models/workout')

const router = express.Router()

// DELETE - Delete
router.delete('/:id', (req, res) => {
    const workoutId = req.params.id
    Workout.findByIdAndRemove(workoutId)
        .then(workout => {
            res.redirect('/workouts')
        })
        .catch(err => {
            res.json(err)
        })
})



///edit
//

router.get('/:id/workedit', (req, res) => {
    const workoutId = req.params.id

    Workout.findById(workoutId)
    // return fruits as json
        .then(workout => {
            //res.json(fast)
            res.render('workouts/workedit',  { workout })
        })
        .catch(err => {
            res.json(err)
        })
    
    
       
})

//PUT - UPDATE
router.put('/:id', (req, res) => {
    const workoutId = req.params.id

    Workout.findByIdAndUpdate(workoutId, req.body)

       .then(workout => {
        res.redirect(`/workouts/${workout._id}`)
       })
       .catch(err => {
        res.json(err)
    })





})


// NEW
// localhost:3000/workouts/new
router.get('/worknew', (req, res) => {
    
    //res.render('workouts/new')
//    const username = req.session.username//added
//    const loggedIn = req.session.loggedIn, { username, loggedIn }
   res.render('workouts/worknew')
})
      


//POST
router.post('/', (req, res) => {

    // req.body.owner = req.session.userId

    // console.log(req.body)

    Workout.create(req.body)
        .then(workout => {
          console.log(workout)
          //res.json(fast)
          res.redirect('/workouts')
   
      })
        .catch(err => {
         res.json(err)
   })

 })
//local:3000/workouts
//index
router.get('/', (req, res) => {
    //console.log(pickWorkouts)
    // mongoose to find all fruits
    Workout.find({})
    // return fruits as json
        .then(workouts => {
             //res.json(workout)

         res.render('workouts/workout', { workouts })
        })
        .catch(err => {
            res.json(err)
        })
})

// GET - Show
// local:3000/workouts/:id 
router.get('/:id', (req, res) => {
    const workoutId = req.params.id

    Workout.findById(workoutId)
    .then(workout => {
        //res.json(workout)
        res.render('workouts/workshow', { workout })
    })
    .catch(err => {
        res.json(err)
    })
})


    

//fasts/workseed
router.get('/workseed', (req, res) => {

    const pickWorkouts = [
        {trainning: 'Beginner Lower Body', exercise: 'Air squats and lunges', reps: '20, 10', sets: '3', rest: '60', warmup: '50 jumping jack and stretching', frequency: '3 times per week'},
        {trainning: 'Beginner Upper Body', exercise: 'Push-ups and Dips ', reps: '15-25, 8-12', sets: '5', rest: '90', warmup: '50 jumping jack and stretching', frequency: '3 times per week'},
        {trainning: 'Beginner Cardio', exercise: '0ne hr on treadmill. walk or run ', reps: '', sets: '', rest: 'rest when your finished', warmup: '50 jumping jack and stretching', frequency: '4 times per week'},
        {trainning: 'Beginner stomache', exercise: 'reverse crunch, oblique crunch', reps: '20-25, 15-20', sets: '5', rest: '90', warmup: '50 jumping jack and stretching', frequency: '3 times per week'},
        {trainning: 'Advanced Lower Body', exercise: 'weighted squats, deadlift', reps: '8-10, 10-12', sets: '5', rest: '90', warmup: '100 Air squats ', frequency: '4 times per week'},
        {trainning: 'Advanced Upper Body', exercise: 'bench press, dumdbell curls', reps: '8-12, 10-12', sets: '5', rest: '90', warmup: '100 push-ups', frequency: '4 times per week'},
        {trainning: 'Advanced Cardio', exercise: 'Burpees', reps: '100', sets: '3', rest: '2 min', warmup: '50 push-ups, 50 jumping jack', frequency: '4 times per week'},
        {trainning: 'Advanced stomache ', exercise: 'sit-ups, pull-ups', reps: '30-40, 10-15', sets: '12', rest: '60', warmup: '50 jumping jack', frequency: '4 times per week'},








    ]

   // delete
   Workout.deleteMany({})
		
		.then(() => {
            Workout.create(pickWorkouts)
            
            .then(data => {
                res.json(data)
            })
            
		    .catch(console.error)
        })
})







module.exports = router