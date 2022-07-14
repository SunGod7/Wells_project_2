//setup order
//server..js

//fasting.js: set up schema

//connection.js: set up connetion to mongoose and export
//fasting_routes: set up router and routes and export
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const fastRoutes = require('./controller/fast_routes')
//const userRoutes = require('./controller/user_routes')
//const MongoStore = require('connect-mongo')







////////////////////////////////////////////
// Create our express application object
////////////////////////////////////////////
const app = require('liquid-express-views')(express())

////////////////////////////////////////////
// Middleware
////////////////////////////////////////////
// this is for request logging
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
// parses urlencoded request bodies
app.use(express.urlencoded({ extended: false }))
// to serve files from public statically
app.use(express.static('public'))
 app.use('/fasts', fastRoutes)

 //app.use('/users', userRoutes)

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get('/index', (req, res) => {
	//res.send('your server is running, better go catch it')
	//res.send("index.liquid")
	res.render('index.liquid')
	
})

////////////////////////////////////////////
// Server Listener
////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`app is listening on port: ${PORT}`)
})


