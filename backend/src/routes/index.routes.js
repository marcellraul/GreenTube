const {Router} =  require('express')
const path = require('path')
const router =  Router() // para crear rutas

//const uploads = require('index')
/*
router.get('/', (req,res)  => {
    res.render('index') //ya sabe donde esta por el ejs
}) //ruta inicial*/
//router.get('/')
/*
router.post('/uploads',(req,res)=> {
    console.log(req.file)
    res.send('uploaded')
}) //ruta para enviar la imagen
*/
router.route('/')    
    .get((req,res)=> res.send('Index'))
    
module.exports = router// enrutador del archivo
