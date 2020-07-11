const {Schema, model} = require('mongoose')

const tipoUsuarioSchema = new Schema({
    //id: {type: String, required :true},
    nombre : { type: String, required: true},
    description: {type: String, required: false},
    //estado: {type: String, required: false, default: "Activo"}
    },
    {
        timestamps:true //para la fechas de creacion y update creation
    }
)

module.exports = model ('TipoUsuario', tipoUsuarioSchema)
