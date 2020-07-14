'use strict'
const Publicacion = require('../models/Publicacion')
const Canal = require('../models/Canal')


async function createPublication(req,res){
    const {titulo,desc,tipo,categoria,likes,unlikes,views,comentarios,imagePreview,video} = req.body
    const user = req.user
    const newpublicacion = {
        canal: user._id,
        titulo: titulo,
        desc: desc,
        tipo: tipo,
        categoria: categoria,
        likes: likes,
        unlikes: unlikes,
        views: views,
        comentarios: comentarios,
        imagePreview: imagePreview,
        video: video
    } 
    const pu = new Publicacion(newpublicacion)
    await pu.save()
    console.log('Savin Publicacion')
    console.log(pu)
    return res.json({
        message: 'Publicacion seccessfuly',
        pu
    })
}

async function getPublicaciones(req,res){
    const gets = await Publicacion.find()
    console.log(gets);
    return res.json(gets)
}

async function getPublicacionCanal(req, res) {
    const user = req.user
    console.log(user);
    const gets = await Publicacion.find({
        canal: user._id
    })
    console.log(gets)
    return res.json(gets)
}

async function getPublicacionCanalByID(req, res) {
    const user = req.user
    const canal = user.canal._id
    //const id = user.Canal.nombre
    console.log(canal);
    const get = await Publicacion.findById({ canal: canal})
    console.log(get)
    return res.json(get)
}

async function getPublicacion(req,res){
    const id = req.params.id
    const get = await Publicacion.findById(id)
    console.log(get)
    return res.json(get)
}

async function updatePublication(req,res){
    const id = req.params.id
    const {titulo,desc,tipo,categoria,likes,unlikes,views,comentarios,imagePreview,video} = req.body
    const update = await Publicacion.findByIdAndUpdate(id, {
        titulo: titulo,
        desc: desc,
        tipo: tipo,
        categoria: categoria,
        likes: likes,
        unlikes: unlikes,
        views: views,
        comentarios: comentarios,
        imagePreview: imagePreview,
        video: video
    }, {new:true})
    console.log(update)
    return res.json({
        message: 'Publicacion Update',
        update
    })
}

async function deletePublicacion(req,res){
    const id = req.params.id
    const deleteca = await Publicacion.findByIdAndDelete(id)
    console.log(deleteca)
    return res.json({
        message: 'Delete Publicacion',
        deleteca})
}

module.exports = {
    createPublication,
    getPublicacion,
    getPublicaciones,
    deletePublicacion,
    updatePublication,
    getPublicacionCanal,
    getPublicacionCanalByID
}
