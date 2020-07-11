'use strict'
const Likes = require('../models/Likes')

async function createLikes(req, res) {
    const { canal,fechaLike,estado } = req.body
    const newlikes = {
        canal: canal,
        fechaLike: fechaLike,
        estado: estado
    }
    const likes = new Likes(newlikes)
    await likes.save()
    console.log('saving likes')
    console.log(req.body)
    //console.log(req.file)//
    return res.json({
        message: 'Likes seccessfuly saved',
        likes
        
    })
}

async function getLikes(req, res){
    const gets = await Likes.find()
    console.log(gets)
    return res.json(gets)
}

async function deleteLikes(req,res){
    const id = req.params.id
    const deletetu = await Likes.findByIdAndDelete(id)
    /* if(deletetipouser){
            const pathdelete = await fs.unlink(path.resolve(deletetipouser.imagePath))}*/
    console.log(deletetu);
    return res.json({
        message:'Likes delete',
        deletetu
    })
}

module.exports = {
    createLikes,
    getLikes,
    deleteLikes
}

