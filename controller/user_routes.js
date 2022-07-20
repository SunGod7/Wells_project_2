//////////////////////////////////////
// Import dependencies
///////////////////////////////////////
const express = require('express')
const User = require('../models/user')
// bcrypt is used to hash(read: encrypt) passwords
const bcrypt = require('bcryptjs')
///////////////////////////////////////
//router
///////////////////////////////////////
const router = express.Router()
///////////////////////////////////////

//  sign up routes
// GET and POST 
//show the form
router.get('/signup', (req, res) => {
    res.render('users/signup')
})

//  POST SIGN UP
router.post('/signup', async (req, res) => {
     console.log('this is our initial request body', req.body)
          req.body.password = await bcrypt.hash(
                req.body.password,
                await bcrypt.genSalt(10)
            )
            console.log('this is our initial request body', req.body)
            User.create(req.body)
        
                    .then(user => {
                        console.log('this is the new user', user)
                        res.redirect('/users/login')
                    })
        
                    .catch(error => {
                        console.log(error)
                        res.json(error)
                    })
    
    
})
//login
router.get('/login', (req, res) => {
    res.render('users/login')
})



// POST  login and create the session
router.post('/login', async (req, res) => {
    
    // destructure data from request body
    const { username, password } = req.body
    // console.log('this is username', username)
     //console.log('this is password', password)
   // console.log('this is the session', req.session)
    
    User.findOne({ username })
    .then(async (user) => { // ._id
        // we check if the user exists
        // if they do, we'll compare the passwords and make sure it's correct
        if (user) {
            // compare the pw
            // bcrypt.compare evaluates to a truthy or falsy value
            const result = await bcrypt.compare(password, user.password)
            if (result) {
                // if the compare comes back truthy we store user properties in the session
                // if the pw is correct, we'll use the newly created session object
                req.session.username = username
                req.session.loggedIn = true
                req.session.userId = user._id
                
                console.log('this is the session after login', req.session)
                res.redirect('/fasts')
            } else {
                // otherwise(pw incorrect) send an error message
                
                res.json({ error: 'username or password incorrect' })
            }
        } else {
            
            res.json({ error: 'user does not exist' })
        }
    })
    
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})
// // logout route

router.get('/logout', (req, res) => {
// destroy the session and redirect to the main page
req.session.destroy(ret => {
    console.log('this is returned from req.session.destroy', ret)
    console.log('session has been destroyed')
    console.log(req.session)
    res.redirect('/fasts')
})
})
///////////////////////////////////////
// export our router
///////////////////////////////////////
module.exports = router