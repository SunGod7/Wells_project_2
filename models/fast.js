const mongoose = require('./connection')
const commentSchema  = require('./comment')

// inside of mongoose I want the keys that are named Schema and model
const { Schema, model } = mongoose

const fastSchema = new Schema({//model declaration
    name: { type: String, required: true },
    fastHrs: Number,
    dietOn: String,
    dietOff: String,
    frequency: String,
    // owner: {
    //     type: Schema.Types.ObjectId,//
    //     ref: 'User',//const User = model('User', userSchema)//null
    // },
    //comments: [commentSchema]// fruit can have many comments


}, {
    timestamps: true
})

// need to make a model// model creation
// this collections will be called fruits
const Fast = model('Fast', fastSchema)

module.exports = Fast