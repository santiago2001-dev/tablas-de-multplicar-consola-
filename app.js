
console.clear()
//desestrcuturamos el objeto creado de el otro archvio y lo guardamos en una variable que nos trae nuestra funciion
// que recive como parametro una variable
const {crearArchivo} = require('./helpers/multiplicar')

//llamado de archvio yargs
const argv = require('./config/yargs');
//cllamdo de colors "cambia el color de la consola"
const colors = require('colors')

 //llamado de funcion
  crearArchivo(argv.base,argv.listar,argv.hasta)
  .then(resutls=> console.log( resutls))
 .catch(err=> console.log(err))