const {Schema,model} = require('mongoose')

const suscriptoresSchema = new Schema({
    //id: {type: String, required :true},
    canal : { type: String},
    
    estado :{ type: Boolean, default: true }
    },{ 
        timestamps: true
    }
)

module.exports = model('Suscriptores', suscriptoresSchema);

