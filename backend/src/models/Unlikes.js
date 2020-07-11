const {Schema, model} = require('mongoose')


const unlikesSchema = new Schema({
    canal: {type: String, ref: "TipoUsuario", required: true, },///cambiar
    fechaUnlike: { type: Date, default: Date.now },
    estado: { type: Boolean, default: true },
});

module.exports = model('Unlikes', unlikesSchema);
