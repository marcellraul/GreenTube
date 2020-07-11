const {Router} =  require('express')
const router =  Router() // para crear rutas
const tipoUser = require('../services/TipoUsuario.services')

router.route('/')    
    .get((req,res)=> res.send('Tipo Usuario'))
router.post('/tipousuario', tipoUser.createTipoUser)
router.get('/tipousers', tipoUser.getTipoUsers)
router.get('/tipousers/:id', tipoUser.getTipoUser)
router.put('/tipousers/:id', tipoUser.updateTipoUser)
router.delete('/tipousers/:id', tipoUser.deleteTipoUser)


module.exports = router// enrutador del archivo
