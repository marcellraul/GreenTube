const {Router} =  require('express')
const router =  Router() // para crear rutas
/*
router.get('/tipousuario', (req,res)=> {
    console.log('tipousuario routes')
    })*/
router.route('/')    
    .get((req,res)=> res.send('Usuario'))
module.exports = router// enrutador del archivo
