'use strict'

const TipoPublicacion = require('../models/TipoPublicacion')

async function createTpublicacion(req,res){
    const {nombre, desc} = req.body
    const newtpublicacion = {
        nombre: nombre,
        desc : desc
    }
    const tp = new TipoPublicacion(newtpublicacion)
    await tp.save()
    console.log('Saving TPublication')
    console.log(req.bod)
    return res.json({
        message: 'Tpublicacion seccessfuly saved',
        tp
    })
}

async function getTpublicacions(req,res) {
    const gets = await TipoPublicacion.find()
    console.log(gets)
    return res.json(gets)

}

async function getTpublicacion(req,res){
    const id = req.params.id
    const get = await TipoPublicacion.findById(id)    
    console.log(get)
    return res.json(get)

}

async function deleteTpublicacion(req,res){
    const id = req.params.id
    const deletetp =await TipoPublicacion.findByIdAndDelete(id)
    console.log(deletetp)
    return res.json({
        message : 'Tpublicacion delete',
        deletetp
    })
}


module.exports = {
    createTpublicacion,
    getTpublicacions,
    getTpublicacion,
    deleteTpublicacion

}
