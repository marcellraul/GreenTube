'use strict'
const mongoose = require("mongoose")

async function startConnection(){//mongo crear a la db por mi, no es necesrio crearla
    const db =  await mongoose.connect('mongodb://localhost/DB-Lab-iii', {
         useNewUrlParser: true, // para que cuando conecte no de ningun error por consola 
         useFindAndModify: false,
         useUnifiedTopology: true
     });
     console.log('Database is connected')
 }

 exports.startConnection = startConnection
