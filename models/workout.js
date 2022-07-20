const mongoose = require('./connection')


// inside of mongoose I want the keys that are named Schema and model
const { Schema, model } = mongoose

const workoutSchema = new Schema({//model declaration
    trainnig: String,
    exercise: String, 
    reps: String,
    sets: String,
    rest: String,
    warmup: String,
    frequency: String,
     owner: {
         type: Schema.Types.ObjectId,//
         ref: 'User',//const User = model('User', userSchema)//null
     },
    //comments: [commentSchema]// fruit can have many comments


}, {
    timestamps: true
})

// need to make a model// model creation
// this collections will be called fruits
const Workout = model('Workout', workoutSchema)

module.exports = Workout