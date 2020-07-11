const canal = require('../services/Canal.services')
const {Router} =  require('express')
const router =  Router() // para crear rutas

router.route('/')    
    .get((req,res)=> res.send('Canal'))
router.post('/createcanal', canal.CreateCanal)
router.get('/canal',canal.getCanals )
router.get('/canal/:id', canal.getCanal )
router.put('/canal/:id',canal.updateCanal )
router.delete('/canal/:id',canal.deleteCanal )

module.exports = router// enrutador del archivo

/*

const  = require('../services/')
const {Router} =  require('express')
const router =  Router() // para crear rutas

router.route('/')    
    .get((req,res)=> res.send(''))
router.post('/', )
router.get('/', )
router.get('//:id', )
router.delete('//:id', )
router.put('//:id', )

module.exports = router// enrutador del archivo

 */

