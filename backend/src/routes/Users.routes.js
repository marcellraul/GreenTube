'use strict'

const express = require('express')
const User = require('../models/Users')

const router = express.Router()

router.route('/')
    .get((req, res) => res.send('Users'))

router.post('/users', async (req, res) => {
    // Create a new user
    try {
       const user = new User(req.body)
       await user.save()
       res.json(user)
       //const token = await user.generateAuthToken()
       console.log(token)

       res.status(201).send({ user, token })
    } catch (error) {
        res.json(error)
       res.status(400).send(error)
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
        if (!user) {
            return res.status(401).send({
                error: 'Login failed! Check authentication credentials'
            })
        }
        const token = await user.generateAuthToken()
        res.send({
            user,
            token
        })
    } catch (error) {
        res.status(400).send(error)
    }

})

module.exports = router