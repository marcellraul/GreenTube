'use strict'

const express = require('express')
const User = require('../models/Users')
const auth = require('../middlewares/auth')

const router = express.Router()

router.route('/')
    .get((req, res) => res.send('Users'))

router.get('/users' , async (req,res) =>{
    try {
        const gets = await User.find()
        console.log(gets)
        return res.json(gets)
    }catch(e){
        console.log(error)
        res.json(error)
    }
})    

router.post('/users', async (req, res) => {
    // Create a new user
    try {
        const user = new User(req.body)
        await user.save()
        console.log(user)
        const token = await user.generateAuthToken()
        console.log(token)
        res.json({
            user,
            token
        })

        //res.status(201).send({ user, token })
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

router.post('/users/login', async (req, res) => {
    //Login a registered user
    try {
        const {
            email,
            password
        } = req.body
        const user = await User.findByCredentials(email, password)
        //console.log(user)

        if (!user) {
            console.log(user)
            console.log('object');
            return res.status(401).json({
                
                error: 'Login failed! Check authentication credentials'
            })
        }
        const token = await user.generateAuthToken()
        res.json({
            user,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }

})

router.get('/users/me', auth, async(req, res) => {
    // View logged in user profile
    res.send(req.user)
 })

 router.post('/users/me/logout', auth, async (req, res) => {
    // Log user out of the application
    try {
        req.user.token = true
        await req.user.save()
        res.send('logout successfuly')
        } catch (error) {
            console.log(error);
        res.status(500).send(error)
        }
 })
 

module.exports = router