'use strict'
const TipoUsuario = require('../models/TipoUsuario')

async function createTipoUser(req, res) {
    const { nombre,description } = req.body
    const newtipoU = {
        nombre: nombre,
        description: description,
    }
    const tipou = new TipoUsuario(newtipoU)
    await tipou.save()
    console.log('saving users')
    console.log(req.body)
    //console.log(req.file)//
    return res.json({
        message: 'tipoUser seccessfuly saved',
        tipou
        
    })
}

async function getTipoUsers(req, res){
    const gets = await TipoUsuario.find()
    console.log(gets)
    return res.json(gets)
}

async function getTipoUser(req,res){
    const id = req.params.id
    const get = await TipoUsuario.findById(id)
    console.log(req.params.id)   
    return res.json(get) 
}

async function updateTipoUser(req,res){
    const id = req.params.id
    const {nombre, description}= req.body
    const update = await TipoUsuario.findByIdAndUpdate(id,{
        nombre,
        description
    }, {new : true})
    console.log(update);
    return res.json({
        message: 'Update TipoUsers',
        update
    })
}

async function deleteTipoUser(req,res){
    const id = req.params.id
    const deletetu = await TipoUsuario.findByIdAndDelete(id)
    /* if(deletetipouser){
            const pathdelete = await fs.unlink(path.resolve(deletetipouser.imagePath))}*/
    console.log(deletetu);
    return res.json({
        message:'TipoUsers delete',
        deletetu
    })
}

module.exports = {
    createTipoUser,
    getTipoUsers,
    getTipoUser,
    deleteTipoUser,
    updateTipoUser
}