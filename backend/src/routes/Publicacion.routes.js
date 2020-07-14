const  publicacion= require('../services/Publicacion.services')
const {Router} =  require('express')
const router =  Router() // para crear rutas
const auth = require('../middlewares/auth')


router.route('/')    
    .get((req,res)=> res.send('Publicaciones'))
router.post('/publicacion',auth ,publicacion.createPublication )
router.get('/publicacion', publicacion.getPublicaciones)
router.get('/publicacion/:id', publicacion.getPublicacion)
router.get('/canal', auth ,publicacion.getPublicacionCanal)

router.get('/canal/:id', auth ,publicacion.getPublicacionCanalByID)
router.delete('/publicacion/:id', publicacion.deletePublicacion)
router.put('/publicacion/:id', publicacion.updatePublication)

module.exports = router// enrutador del archivo
