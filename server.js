

//connection.js: set up connetion to mongoose and export
//fasting_routes: set up router and routes and export
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const fastRoutes = require('./controller/fast_routes')
const userRoutes = require('./controller/user_routes')
const workoutRoutes = require('./controller/workout_routes')






////////////////////////////////////////////
// Create our express application object
////////////////////////////////////////////
const app = require('liquid-express-views')(express())

////////////////////////////////////////////
// Middleware
////////////////////////////////////////////

app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

//session
const session = require('express-session')
const MongoStore = require('connect-mongo')

app.use(
	session({
		secret: process.env.SECRET,
		store: MongoStore.create({
			mongoUrl: process.env.DATABASE_URI
		}),
		saveUninitialized: true,
		resave: false
	})
)
////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.use('/fasts', fastRoutes)
app.use('/users', userRoutes)
app.use('/workouts', workoutRoutes)


//////HOME PAGE?

app.get('/', (req, res) => {
	//res.send(`<h1> WELCOME TO THE FAST MENU!!!</h1> <a href="/fasts/"><h3>FAST 4 LIFE!!!</h3></a>`)
	//res.send("index.liquid")
	//res.render('index.liquid'
	res.redirect('/fasts')
	
})

////////////////////////////////////////////
// Server Listener
////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`app is listening on port: ${PORT}`)
})


