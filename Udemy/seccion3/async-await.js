/*
Async Await
*/

/*let getNombre = async() => {

    throw new Error('No existe un nombre para el usuario');

    return 'Nicolas';

};*/
//esto es lo mismo que hacer:

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Nicolas');
            reject('No existe un nombre para el usuario')
        }, 3000);

    });
}


//el encadenamiento de promesas con async await es mas sencillo ya que 
//poniendo await a la promeas que se espera parecera un trabajo sincrono 
//ya que esperaria a la priomesa necesaria antes de ejecutar la actual.

let saludo = async() => {
    let nombre = await getNombre();

    return `Hola ${nombre}`
}



saludo().then(mensaje => {
        console.log(mensaje);
    })
    /*.catch(e => {
        console.log('Error de ASYNC', e);
    })*/