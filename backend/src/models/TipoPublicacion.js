const {Schema,model} = require('mongoose')

const tipoPublicacionSchema= new Schema({
     //id: {type: String, required :true},
     nombre : { type: String, required: true},
     desc: { type: String, required: false}
 
     },
     {
          timestamps: true
     }
)

module.exports = model('TipoPublicacion', tipoPublicacionSchema)
