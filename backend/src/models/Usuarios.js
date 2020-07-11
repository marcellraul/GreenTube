const {Schema, model}= require('mongoose');
const bcrypt = require('bcryptjs');


const UsuariosSchema = new Schema({
    usuario:{ type:String, required: true},
    correo:{ type: String, required: true},
    pass:{ type: String, required: true},
    tipo:{ type: String/*Schema.ObjectId, ref: "TipoUsuario"*/, required: true},
    },
    {//para la fechas de creacion y update creation
        timestamps:true
    }
);

module.exports = model('Usuarios', UsuariosSchema);

UsuariosSchema.methods.encryptPass =  async pass => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass,salt);
};

UsuariosSchema.methods.matchPass = function(passcrypt){
    await bcrypt.compare(passcrypt , this.pass);// revisar 
}
