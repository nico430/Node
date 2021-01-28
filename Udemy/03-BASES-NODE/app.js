const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 'a';

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => { console.log(e) });