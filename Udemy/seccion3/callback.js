// callback es una función que se ejecuta luego de cierta condición

setTimeout(() => {
    console.log('hola callbacks');
}, 3000)

// setTimeout es el callback mas sencillo en js este es una función que llama a otra función luego de un tiempo especificado en milisegundos

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Nicolas',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id} no existe en la b.d.`)
    } else {
        callback(null, usuario);
    }
};

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }

    console.log('usuario de bd', usuario);
});