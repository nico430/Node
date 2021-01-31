const fs = require('fs');

const crearArchivo = async(base = 1, listar) => {

    try {


        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
        }

        if (listar) {
            console.log('===================');
            console.log('   Tabla del: ', base);
            console.log('===================');
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