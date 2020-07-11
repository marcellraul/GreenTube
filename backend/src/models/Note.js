const {Schema,model} = require('mongoose');

const NoteSchema =new Schema({
    title: {
        type: String,
        required : true
        },
    description: {
        type: String,
        required: true,
        },
    },{
    timestamps: true// lo añade por defecto el createdAdd y updateAdd
    })

module.exports=model('Note', NoteSchema);


