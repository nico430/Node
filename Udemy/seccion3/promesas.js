let empleados = [{
        id: 1,
        nombre: 'Nicolas'
    },
    {
        id: 2,
        nombre: 'pepe'
    },
    {
        id: 3,
        nombre: 'argento'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getEmpleado = (id) => {
    // se llama a resolve si es successfull o reject si no se ah podido resolver
    return new Promise((resolve, reject) => {


        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe el empleado con el id: ${ id }`)
        } else {
            resolve(empleadoDB);
            //en el resolve no se pueden mandar mas de un argumento, de ser necesario se debe hacer en forma de objeto
        }

    });

}

//al llamar una promesa en vez de especificar como lo haciamos en los callbacks debemos hacerlo por medio del método .then() y pasarle por primer argumenro el resolve y por segundo el reject

//tarea:
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    });
}

/*getEmpleado(1).then( //argumento 1 resolve
    empleado => {
        console.log('Empleado de base de datos: ', empleado);

        getSalario(empleado).then((e) => {
                console.log(`El salario de ${e.nombre} es de $ ${e.salario}`)
            },

            (err) => console.log(err)
        )

    }, //coma

    //argumento 2 reject

    (err) => console.log(err)

)*/

//promesas en cadena

getEmpleado(1).then(empleado => {
        return getSalario(empleado);
    })
    .then(resp => {
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`);
    })
    // En caso de falla usamos 

.catch(err => {
    console.log(err);
});