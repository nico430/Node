const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'es la base en la cual se basa la tabla de multiplicar'
    })
    .option('c', {
        alias: 'cantidad',
        type: 'number',
        default: 10,
        describe: 'indica hasta que numero multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'lista la tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        } else if (isNaN(argv.c)) {
            throw 'La cantidad tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;