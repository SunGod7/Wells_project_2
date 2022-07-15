const express = require('express')
const Workout = require('../models/workout')

const router = express.Router()









router.get('/', (req, res) => {
    //console.log(pickWorkouts)
    // mongoose to find all fruits
    Workout.find({})
    // return fruits as json
        .then(workouts => {
             res.json(workout)
        })
    })

//fasts/workseed
router.get('/workseed', (req, res) => {

    const pickWorkouts = [
        {trainnig: 'Beginner Lower Body', exercise: 'Air squats and lunges', reps: '20, 10', sets: '3', rest: '60', warmup: '50 jumping jack and stretching', frequency: '3 times per week'},
        {trainnig: 'Beginner Upper Body', exercise: 'Push-ups and Dips ', reps: '15-25, 8-12', sets: '5', rest: '90', warmup: '50 jumping jack and stretching', frequency: '3 times per week'},
        {trainnig: 'Beginner Cardio', exercise: '1hr on treadmill. walk or run ', reps: '', sets: '', rest: 'rest when your finished', warmup: '50 jumping jack and stretching', frequency: '4 times per week'},
        {trainnig: 'Beginner stomache', exercise: 'reverse crunch, oblique crunch', reps: '20-25, 15-20', sets: '5', rest: '90', warmup: '50 jumping jack and stretching', frequency: '3 times per week'},
        {trainnig: 'Advanced Lower Body', exercise: 'weighted squats, deadlift', reps: '8-10, 10-12', sets: '5', rest: '90', warmup: '100 Air squats ', frequency: '4 times per week'},
        {trainnig: 'Advanced Upper Body', exercise: 'bench press, dumdbell curls', reps: '8-12, 10-12', sets: '5', rest: '90', warmup: '100 push-ups', frequency: '4 times per week'},
        {trainnig: 'Advanced Cardio', exercise: 'Burpees', reps: '100', sets: '3', rest: '2 min', warmup: '50 push-ups, 50 jumping jack', frequency: '4 times per week'},
        {trainnig: 'Advanced stomache ', exercise: 'sit-ups, pull-ups', reps: '30-40, 10-15', sets: '12', rest: '60', warmup: '50 jumping jack', frequency: '4 times per week'},








    ]

   // delete if we have fruits
   Workout.deleteMany({})
		// insert data
		.then(() => {
            Workout.create(pickWorkouts)
            // return this data as json to view
            .then(data => {
                res.json(data)
            })
            // .catch(err => console.error(err))
		    .catch(console.error)
        })
})







module.exports = router