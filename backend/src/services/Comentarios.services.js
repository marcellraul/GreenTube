'use strict'

const Comentarios = require('../models/Comentarios')

async function createComentarios(req,res){
    const { publicacion, comentario,usuario, likes, unlikes}= req.body
    const newcomentario = {
        publicacion : publicacion,
        comentario: comentario,
        likes : likes,
        unlikes: unlikes
    }
    const co = new Comentarios(newcomentario)
    await co.save()
    console.log('Saving Comentarios')
    console.log(req.body)
    return res.json({
        message: 'Comentario seccessfuly saved',
        co
        
    })
}

async function getComentarios(req,res){
    const gets = await Comentarios.find()
    console.log(gets)
    return res.json(gets)
}

async function getComentario(req,res){
    const id = req.params.id
    const get = await Comentarios.findById(id)
    console.log(req.params.id)   
    return res.json(get)
}

async function updateComentario(req,res){
    const id = req.params.id
    const { publicacion,comentario,usuario ,likes, unlikes} = req.body
    const update = await Comentarios.findByIdAndUpdate(id,{ 
        publicacion,comentario, likes, unlikes
    }, {new : true})
    console.log(update);
    return res.json({
        message: 'Update Comentario',
        update
    })
}

async function deleteComentario(req,res){
    const id = req.params.id
    const deletetu = await Comentarios.findByIdAndDelete(id)
    /* if(deletetipouser){
            const pathdelete = await fs.unlink(path.resolve(deletetipouser.imagePath))}*/
    console.log(deletetu);
    return res.json({
        message:'Comentario delete',
        deletetu
    })
}

module.exports = {
    createComentarios,
    getComentario,
    getComentarios,
    deleteComentario,
    updateComentario
}

