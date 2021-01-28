/*
Async Await
*/

let getNombre = async() => {

    throw new Error('No existe un nombre para el usuario');

    return 'Nicolas';

};
//esto es lo mismo que hacer:
/*
let getNombre = () => {
    return new Pormise( (resolve, response) => {
        resolve ('Fernando')
    });
}
*/

getNombre().then(nombre => {
        console.log(nombre);
    })
    .catch(e => {
        console.log('Error de ASYNC', e);
    })