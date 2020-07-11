'use strict'
const Suscriptores = require('../models/Suscriptores')

async function createSuscriptores (req,res){
    const {canal,canalnombre,estado} = req.body
    const newsuscriptor = {
        canal : canal,
        canalnombre: canalnombre,
        estado : estado
    }
    const suscrip = new Suscriptores(newsuscriptor)
    await suscrip.save()
    console.log('Saving Suscriptor')
    console.log(req.body)
    return res.json({
        message: 'Suscriptor seccesfuly',
        suscrip

    })
}

async function getSuscriptores(req,res){
    const gets = await Suscriptores.find()
    console.log(gets)
    return res.json(gets)
}

async function getSuscriptor(req,res){
    const id = req.params.id
    const get = await Suscriptores.findById(id)
    console.log(get)
    return res.json(get)
} 

async function deleteSuscriptor(req,res){
    const id = req.params.id
    const deleteSuscrip = await Suscriptores.findByIdAndDelete(id)
    console.log(deleteSuscrip)
    return res.json({
        message: 'Suscriptor deleted',
        deleteSuscrip
    })
}


async function updateSuscriptor (req,res){
    const id = req.params.id
    const {canal,canalnombre,estado} = req.body
    const update = await Suscriptores.findByIdAndUpdate(id,{
        canal, canalnombre, estado
    }, {new : true})
    console.log(update);
    return res.json({
        message: 'Update Suscriptor',
        update
    })
}

module.exports = {
    createSuscriptores,
    getSuscriptor,
    getSuscriptores,
    deleteSuscriptor,
    updateSuscriptor
}


