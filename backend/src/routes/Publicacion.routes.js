const  publicacion= require('../services/Publicacion.services')
const {Router} =  require('express')
const router =  Router() // para crear rutas

router.route('/')    
    .get((req,res)=> res.send('Publicaciones'))
router.post('/publicacion', publicacion.createPublication )
router.get('/publicacion', publicacion.getPublicaciones)
router.get('/publicacion/:id', publicacion.getPublicacion)
router.delete('/publicacion/:id', publicacion.deletePublicacion)
router.put('/publicacion/:id', publicacion.updatePublication)

module.exports = router// enrutador del archivo
