const multer = require('multer')// para subir archivos
const {v4:uuidv4} = require('uuid')
const path = require('path')
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const storage = multer.diskStorage({
        destination: 'public',
        filename:(req,file,cb)=>{
            cb(null,uuidv4()+path.extname(file.originalname).toLocaleLowerCase())
            }
        })

const Multer = multer({
    storage,
    dest: path.join(__dirname, 'public/uploads'),
    limits: {fileSize: 5000000}, //5mb
    fileFilter: (req,file,cb)=>{
        const filetypes =/jpeg|jpg|png|gif/
        const mimetype = filetypes.test(file.mimetype)
        const extmane =  filetypes.test(path.extname(file.originalname))
        if(mimetype && extmane){
            return cb (null,true)//retorna un nulo y un true porque no hara nada
        } else return cb('Error: el archivo debe ser una imagen')
    } 
})  

module.exports = Multer

/* 
const storage  = multer.diskStorage({
    destination: path.join(__dirname, './public/uploads'),
    filename: (req, file, cb)=>{
        cb(null,uuidv4() + path.extname(file.originalname).toLocaleLowerCase()) //le concatenamos la extension
    }                                                                                                                                              
})

app.use(multer({
    storage,
    dest: path.join(__dirname, 'public/uploads'),
    limits : {fileSize: 2000000},//el limete de bytes
    //validar el tipo de imagen
    fileFilter: (req,file,cb)=>{
        const filetypes =/jpeg|jpg|png|gif/
        const mimetype = filetypes.test(file.mimetype)
        const extmane =  filetypes.test(path.extname(file.originalname))
        if(mimetype && extmane){
            return cb (null,true)//retorna un nulo y un true porque no hara nada
        } else return cb('Error: el archivo debe ser una imagen')
    }
}).single('image'))//nombe del input

*/