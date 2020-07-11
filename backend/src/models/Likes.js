const {Schema, model} = require('mongoose');

const likesSchema = new Schema({
    canal: {type: String, ref: "TipoUsuario", required: true, },//cambiar 
    fechaLike: { type: Date, default: Date.now },
    estado: { type: Boolean, default: true },
});

module.exports = model('Likes', likesSchema);
