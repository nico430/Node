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

//para tener el empleado necesito tener el id y el callback para cuando ya tenga el id

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`No existe el empleado con el id: ${ id }`)
    } else {
        callback(null, empleadoDB);
    }
}



//tarea? ok hacer una funcion que entregue el salario a los empleados ls respuestas tienen que ser en json y notificar error en caso de no haber un salario asignado

/*let getSalario = (id, callback) => {

    let sueldo = salarios.find(salario => salario.id === id)
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    let salarioEmpleado = {
        nombre: empleadoDB.nombre,
        sueldo: sueldo.salario
    }
    if (!sueldo) {
        callback(`No se encuantra un salario disponible para el empleado con id ${id}`)
    } else {
        callback(null, salarioEmpleado)
    }
}

getSalario(2, (err, sueldoEmpleado) => {
    if (err) {
        return console.log(err);
    }

    console.log(sueldoEmpleado);
})*/

//solucion del curso

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        `No se encontró un salario para el empleado ${empleado.nombre}`
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${resp.nombre} es: $ ${resp.salario}`);
    })
})