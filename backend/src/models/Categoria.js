const {Schema,model} = require('mongoose')

const categoriaSchema = new Schema({
    //id: {type: String, required :true},
    nombre : { type: String, required: true},
    desc: { type: String, required: false}
    },
    {
        timestamps: true
    }
)

module.exports = model('Categoria', categoriaSchema)