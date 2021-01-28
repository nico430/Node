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
let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe el empleado con el id: ${ id }`)
    } else {
        return empleadoDB
    }
};

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`)
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `EL salario de ${resp.nombre} es de $ ${resp.salario}`
}

getInformacion(1)
    .then(mensaje => { console.log(mensaje) })
    .catch(err => console.log(err))