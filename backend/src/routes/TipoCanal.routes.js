
const  tipocanal= require('../services/TipoCanal.services')
const {Router} =  require('express')
const router =  Router() // para crear rutas

router.route('/')    
    .get((req,res)=> res.send('Tipo Canal'))
router.post('/tipocanal',tipocanal.createTipoCanal )
router.get('/tipocanal', tipocanal.getTipoCanls)
router.get('/tipocanal/:id', tipocanal.getTipoCanal)
router.delete('/tipocanal/:id', tipocanal.deleteTCanal)
router.put('/tipocanal/:id', )

module.exports = router// enrutador del archivo
