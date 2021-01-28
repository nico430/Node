//requires

let fs = require('fs');


let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(console.log(`EL valor ingresado "${ base }" no es un número`));
            return;
        }

        let data = '';

        for (let i = 1; i < 15; i++) {

            /*let res = base * i;
            console.log(res);
            */
            data += `${base} * ${i} = ${ i * base }\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                reject(err);
                return;
            } else {
                resolve(`tabla-${base}.txt`)
            }
        });

    })

}

module.exports = {
    crearArchivo
}