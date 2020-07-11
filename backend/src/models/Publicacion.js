const {Schema, model} = require('mongoose')

const publicacionScheme = new Schema({
    titulo: { type: String, required: true},
    desc: String,
    canal: String,
    tipo: String,
    categoria: String,
    likes: String,
    unlikes: String,
    views: Number,
    comentarios: String,
    imagePreview: String,
    video: String
},{timestamps:true});

module.exports = model('Publicacion', publicacionScheme);
