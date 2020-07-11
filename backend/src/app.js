const bodyParser = require('body-parser');
const express = require('express')
const multer = require('multer')// para subir archivos
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
//const ejs = require('ejs') //para renderizar, express lo usa pñor defecto, solo lo configuramos
const app = express()

// Importing Routes
const routessuscriptores = require('./routes/suscriptores.routes')
const routespublicacion = require('./routes/Publicacion.routes')
const routescomentarios = require('./routes/Comentarios.routes')
const routestipousuario = require('./routes/TipoUsuario.routes')
const routestipocanal = require('./routes/TipoCanal.routes')
const routestpu = require('./routes/TipoPublicacion.routes')
const routescategoria = require('./routes/Categoria.routes')
const routesusuario = require('./routes/Usuario.routes')
const routesunlikes = require('./routes/Unlikes.routes')
const routeslikes = require('./routes/Likes.routes')
const routescanal = require('./routes/Canal.routes')
const routesusers = require('./routes/Users.routes');
const routesindex= require('./routes/index.routes')
const router = require('./routes/TipoUsuario.routes');
//settings
app.set('port', 3000)
//app.set('views', path.join(__dirname, 'views'))
//app.set('view engine', 'ejs')


//middlewares --> necesita entender la imagen o lo que le estas enviando y uno vez lo hace pasa a las rutas.. por eso se hace antes de las rutas
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
//app.use(bodyParser.urlencoded({extended:false}))
//app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
//app.use(require('./routes/index.routes'))//utiliza el enrutador 
app.use('/suscriptores', routessuscriptores)
app.use('/publicacion' , routespublicacion)
app.use('/comentarios', routescomentarios)
app.use('/tipousuario', routestipousuario)// asiiiiiii <------------------
app.use('/categoria', routescategoria)
app.use('/tipocanal', routestipocanal)
app.use('/tpublicacion', routestpu)
app.use('/unlikes' , routesunlikes)
app.use('/usuario', routesusuario)
app.use('/likes' , routeslikes)
app.use('/users', routesusers)// --> auth
app.use('/canal',routescanal)
app.use('/', routesindex)


//StaticFiles
app.use(express.static(path.join(__dirname, 'public')))




module.exports = app


