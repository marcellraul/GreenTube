const jwt = require('jsonwebtoken')
const User = require('../models/Users')

const auth = async(req, res, next) => {
   const token = req.header('Authorization').replace('Bearer ', '')
   const data = jwt.verify(token, '123456')
   try {
      const user = await User.findOne({ _id: data._id})
      if (!user) {
         throw new Error()
         console.log('object');
      }
      req.user = user
      req.token = token
      next()
   } catch (error) {
       console.log(error);
      res.status(401).send({ error: 'Not authorized to access this resource' })
   }

}
module.exports = auth