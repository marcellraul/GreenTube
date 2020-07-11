'use strict'
const {Schema, model} = require('mongoose');

const canalSchema = new Schema({
    nombre:{ type: String, required: true},
    desc : { type: String},
    tipo:  { type: String/*Schema.ObjectId, ref: "TipoCanal", */,required: true},
    usuario: { type: String/*Schema.ObjectId, ref: "Usuarios"*/, required: true},
    playList: { type: String },//mistras tanto aqui va una arreglos dentro de otro,
    fotoPerfil: String,
    fotoPortada: String,
    notificacion: String,
    suscriptores: { type: String, /*ref: "Suscriptores"*/},
    },
    {
        timestamps: true
    }
);

module.exports = model('Canal', canalSchema);

