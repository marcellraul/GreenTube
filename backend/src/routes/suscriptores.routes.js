
const  suscriptores = require('../services/Suscriptores.services')
const {Router} =  require('express')
const router =  Router() // para crear rutas

router.route('/')    
    .get((req,res)=> res.send('Suscriptores'))
router.post('/suscriptores', suscriptores.createSuscriptores )
router.get('/suscriptores', suscriptores.getSuscriptores)
router.get('/suscriptores/:id',suscriptores.getSuscriptor )
router.delete('/suscriptores/:id', suscriptores.deleteSuscriptor)
router.put('/suscriptores/:id', suscriptores.updateSuscriptor )

module.exports = router// enrutador del archivo