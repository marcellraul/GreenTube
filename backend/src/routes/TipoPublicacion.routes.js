const  tpublicacion= require('../services/TipoPublicacion.services')
const {Router} =  require('express')
const router =  Router() // para crear rutas

router.route('/')    
    .get((req,res)=> res.send('Tipo Publicacion'))
router.post('/tpublicacion', tpublicacion.createTpublicacion)
router.get('/tpublicacion', tpublicacion.getTpublicacions )
router.get('/tpublicacion/:id', tpublicacion.getTpublicacion)
router.delete('/tpublicacion/:id', tpublicacion.deleteTpublicacion)
router.put('/tpublicacion/:id', )

module.exports = router// enrutador del archivo