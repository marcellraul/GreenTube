'use strict'
const Canal = require('../models/Canal')

async function CreateCanal(req,res){
    const { nombre , desc, tipo, usuario,
            playList, fotoPerfil, fotoPortada,
            notificacion, suscriptores} = req.body

    const newcanal = {
        nombre: nombre,
        desc: desc,
        tipo: tipo,
        usuario: usuario,
        playList: playList,
        fotoPerfil: fotoPerfil,
        fotoPortada: fotoPortada,
        notificacion: notificacion,
        suscriptores: suscriptores
    }
    const canal = new Canal(newcanal)
    await canal.save()
    console.log('Saving Canal')
    console.log(req.body)
    return res.json({
        message: 'Canal seccessfuly saved',
        canal
    })
}

async function getCanals(req,res){
    const gets = await Canal.find()
    console.log(gets);
    return res.json(gets)
}

async function getCanal(req,res){
    const id = req.params.id
    const get = await Canal.findById(id)
    console.log({get,id});
    return res.json(get)
}

async function updateCanal(req,res){
    const id = req.params.id
    const { nombre , desc, tipo, usuario,
        playList, fotoPerfil, fotoPortada,
        notificacion, suscriptores} = req.body
        const update = await Canal.findByIdAndUpdate(id,{
            nombre: nombre,
            desc: desc,
            tipo: tipo,
            usuario: usuario,
            playList: playList,
            fotoPerfil: fotoPerfil,
            fotoPortada: fotoPortada,
            notificacion: notificacion,
            suscriptores: suscriptores
        }, {new: true})
        console.log(update)
        return res.json(update)
}

async function deleteCanal(req,res){
    const id = req.params.id
    const deleteca = await Canal.findByIdAndDelete(id)
    console.log(deleteca);
    return res.json({
        message: 'Delete Canal',
        deleteca})
}

module.exports = {
    CreateCanal,
    getCanals,
    getCanal,
    updateCanal,
    deleteCanal,
}