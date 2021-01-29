const argv = require('yargs')
    .command('listar', 'imprime la tabla en consola', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv


const { crearArchivo } = require('./multiplicar/multiplicar');

//console.log(process.argv) process viene en node y muestra una cantidad inmensa de datos utiles
//el argv muestra unicamente los argumentos que halla ingresados en consola por defecto se mustra donde se encuentra node y donde se encuentra el archivo ejecutado


let argv2 = process.argv;
console.log(argv.base) //atencion que se usa yargs
console.log(argv.limite)

//let parametro = argv[2]; //tercer parametro ingresado
//let base = parametro.split('=')[1]; //separa la frase por el simbolo indicado y selecciono el 2 elemento


//console.log(argv2)

//crearArchivo(base)
//  .then(archivo => console.log(`Archivo creado: ${archivo}`))
//.catch(e => { console.log(e) });