const categoria = require('../services/Categoria')
const {Router} =  require('express')
const router =  Router() // para crear rutas

router.route('/')    
    .get((req,res)=> res.send('Categoria'))
router.post('/categoria', categoria.createCategoria )
router.get('/categoria', categoria.getCategorias)
router.get('/categoria/:id', categoria.getCategoria)
router.delete('/categoria/:id', categoria.deleteCategoria)
router.put('/categoria/:id', )

module.exports = router// enrutador del archivo
