const  comentarios= require('../services/Comentarios.services')
const {Router} =  require('express')
const router =  Router() // para crear rutas
const auth = require('../middlewares/auth')

router.route('/')    
    .get((req,res)=> res.send('Comentarios'))
router.post('/comentarios',auth, comentarios.createComentarios )
router.get('/comentarios', comentarios.getComentarios )
//router.get('/comentarios/:id', comentarios.getComentario )
router.get('/comentarios/:post', comentarios.getComentariosPublicacion )
router.delete('/comentarios/:id', comentarios.deleteComentario)
router.put('/comentarios/:id', comentarios.updateComentario )

module.exports = router// enrutador del archivo
