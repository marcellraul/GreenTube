const likes = require('../services/Likes.services')
const {Router} =  require('express')
const router =  Router() // para crear rutas

router.route('/')    
    .get((req,res)=> res.send('Likes'))
router.post('/likes', likes.createLikes)
router.get('/likes', likes.getLikes)
router.get('/likes/:id', )
router.delete('/likes/:id', likes.deleteLikes )
router.put('/likes/:id', )

module.exports = router// enrutador del archivo
