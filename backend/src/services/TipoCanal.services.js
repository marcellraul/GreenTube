'use strict'
const TipoCanal = require('../models/TipoCanal')

async function createTipoCanal(req,res){
    const {nombre, desc} = req.body
    const newtcanal = {
        nombre: nombre,
        desc : desc
    }
    const tc = new TipoCanal(newtcanal)
    await tc.save()
    console.log('Saving Tipo Canal')
    console.log(req.bod)
    return res.json({
        message: 'Tipo Canl seccessfuly saved',
        tc
    })
}

async function getTipoCanls(req,res) {
    const gets = await TipoCanal.find()
    console.log(gets)
    return res.json(gets)

}

async function getTipoCanal(req,res){
    const id = req.params.id
    const get = await TipoCanal.findById(id)    
    console.log(get)
    return res.json(get)

}

async function deleteTCanal(req,res){
    const id = req.params.id
    const deletetp =await TipoCanal.findByIdAndDelete(id)
    console.log(deletetp)
    return res.json({
        message : 'Tipo Canal delete',
        deletetp
    })
}

module.exports = {
    createTipoCanal,
    getTipoCanal,
    getTipoCanls,
    deleteTCanal,

}
