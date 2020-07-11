'use strict'

const {Schema, model} = require('mongoose')
const ComentariosSchema = new Schema({
    publicacion: { type: String, /*required: true*/},
    comentario: { type : String},
    usuario : {type: String},
    likes: String,
    unlikes: String
    },
    {
        timestamps: true
    }
)

module.exports = model('Comentarios', ComentariosSchema);
