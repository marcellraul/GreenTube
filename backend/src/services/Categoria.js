'use strict'

const Categoria = require('../models/Categoria')

async function createCategoria(req,res){
    const {nombre, desc} = req.body
    const newtcategoria = {
        nombre: nombre,
        desc : desc
    }
    const ca = new Categoria(newtcategoria)
    await ca.save()
    console.log('Saving Categoria')
    console.log(req.bod)
    return res.json({
        message: 'Categoria seccessfuly saved',
        ca
    })
}

async function getCategorias(req,res) {
    const gets = await Categoria.find()
    console.log(gets)
    return res.json(gets)

}

async function getCategoria(req,res){
    const id = req.params.id
    const get = await Categoria.findById(id)    
    console.log(get)
    return res.json(get)

}

async function deleteCategoria(req,res){
    const id = req.params.id
    const deletetp = await Categoria.findByIdAndDelete(id)
    console.log(deletetp)
    return res.json({
        message : 'Categoria delete',
        deletetp
    })
}


module.exports = {
    createCategoria,
    getCategoria,
    getCategorias,
    deleteCategoria

}
