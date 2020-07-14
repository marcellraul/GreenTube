const  suscriptores = require('../services/Suscriptores.services')
const {Router} =  require('express')
const router =  Router() // para crear rutas
const auth = require('../middlewares/auth')

router.route('/')    
    .get((req,res)=> res.send('Suscriptores'))
router.post('/suscriptores',auth, suscriptores.createSuscriptores )
router.get('/suscriptores', suscriptores.getSuscriptores)
//router.get('/suscriptores/:id',suscriptores.getSuscriptor )
router.get('/suscriptores/:post',suscriptores.getSuscriptoresCanal )

router.get('/canal', auth, suscriptores.getSuscriptoresCanal )
router.get('/siguiendo', auth, suscriptores.getSuscriptoresCanal )

router.delete('/suscriptores/:id', suscriptores.deleteSuscriptor)
router.put('/suscriptores/:id', suscriptores.updateSuscriptor )

module.exports = router// enrutador del archivo