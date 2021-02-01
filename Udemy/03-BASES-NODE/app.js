const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.c, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.green))
    .catch(err => console.log(err))