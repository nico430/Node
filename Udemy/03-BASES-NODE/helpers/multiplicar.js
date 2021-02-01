const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 1, cantidad, listar) => {

    try {


        let salida = '';

        for (let i = 1; i <= cantidad; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
        }

        if (listar) {
            console.log('==================='.blue);
            console.log('   Tabla del: ', base);
            console.log('==================='.blue);
            console.log(salida);
        }

        fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);

        return (`tabla-${base}.txt`);

    } catch (err) {
        throw err
    }

}



module.exports = {
    crearArchivo
}