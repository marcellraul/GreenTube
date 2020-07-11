const unlikes = require('../services/Unlikes.services')
const {Router} =  require('express')
const router =  Router() // para crear rutas

router.route('/')    
    .get((req,res)=> res.send('UnLikes'))
router.post('/unlikes', unlikes.createUnLikes)
router.get('/unlikes', unlikes.getUnLikes)
router.get('/unlikes/:id', )
router.delete('/unlikes/:id', unlikes.deleteUnLikes )
router.put('/unlikes/:id', )

module.exports = router// enrutador del archivo
