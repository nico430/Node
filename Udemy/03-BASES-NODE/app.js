const { crearArchivo } = require('./multiplicar/multiplicar');

//console.log(process.argv) process viene en node y muestra una cantidad inmensa de datos utiles
//el argv muestra unicamente los argumentos que halla ingresados en consola por defecto se mustra donde se encuentra node y donde se encuentra el archivo ejecutado


let argv = process.argv;
let parametro = argv[2]; //tercer parametro ingresado
let base = parametro.split('=')[1]; //separa la frase por el simbolo indicado y selecciono el 2 elemento


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => { console.log(e) });