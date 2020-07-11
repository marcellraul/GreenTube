const  comentarios= require('../services/Comentarios.services')
const {Router} =  require('express')
const router =  Router() // para crear rutas

router.route('/')    
    .get((req,res)=> res.send('Comentarios'))
router.post('/comentarios', comentarios.createComentarios )
router.get('/comentarios', comentarios.getComentarios )
router.get('/comentarios/:id', comentarios.getComentario )
router.delete('/comentarios/:id', comentarios.deleteComentario)
router.put('/comentarios/:id', comentarios.updateComentario )

module.exports = router// enrutador del archivo
